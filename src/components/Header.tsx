import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { address, phone, email, headerServices } from "@/consts/baseConstants";
import logoGeoview from "@/assets/logo-geoview.png";
import { formattedPhone } from "@/helpers";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      {/* Top banner */}
      <div className="bg-muted/50 border-b">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>📍 {address}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Phone className="h-4 w-4" />
              <span>{formattedPhone(phone)}</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img src={logoGeoview} alt="GeoView Logo" className="w-full h-full object-contain" />
            </div>
            <span>GeoView</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                "text-base font-medium transition-smooth hover:text-primary",
                isActive("/") ? "text-primary" : "text-foreground"
              )}
            >
              Home
            </Link>
            <Link
              to="/quem-somos"
              className={cn(
                "text-base font-medium transition-smooth hover:text-primary",
                isActive("/quem-somos") ? "text-primary" : "text-foreground"
              )}
            >
              Quem Somos
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-2 bg-popover">
                      {headerServices.map((service) => (
                        <NavigationMenuLink key={service.path} asChild>
                          <Link
                            to={service.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/contato"
              className={cn(
                "text-base font-medium transition-smooth hover:text-primary",
                isActive("/contato") ? "text-primary" : "text-foreground"
              )}
            >
              Contato
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/quem-somos"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <div className="py-2">
              <div className="text-sm font-medium mb-2">Serviços</div>
              <div className="pl-4 space-y-2">
                {headerServices.slice(0, 5).map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-smooth"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/servicos"
                  className="block py-1 text-sm text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver todos os serviços →
                </Link>
              </div>
            </div>
            <Link
              to="/contato"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
