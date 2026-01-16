export type PostStatus = "draft" | "published";

export interface RawPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content_md: string;
  cover_image_url: string;
  author: string;
  tags: string;
  published_at: string;
  status: PostStatus;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  coverImageUrl: string;
  author: string;
  tags: string[];
  publishedAt: Date;
  status: PostStatus;
}

export interface BlogFilters {
  search?: string;
  tag?: string;
  page?: number;
}

export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  pageSize: number;
}

export interface BlogListResult {
  posts: Post[];
  pagination: BlogPagination;
  availableTags: Map<string, number>;
}

export function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

export function formatTag(tag: string): string {
  return tag
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
