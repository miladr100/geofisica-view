import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/button";
import { arrayAddress, phone, email } from "@/consts/baseConstants";
import { formattedPhone } from "@/helpers";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-bold">
                G
              </div>
              <span>GeoView</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Especialistas em soluções de geofísica, georadar e hidrogeologia para projetos de engenharia, mineração e meio ambiente.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="text-muted-foreground hover:text-primary transition-smooth">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-primary transition-smooth">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos/georadar" className="text-muted-foreground hover:text-primary transition-smooth">
                  Georadar
                </Link>
              </li>
              <li>
                <Link href="/servicos/hidrogeologia" className="text-muted-foreground hover:text-primary transition-smooth">
                  Hidrogeologia
                </Link>
              </li>
              <li>
                <Link href="/servicos/sismica-refracao" className="text-muted-foreground hover:text-primary transition-smooth">
                  Sísmica de Refração
                </Link>
              </li>
              <li>
                <Link href="/servicos/geofisica-mineracao" className="text-muted-foreground hover:text-primary transition-smooth">
                  Geofísica para Mineração
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-primary font-medium hover:underline">
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  {arrayAddress.map((address, index) => (
                    <p key={index}>{address}</p>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Phone className="h-4 w-4" />
                  <span>{formattedPhone(phone)}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Mail className="h-4 w-4" />
                  <span>{email}</span>
                </a>
              </li>
            </ul>
            <Button asChild variant="default" size="sm" className="mt-4 w-full">
              <Link href="/contato">Envie sua mensagem</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} GeoView. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

