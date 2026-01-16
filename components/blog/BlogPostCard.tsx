import Link from "next/link";
import Image from "next/image";
import { format, isValid } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import type { Post } from "@/lib/types/blog";
import { formatTag } from "@/lib/types/blog";

interface BlogPostCardProps {
  post: Post;
}

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

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = formatDate(post.publishedAt);
  const dateISO = getDateISOString(post.publishedAt);

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
        {post.coverImageUrl && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {formatTag(tag)}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{post.author || "GeoView"}</span>
          {formattedDate && dateISO ? (
            <time dateTime={dateISO}>{formattedDate}</time>
          ) : null}
        </CardFooter>
      </Card>
    </Link>
  );
}
