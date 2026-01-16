import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { format, isValid } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { getPostBySlug, getAllPosts } from "@/lib/sheets";
import { Badge } from "@/components/badge";
import { formatTag } from "@/lib/types/blog";

function formatDate(date: Date): string {
  if (!date || !isValid(date)) {
    return "";
  }
  try {
    return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  } catch {
    return "";
  }
}

function getDateISOString(date: Date): string {
  if (!date || !isValid(date)) {
    return "";
  }
  try {
    return date.toISOString();
  } catch {
    return "";
  }
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.slice(0, 50).map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Erro ao gerar static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post não encontrado | GeoView",
    };
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://geoview.com.br"}/blog/${post.slug}`;

  const publishedTimeISO = getDateISOString(post.publishedAt);

  return {
    title: `${post.title} | GeoView Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      ...(publishedTimeISO && { publishedTime: publishedTimeISO }),
      authors: [post.author || "GeoView"],
      tags: post.tags,
      images: post.coverImageUrl
        ? [
            {
              url: post.coverImageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImageUrl ? [post.coverImageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-8">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {formatTag(tag)}
              </Badge>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        {post.excerpt && (
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
        )}

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span>{post.author || "GeoView"}</span>
          {(() => {
            const formattedDate = formatDate(post.publishedAt);
            const dateISO = getDateISOString(post.publishedAt);
            return formattedDate && dateISO ? (
              <>
                <span>•</span>
                <time dateTime={dateISO}>{formattedDate}</time>
              </>
            ) : null;
          })()}
        </div>

        {post.coverImageUrl && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}
      </header>

      <div
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-foreground
          prose-p:text-foreground prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:list-disc prose-ol:list-decimal
          prose-img:rounded-lg prose-img:shadow-md
          prose-blockquote:border-l-primary prose-blockquote:bg-muted prose-blockquote:py-2 prose-blockquote:px-4
          prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-muted"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
