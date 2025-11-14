import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Package, CheckCircle2, ShieldCheck, Clock, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Aluguel de GPR - Equipamentos Georadar para Locação | GeoView",
  description: "Aluguel de equipamentos GPR (Ground Penetrating Radar) para investigações geofísicas. Equipamentos de última geração, suporte técnico especializado e condições flexíveis de locação.",
  keywords: [
    "aluguel de GPR",
    "locação de georadar",
    "aluguel de equipamento geofísico",
    "GPR para locação",
    "equipamento GPR",
    "georadar aluguel",
    "radar de penetração no solo",
    "equipamento geofísico",
    "locação de equipamentos",
    "investigação geofísica",
    "mapeamento subsuperficial",
    "aluguel de equipamento profissional",
    "GPR profissional",
    "geofísica aplicada"
  ],
  openGraph: {
    title: "Aluguel de GPR - Equipamentos Georadar para Locação | GeoView",
    description: "Aluguel de equipamentos GPR de última geração para investigações geofísicas e mapeamento subsuperficial.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/aluguel-gpr",
  },
};

const vantagens = [
  "Equipamentos de última geração",
  "Suporte técnico especializado",
  "Condições flexíveis de locação",
  "Treinamento incluso",
  "Manutenção e calibração garantidas",
  "Equipamentos sempre atualizados"
];

const aplicacoes = [
  "Investigação geotécnica",
  "Localização de tubulações e utilidades",
  "Inspeção de pavimentos",
  "Investigação arqueológica",
  "Detecção de estruturas subterrâneas",
  "Análise de subsolo",
  "Projetos de engenharia",
  "Estudos ambientais"
];

const beneficios = [
  {
    icon: Package,
    title: "Equipamentos Modernos",
    description: "Frota de equipamentos GPR de última geração, sempre atualizados e em perfeito estado de funcionamento."
  },
  {
    icon: ShieldCheck,
    title: "Suporte Técnico",
    description: "Equipe técnica especializada disponível para orientação, treinamento e suporte durante todo o período de locação."
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    description: "Condições flexíveis de locação adaptadas às suas necessidades, seja para projetos de curto ou longo prazo."
  },
  {
    icon: Wrench,
    title: "Manutenção Garantida",
    description: "Todos os equipamentos passam por manutenção preventiva e calibração regular, garantindo precisão nos resultados."
  }
];

export default function AluguelGPRPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Locação de Equipamentos
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Aluguel de GPR - Equipamentos Georadar Profissionais
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Alugue equipamentos GPR (Ground Penetrating Radar) de última geração para suas investigações geofísicas. Equipamentos modernos, suporte técnico especializado e condições flexíveis de locação.
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
            <h2 className="text-3xl font-bold mb-6">Por que Alugar Equipamentos GPR?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              O aluguel de equipamentos GPR (Ground Penetrating Radar) é a solução ideal para empresas e profissionais que precisam realizar investigações geofísicas sem o investimento inicial em equipamentos próprios. Oferecemos equipamentos de última geração, sempre atualizados e em perfeito estado de funcionamento.
            </p>
            <p className="text-lg text-muted-foreground">
              Nossa frota de equipamentos GPR está disponível para locação com suporte técnico especializado, treinamento incluso e condições flexíveis adaptadas às suas necessidades de projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do Aluguel de GPR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

      {/* Benefícios */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefícios do Nosso Serviço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beneficios.map((beneficio, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <beneficio.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{beneficio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{beneficio.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações dos Equipamentos GPR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aplicacoes.map((aplicacao, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{aplicacao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossos Equipamentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/aluguel-gpr/GPR.png"
                    alt="Equipamento GPR disponível para locação - Ground Penetrating Radar profissional"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento GPR</CardTitle>
                  <CardDescription>
                    Equipamento profissional de última geração
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/aluguel-gpr/GPR aluguel.jpg"
                    alt="Serviço de aluguel de GPR - Equipamentos geofísicos para locação"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Frota de Equipamentos</CardTitle>
                  <CardDescription>
                    Equipamentos sempre disponíveis para locação
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/aluguel-gpr/GPR aluguel 2.png"
                    alt="Aluguel de equipamento GPR - Tecnologia de ponta para investigações geofísicas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Tecnologia Avançada</CardTitle>
                  <CardDescription>
                    Equipamentos modernos e atualizados
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que Escolher Nossos Equipamentos?</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Equipamentos de Última Geração</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Nossa frota é constantemente atualizada com os equipamentos mais modernos do mercado, garantindo precisão e confiabilidade em suas investigações geofísicas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Suporte Técnico Especializado</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Oferecemos suporte técnico completo, desde o treinamento inicial até o acompanhamento durante o uso dos equipamentos. Nossa equipe está sempre disponível para auxiliar.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Condições Flexíveis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Adaptamos nossas condições de locação às suas necessidades, seja para projetos de curto prazo ou locações de longo período. Sempre buscando a melhor solução para seu projeto.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa Alugar Equipamentos GPR?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu projeto com equipamentos GPR de última geração e suporte técnico especializado.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
              <Link href="/contato">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/servicos/georadar">
                Saiba Mais sobre GPR
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

