import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Layers, CheckCircle2, Map, Satellite, Droplets, FileText, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Estudo Geológico - Mapeamento e Análise Geológica | GeoView",
  description: "Serviços especializados em Estudos Geológicos para planejamento de obras e atividades. Levantamento geológico, mapeamento, sensoriamento remoto, hidrogeologia e projetos construtivos de poços tubulares.",
  keywords: [
    "estudo geológico",
    "mapeamento geológico",
    "levantamento geológico",
    "sensoriamento remoto",
    "imagens de satélite",
    "hidrogeologia",
    "projeto construtivo poço tubular",
    "descrição de testemunhos",
    "análise geológica",
    "caracterização geológica",
    "geologia do subsolo",
    "topografia geológica",
    "litologia",
    "geomorfologia",
    "investigação geológica",
    "relatórios geológicos"
  ],
  openGraph: {
    title: "Estudo Geológico - Mapeamento e Análise Geológica | GeoView",
    description: "Serviços completos de estudos geológicos para planejamento de obras, caracterização do terreno e análise geotécnica.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/estudo-geologico",
  },
};

const servicos = [
  {
    icon: Map,
    title: "Levantamento/Mapeamento Geológico",
    description: "Consiste na coleta e análise de dados geológicos, como informações sobre a topografia, litologia, a geologia do subsolo, estruturas presentes e a geomorfologia."
  },
  {
    icon: Satellite,
    title: "Estudos Preliminares via Imagens de Satélite",
    description: "Consiste no uso de dados livres para estudo preliminar para diversos fins, como identificação de estruturas regionais, delimitação de zonas favoráveis para levantamento geofísico ou de mapeamento."
  },
  {
    icon: Search,
    title: "Sensoriamento Remoto",
    description: "Estudo realizado através de imagens de satélite, podendo ter uma ampla gama de aplicações, como recurso de apoio para mapeamento, identificação de objetos ou para detectar mudanças em determinadas áreas."
  },
  {
    icon: Droplets,
    title: "Hidrogeologia",
    description: "Estudo para determinar os tipos de aquíferos presentes numa região, sua distribuição e movimentação, essencial ter eficiência em serviços como de perfuração de poços."
  },
  {
    icon: Layers,
    title: "Projetos Construtivos de Poços Tubulares",
    description: "Estudo da área de interesse, em conjunto com levantamento geofísico, elaboração de projeto básico e construtivo para poço tubular e emissão de autorização para perfuração do poço."
  },
  {
    icon: FileText,
    title: "Descrição de Testemunhos de Sondagem",
    description: "Caracterização litológica, dos materiais presentes em testemunhos obtidos para fins de relatórios."
  },
  {
    icon: FileText,
    title: "Elaboração de Relatórios",
    description: "Consiste na elaboração de textos ou tópicos relacionados a quaisquer serviços citados acima para relatórios."
  }
];

const importancia = [
  "Informações sobre características do terreno",
  "Composição do solo e presença de rochas",
  "Identificação de aquíferos",
  "Probabilidade de ocorrência de eventos geotécnicos",
  "Prevenção de deslizamentos e inundações",
  "Planejamento seguro de obras e atividades"
];

export default function EstudoGeologicoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Estudos Geológicos
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Estudo Geológico - Mapeamento e Análise Geológica
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços especializados em Estudos Geológicos para planejamento de obras e atividades. Levantamento geológico, mapeamento, sensoriamento remoto e análise completa do terreno.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
            <Link href="/contato">
              Solicite um Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Importância dos Estudos Geológicos</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Os estudos geológicos são essenciais para o planejamento de obras e atividades, pois fornecem informações sobre as características do terreno, como a composição do solo, a presença de rochas e aquíferos, e a probabilidade de ocorrência de eventos geotécnicos, como deslizamentos e inundações.
            </p>
            <p className="text-lg text-muted-foreground">
              Nossa empresa oferece uma ampla gama de serviços de estudo geológico, garantindo análises completas e precisas para diversos tipos de projetos e atividades.
            </p>
          </div>
        </div>
      </section>

      {/* Importância */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que Realizar Estudos Geológicos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {importancia.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços de Estudo Geológico</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicos.map((servico, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <servico.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{servico.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{servico.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Estudos Geológicos em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geologico/foto1.jpg"
                    alt="Levantamento geológico em campo - coleta de dados geológicos e análise do terreno"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Levantamento Geológico</CardTitle>
                  <CardDescription>
                    Coleta e análise de dados geológicos em campo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geologico/foto2.png"
                    alt="Mapeamento geológico - caracterização de estruturas e formações rochosas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Mapeamento Geológico</CardTitle>
                  <CardDescription>
                    Caracterização detalhada de estruturas e formações geológicas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geologico/foto3.jpg"
                    alt="Análise geológica - estudo de litologia e geomorfologia do terreno"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Análise Geológica</CardTitle>
                  <CardDescription>
                    Estudo de litologia e geomorfologia do terreno
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geologico/foto4.jpg"
                    alt="Investigação geológica - análise de testemunhos e caracterização de materiais"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Investigação Geológica</CardTitle>
                  <CardDescription>
                    Análise de testemunhos e caracterização de materiais
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações dos Estudos Geológicos</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Planejamento de Obras</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Estudos geológicos fornecem informações essenciais para o planejamento seguro de obras de engenharia, identificando características do terreno, presença de rochas e riscos geotécnicos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Prevenção de Riscos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação da probabilidade de ocorrência de eventos geotécnicos como deslizamentos e inundações, permitindo medidas preventivas adequadas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Gestão de Recursos Hídricos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Estudos hidrogeológicos determinam tipos de aquíferos, sua distribuição e movimentação, essenciais para serviços de perfuração de poços e gestão de recursos hídricos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Projetos de Infraestrutura</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Análise geológica completa para projetos de infraestrutura, incluindo rodovias, ferrovias, barragens e grandes obras de engenharia.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Metodologia dos Estudos</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Coleta de Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Coleta sistemática de dados geológicos através de levantamentos de campo, análise de testemunhos de sondagem, sensoriamento remoto e imagens de satélite.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Análise e Interpretação</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Análise detalhada dos dados coletados, incluindo caracterização litológica, identificação de estruturas geológicas, análise geomorfológica e interpretação de dados geofísicos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Elaboração de Relatórios</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Elaboração de relatórios técnicos completos com todas as informações coletadas e analisadas, incluindo mapas, perfis geológicos e recomendações técnicas.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Estudos Geológicos?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar estudos geológicos completos para seus projetos, fornecendo informações precisas e confiáveis sobre as características do terreno.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
              <Link href="/contato">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/servicos">
                Ver Outros Serviços
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

