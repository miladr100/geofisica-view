import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Página Não Encontrada</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Desculpe, a página que você está procurando não existe.
          </p>
        </div>
        <Button asChild size="lg">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Voltar para Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
