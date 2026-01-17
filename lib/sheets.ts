import { google } from "googleapis";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import type { RawPost, Post, BlogFilters, BlogListResult } from "./types/blog";
import { normalizeTag, generateSlug } from "./types/blog";

function getSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const sheetsId = process.env.GOOGLE_SHEETS_ID;
  const range = process.env.GOOGLE_SHEETS_RANGE || "posts!A1:K";

  if (!email || !privateKey || !sheetsId) {
    throw new Error(
      "Variáveis de ambiente do Google Sheets não configuradas. Verifique GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY e GOOGLE_SHEETS_ID"
    );
  }

  // Normalizar a chave privada para diferentes formatos de variáveis de ambiente
  // Vercel pode passar com \\n ou com quebras de linha reais
  privateKey = privateKey
    .replace(/\\n/g, "\n")           // Substituir \n escapado por quebra de linha real
    .replace(/\\\\n/g, "\n")         // Substituir \\n duplo escapado
    .replace(/"/g, "")               // Remover aspas se houver
    .replace(/^['"]|['"]$/g, "")     // Remover aspas no início e fim
    .trim();

  // Garantir que a chave começa e termina corretamente
  if (!privateKey.includes("BEGIN PRIVATE KEY")) {
    throw new Error("Formato inválido da chave privada. Deve conter 'BEGIN PRIVATE KEY'");
  }

  // Garantir que a chave termina corretamente
  if (!privateKey.includes("END PRIVATE KEY")) {
    throw new Error("Formato inválido da chave privada. Deve conter 'END PRIVATE KEY'");
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  return { auth, sheetsId, range };
}

async function fetchSheetData(): Promise<RawPost[]> {
  const { auth, sheetsId, range } = getSheetsClient();
  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetsId,
    range,
  });

  const rows = response.data.values;
  if (!rows || rows.length < 2) {
    return [];
  }

  const headers = rows[0] as string[];
  const dataRows = rows.slice(1); // Remove o cabecalho

  const posts: RawPost[] = dataRows
    .map((row) => {
      const post: Partial<RawPost> = {};
      headers.forEach((header, index) => {
        const key = header.toLowerCase().replace(/\s+/g, "_") as keyof RawPost;
        const value = row[index] || "";
        if (key === "status" && !value) {
          post[key] = "draft";
        } else if (value) {
          (post as any)[key] = value;
        }
      });
      return post as RawPost;
    })
    .filter((post) => post.id && post.title);

  return posts;
}

function parseTags(tagsString: string): string[] {
  if (!tagsString) return [];
  return tagsString
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
}

function markdownToHtml(markdown: string): string {
  const html = marked.parse(markdown, {
    breaks: true,
    gfm: true,
  }) as string;

  return sanitizeHtml(html, {
    allowedTags: [
      "p",
      "br",
      "strong",
      "em",
      "u",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "a",
      "img",
      "blockquote",
      "code",
      "pre",
      "hr",
      "table",
      "thead",
      "tbody",
      "tr",
      "td",
      "th",
    ],
    allowedAttributes: {
      a: ["href", "title"],
      img: ["src", "alt", "title"],
      "*": ["class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
  });
}

function normalizePost(rawPost: RawPost): Post {
  const slug = rawPost.slug || generateSlug(rawPost.title);
  const tags = parseTags(rawPost.tags);
  const contentHtml = markdownToHtml(rawPost.content_md || "");
  
  let publishedAt = new Date();
  if (rawPost.published_at) {
    const parsedDate = new Date(rawPost.published_at);
    if (!isNaN(parsedDate.getTime())) {
      publishedAt = parsedDate;
    }
  }

  return {
    id: rawPost.id,
    title: rawPost.title,
    slug,
    excerpt: rawPost.excerpt || "",
    contentHtml,
    coverImageUrl: rawPost.cover_image_url || "",
    author: rawPost.author || "",
    tags,
    publishedAt,
    status: rawPost.status || "draft",
  };
}

function resolveDuplicateSlugs(posts: Post[]): Post[] {
  const slugMap = new Map<string, number>();

  return posts.map((post) => {
    const baseSlug = post.slug;
    const count = slugMap.get(baseSlug) || 0;

    if (count > 0) {
      post.slug = `${baseSlug}-${count + 1}`;
    }

    slugMap.set(baseSlug, count + 1);
    return post;
  });
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const rawPosts = await fetchSheetData();
    const normalizedPosts = rawPosts.map(normalizePost);
    const publishedPosts = normalizedPosts.filter((post) => post.status === "published");
    const resolvedSlugs = resolveDuplicateSlugs(publishedPosts);
    const sortedPosts = resolvedSlugs.sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );

    return sortedPosts;
  } catch (error: any) {
    console.error("Erro ao buscar posts do Google Sheets:", error);
    
    // Log mais detalhado para debug em produção
    if (error?.code === "ERR_OSSL_UNSUPPORTED") {
      console.error("Erro de formato da chave privada. Verifique se a chave está formatada corretamente nas variáveis de ambiente.");
    }
    
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getTagsIndex(posts: Post[]): Map<string, number> {
  const tagMap = new Map<string, number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      const normalized = normalizeTag(tag);
      const count = tagMap.get(normalized) || 0;
      tagMap.set(normalized, count + 1);
    });
  });

  return tagMap;
}

function filterPosts(posts: Post[], filters: BlogFilters): Post[] {
  let filtered = [...posts];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.contentHtml.toLowerCase().includes(searchLower)
    );
  }

  if (filters.tag) {
    const tagNormalized = normalizeTag(filters.tag);
    filtered = filtered.filter((post) =>
      post.tags.some((tag) => normalizeTag(tag) === tagNormalized)
    );
  }

  return filtered;
}

export async function getBlogPosts(filters: BlogFilters = {}): Promise<BlogListResult> {
  const pageSize = 9;
  const currentPage = filters.page || 1;

  const allPosts = await getAllPosts();
  const filteredPosts = filterPosts(allPosts, filters);
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const availableTags = getTagsIndex(allPosts);

  return {
    posts: paginatedPosts,
    pagination: {
      currentPage,
      totalPages,
      totalPosts,
      pageSize,
    },
    availableTags,
  };
}
