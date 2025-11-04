import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/card";
import { Badge } from "@/components/badge";
import { metrics, geoViewValues, aboutDescriptions, aboutTeam } from "@/consts/baseConstants";

export const metadata = {
  title: "Quem Somos - GeoView",
  description: "Conheça a GeoView e nossa história de excelência em geofísica e hidrogeologia.",
};

export default function QuemSomos() {
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
                  <p key={index}>{description}</p>
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

      {/* Metrics */}
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
                  <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                  <p className="text-lg text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nossa Equipe</Badge>
            <h2 className="mb-4">Profissionais Especializados</h2>
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
    </div>
  );
}

