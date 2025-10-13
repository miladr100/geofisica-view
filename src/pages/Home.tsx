import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { homeServices, areas, metrics, clients } from "@/consts/baseConstants";
import { ArrowRight } from "lucide-react";
import bannerVideo from "@/assets/banner-geoview.mp4";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/30 z-0" />

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Excelência em Geofísica
          </Badge>
          <h1 className="mb-6 text-white drop-shadow-lg">
            Serviços e Consultoria em Geofísica
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Tecnologia de ponta e expertise comprovada para seus projetos de engenharia, mineração e meio ambiente.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/servicos">
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover-lift border-none shadow-soft bg-white dark:bg-slate-800">
                <CardContent className="pt-6">
                  <metric.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nossos Serviços</Badge>
            <h2 className="mb-4">Soluções Completas em Geofísica</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços especializados com tecnologia de ponta e equipe altamente qualificada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service, index) => (
              <Card key={index} className="hover-lift border-none shadow-soft cursor-pointer hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link to={service.link}>
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg">
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Áreas de Atuação</Badge>
            <h2 className="mb-4">Expertise em Múltiplas Áreas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Card key={index} className="hover-lift text-center border-none shadow-medium bg-white dark:bg-slate-800">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nossos Clientes</Badge>
            <h2 className="mb-4">Confiança de Grandes Empresas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com as principais empresas do mercado nacional e internacional.
            </p>
          </div>

          {/* Infinite Slider */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-6 flex items-center justify-center min-w-[240px] h-40"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-8 py-6 border border-slate-200 dark:border-slate-700 w-full flex flex-col items-center justify-center gap-4 group hover:scale-110">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="h-16 w-auto object-contain transition-all duration-300"
                        onError={(e) => {
                          // Fallback to text if logo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('p');
                            fallback.className = 'text-2xl font-bold whitespace-nowrap';
                            fallback.style.color = client.color;
                            fallback.textContent = client.name;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                      <p 
                        className="text-base font-semibold whitespace-nowrap transition-all duration-300"
                        style={{ color: client.color }}
                      >
                        {client.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900/50 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-background pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white">Pronto para Iniciar seu Projeto?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu negócio com soluções geofísicas de excelência.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
            <Link to="/contato">Fale com Nossa Equipe</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
