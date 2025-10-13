import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail } from "lucide-react";
import { toast } from "sonner";
import { metrics, geoViewValues, aboutDescriptions, aboutTeam, arrayAddress, email } from "@/consts/baseConstants";

const About = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Sobre Nós
          </Badge>
          <h1 className="mb-6 text-white">Conheça a GeoView</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Especialistas em geofísica com compromisso de excelência e inovação desde o início.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Nossa História</Badge>
              <h2 className="mb-6">Compromisso com a Excelência</h2>
              <div className="space-y-4 text-muted-foreground">
                {aboutDescriptions.map((description, index) => (
                  <p key={index}>
                    {description}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-large w-full h-auto"
              >
                <source src="https://video.wixstatic.com/video/cbf90b_14be1ef4ab3b4848b9ad13aa0117d3a4/480p/mp4/file.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nossos Pilares</Badge>
            <h2 className="mb-4">Missão, Visão e Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {geoViewValues.map((value, index) => (
              <Card key={index} className="text-center hover-lift border-none shadow-medium">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nossa Relevância</Badge>
            <h2 className="mb-4">Números que Comprovam nossa Experiência</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover-lift border-none shadow-soft">
                <CardContent className="pt-8">
                  <metric.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-5xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <p className="text-lg text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nossa Equipe</Badge>
            <h2 className="mb-4">Profissionais Especializados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contamos com uma equipe multidisciplinar de geofísicos, geólogos, engenheiros e técnicos altamente qualificados.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutTeam.map((member, index) => (
              <Card key={index} className="text-center hover-lift border-none shadow-soft">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Badge className="mb-4">Informações de Contato</Badge>
              <h2 className="mb-6">Fale Conosco</h2>

              <div className="space-y-6">
                <Card className="border-none shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Endereço</h3>
                        <p className="text-muted-foreground">
                          {arrayAddress.map((address, index) => (
                            <p key={index}>{address}</p>
                          ))}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">E-mail</h3>
                        <a
                          href={`mailto:${email}`}
                          className="text-primary hover:underline"
                        >
                          {email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Badge className="mb-4">Envie uma Mensagem</Badge>
              <h2 className="mb-6">Formulário de Contato</h2>

              <Card className="border-none shadow-medium">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" required placeholder="Seu nome" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" required placeholder="seu@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Como podemos ajudá-lo?"
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
