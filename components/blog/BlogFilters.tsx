"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/input";
import { Badge } from "@/components/badge";
import { Search, X } from "lucide-react";
import { Button } from "@/components/button";
import { formatTag } from "@/lib/types/blog";

interface BlogFiltersProps {
  availableTags: Map<string, number>;
  currentTag?: string;
  currentSearch?: string;
}

export function BlogFilters({ availableTags, currentTag, currentSearch }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(currentSearch || "");

  useEffect(() => {
    setSearch(currentSearch || "");
  }, [currentSearch]);

  const updateSearch = (value: string) => {
    setSearch(value);
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    params.delete("page");
    
    router.push(`/blog?${params.toString()}`);
  };

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (currentTag === tag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }
    params.delete("page");
    
    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    setSearch("");
    router.push("/blog");
  };

  const hasActiveFilters = currentTag || currentSearch;

  const sortedTags = Array.from(availableTags.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar posts..."
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          className="pl-10 pr-10"
        />
        {search && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={() => updateSearch("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Filtros ativos:</span>
          {currentTag && (
            <Badge variant="default" className="cursor-pointer" onClick={() => handleTagClick(currentTag)}>
              {formatTag(currentTag)} <X className="h-3 w-3 ml-1" />
            </Badge>
          )}
          {currentSearch && (
            <Badge variant="default" className="cursor-pointer" onClick={() => updateSearch("")}>
              Busca: {currentSearch} <X className="h-3 w-3 ml-1" />
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-6 text-xs">
            Limpar todos
          </Button>
        </div>
      )}

      {sortedTags.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold mb-3">Tags populares</h3>
          <div className="flex flex-wrap gap-2">
            {sortedTags.map(([tag, count]) => (
              <Badge
                key={tag}
                variant={currentTag === tag ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleTagClick(tag)}
              >
                {formatTag(tag)} ({count})
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
