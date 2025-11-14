import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Leaf, CheckCircle2, Trash2, Droplets, Mountain, Waves, Search, Radar, Magnet } from "lucide-react";

export const metadata: Metadata = {
  title: "Geofísica Ambiental - Investigação Não Invasiva para Estudos Ambientais | GeoView",
  description: "Serviços de Geofísica Ambiental para delimitação de depósitos de resíduos, plumas de contaminação, vazios estruturais e análise de taludes. Métodos não invasivos: resistividade, IP, GPR e magnético.",
  keywords: [
    "geofísica ambiental",
    "investigação ambiental",
    "delimitação de contaminação",
    "plumas de contaminação",
    "depósitos de resíduos",
    "geofísica não invasiva",
    "resistividade ambiental",
    "GPR ambiental",
    "polarização induzida",
    "investigação de solo contaminado",
    "análise ambiental",
    "vazios estruturais",
    "cunhas salinas",
    "taludes",
    "geofísica para meio ambiente"
  ],
  openGraph: {
    title: "Geofísica Ambiental - Investigação Não Invasiva para Estudos Ambientais | GeoView",
    description: "Métodos geofísicos não invasivos para estudos ambientais: delimitação de contaminação, depósitos de resíduos e análise de taludes.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/geofisica-ambiental",
  },
};

const aplicacoes = [
  {
    icon: Trash2,
    title: "Delimitação de Depósitos de Resíduos",
    description: "Identificação e delimitação precisa de depósitos de resíduos em subsuperfície, permitindo mapeamento detalhado e avaliação de impactos ambientais."
  },
  {
    icon: Droplets,
    title: "Delimitação de Plumas de Contaminação",
    description: "Mapeamento de plumas de contaminação e definição da provável localização da fonte contaminante, essencial para planos de remediação."
  },
  {
    icon: Search,
    title: "Localização de Vazios Estruturais",
    description: "Identificação de vazios estruturais em subsuperfície e feições cársticas, importantes para avaliação de riscos geotécnicos e ambientais."
  },
  {
    icon: Mountain,
    title: "Análise de Desmoronamentos em Taludes",
    description: "Contribuição para análise de possíveis desmoronamentos em zonas de taludes, fornecendo informações sobre estabilidade e riscos."
  },
  {
    icon: Waves,
    title: "Análise de Cunhas Salinas",
    description: "Análise de cunhas salinas ao longo de zonas litorâneas, importante para gestão de recursos hídricos e proteção de aquíferos."
  },
  {
    icon: Search,
    title: "Pesquisas Arqueológicas",
    description: "Aplicação de métodos geofísicos em pesquisas arqueológicas, permitindo investigação não invasiva de sítios históricos."
  }
];

const metodos = [
  {
    icon: Magnet,
    title: "Resistividade",
    description: "Método de eletrorresistividade para investigação de contaminação e caracterização do subsolo através de variações de resistividade elétrica."
  },
  {
    icon: Radar,
    title: "Polarização Induzida (IP)",
    description: "Técnica avançada que complementa a resistividade, fornecendo informações sobre propriedades eletroquímicas do subsolo."
  },
  {
    icon: Radar,
    title: "Radar de Penetração no Solo (GPR)",
    description: "Georadar para investigação de estruturas rasas e contaminação, fornecendo imageamento de alta resolução da subsuperfície."
  },
  {
    icon: Magnet,
    title: "Método Magnético",
    description: "Detecção de variações no campo magnético terrestre, útil para localização de objetos metálicos e estruturas enterradas."
  }
];

const vantagens = [
  "Métodos não invasivos que geram mínimo dano em superfície",
  "Informações muito mais abrangentes que métodos diretos",
  "Investigações de profundidade variável (de cm a centenas de metros)",
  "Aplicável em diferentes configurações geológicas",
  "Capacidade de detectar diversos tipos de contaminantes",
  "Redução de custos comparado a métodos tradicionais"
];

export default function GeofisicaAmbientalPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Geofísica Ambiental
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Geofísica Ambiental - Investigação Não Invasiva para Estudos Ambientais
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Métodos geofísicos não invasivos para estudos ambientais: delimitação de contaminação, depósitos de resíduos, análise de taludes e muito mais. Informações abrangentes com mínimo impacto ambiental.
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
            <h2 className="text-3xl font-bold mb-6">O que é Geofísica Ambiental?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Métodos geofísicos são amplamente utilizados na área ambiental. Por serem não invasivos, além de gerar o mínimo dano em superfície durante a pesquisa, também podem dar informações muito mais abrangentes do que métodos diretos, como poços de monitoramento.
            </p>
            <p className="text-lg text-muted-foreground">
              Métodos geofísicos são uma forte ferramenta para estudos ambientais, oferecendo investigação eficiente e precisa do subsolo sem necessidade de escavações extensivas ou perfurações múltiplas.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens dos Métodos Geofísicos Ambientais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vantagens.map((vantagem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{vantagem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações da Geofísica Ambiental</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aplicacoes.map((aplicacao, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <aplicacao.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{aplicacao.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{aplicacao.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Métodos */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Métodos Geofísicos Utilizados</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              As variações entre cada método dependem da profundidade que se deseja estudar (de cm a centenas de metros), da configuração geológica, do possível contaminante, dos limitadores em superfície, entre outros fatores.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metodos.map((metodo, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <metodo.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{metodo.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{metodo.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Geofísica Ambiental em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/geofisica-ambiental/ambiente.png"
                    alt="Geofísica ambiental - investigação não invasiva para estudos ambientais"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Investigação Ambiental</CardTitle>
                  <CardDescription>
                    Métodos geofísicos não invasivos para estudos ambientais
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/geofisica-ambiental/environmental.png"
                    alt="Delimitação de contaminação - geofísica ambiental aplicada"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Delimitação de Contaminação</CardTitle>
                  <CardDescription>
                    Mapeamento de plumas de contaminação e depósitos de resíduos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/geofisica-ambiental/ambiente 2.jpg"
                    alt="Imageamento geoelétrico para estudos ambientais - GeoView"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Imageamento Geoelétrico</CardTitle>
                  <CardDescription>
                    Técnicas de eletrorresistividade para investigação ambiental
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/geofisica-ambiental/Meio ambiente geoelétrica geoview.webp"
                    alt="Geofísica ambiental GeoView - estudos de meio ambiente com geoelétrica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Geoelétrica Ambiental</CardTitle>
                  <CardDescription>
                    Aplicação de métodos geoelétricos em estudos ambientais
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparação com Métodos Diretos */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Geofísica vs Métodos Diretos</h2>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Por que escolher métodos geofísicos?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Os métodos geofísicos oferecem vantagens significativas em relação aos métodos diretos tradicionais:
                </CardDescription>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Não invasivos:</strong> Geram mínimo dano em superfície durante a pesquisa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Informações abrangentes:</strong> Fornecem dados muito mais extensos que métodos diretos como poços de monitoramento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Cobertura ampla:</strong> Permitem investigação de grandes áreas de forma eficiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Custo-benefício:</strong> Redução de custos comparado a múltiplas perfurações e poços de monitoramento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Rapidez:</strong> Investigação mais rápida que métodos tradicionais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Geofísica Ambiental?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar investigações ambientais não invasivas utilizando métodos geofísicos avançados, fornecendo informações precisas e abrangentes para seus projetos ambientais.
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

