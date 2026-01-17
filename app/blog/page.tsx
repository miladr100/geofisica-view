import { Metadata } from "next";
import { Suspense } from "react";
import { getBlogPosts } from "@/lib/sheets";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import type { BlogFilters as BlogFiltersType } from "@/lib/types/blog";
import { REVALIDATE_TIME } from "@/consts/baseConstants";

export const revalidate = REVALIDATE_TIME;

export const metadata: Metadata = {
  title: "Blog | GeoView",
  description: "Artigos e conteúdos sobre geofísica, georadar, hidrogeologia e soluções para engenharia, mineração e meio ambiente.",
  openGraph: {
    title: "Blog | GeoView",
    description: "Artigos e conteúdos sobre geofísica, georadar, hidrogeologia e soluções para engenharia, mineração e meio ambiente.",
    type: "website",
  },
};

interface BlogPageProps {
  searchParams: {
    search?: string;
    tag?: string;
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const filters: BlogFiltersType = {
    search: searchParams.search,
    tag: searchParams.tag,
    page: searchParams.page ? parseInt(searchParams.page, 10) : 1,
  };

  const { posts, pagination, availableTags } = await getBlogPosts(filters);

  return (
    <div className="container mx-auto px-4 py-20 md:py-14">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Artigos e conteúdos sobre geofísica, georadar e hidrogeologia
        </p>
      </div>

      <div className="mb-8">
        <Suspense fallback={<div className="h-20" />}>
          <BlogFilters
            availableTags={availableTags}
            currentTag={filters.tag}
            currentSearch={filters.search}
          />
        </Suspense>
      </div>

      {posts.length === 0 ? (
        <BlogEmptyState />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <BlogPagination pagination={pagination} />
        </>
      )}
    </div>
  );
}
