import { FileText } from "lucide-react";

export function BlogEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <FileText className="h-16 w-16 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Nenhum post encontrado</h2>
      <p className="text-muted-foreground max-w-md">
        Não encontramos posts publicados no momento. Volte em breve para conferir novos conteúdos!
      </p>
    </div>
  );
}
