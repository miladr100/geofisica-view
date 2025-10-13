import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allServices } from "@/consts/baseConstants";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Nossos Serviços
          </Badge>
          <h1 className="mb-6 text-white">Soluções Completas em Geofísica</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Oferecemos uma ampla gama de serviços especializados com tecnologia de ponta e equipe altamente qualificada.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.slice(0, showAll ? allServices.length : 6).map((service, index) => (
              <Card key={index} className="hover-lift border-none shadow-soft cursor-pointer hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link to={`/servicos/${service.slug}`}>
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {allServices.length > 6 && (
            <div className="text-center mt-10">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="min-w-[200px]"
              >
                {showAll ? (
                  <>
                    Ver Menos <ChevronUp className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Ver Mais Serviços <ChevronDown className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Precisa de um Serviço Específico?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está pronta para atender às suas necessidades específicas. Entre em contato e converse com nossos especialistas.
          </p>
          <Button asChild variant="default" size="lg">
            <Link to="/contato">
              Solicite um Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
