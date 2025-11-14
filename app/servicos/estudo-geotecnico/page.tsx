import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, HardHat, CheckCircle2, Building2, ShieldCheck, Mountain, Droplets, Route } from "lucide-react";

export const metadata: Metadata = {
  title: "Estudo Geotécnico - Investigação e Análise Geotécnica | GeoView",
  description: "Serviços especializados em Estudos Geotécnicos para projeto de fundações, reabilitação de estruturas, levantamento de riscos e projetos de infraestrutura. Análise completa do terreno por profissionais qualificados.",
  keywords: [
    "estudo geotécnico",
    "investigação geotécnica",
    "projeto de fundações",
    "análise geotécnica",
    "engenharia geotécnica",
    "reabilitação de estruturas",
    "risco geotécnico",
    "estabilidade de taludes",
    "barragens",
    "projetos de infraestrutura",
    "fundações",
    "pontes",
    "viadutos",
    "túneis",
    "geologia de engenharia",
    "caracterização do terreno"
  ],
  openGraph: {
    title: "Estudo Geotécnico - Investigação e Análise Geotécnica | GeoView",
    description: "Serviços completos de estudos geotécnicos para projetos de engenharia, infraestrutura e construção.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/estudo-geotecnico",
  },
};

const aplicacoes = [
  {
    icon: Building2,
    title: "Projeto de Fundações",
    description: "Estudos geotécnicos essenciais para o projeto de fundações seguras e duráveis para pontes, viadutos, túneis e outros elementos de infraestrutura. Os resultados dos estudos são usados para determinar o tipo de fundação adequado, a profundidade de escavação e as medidas de reforço necessárias."
  },
  {
    icon: ShieldCheck,
    title: "Reabilitação de Estruturas",
    description: "Avaliação da estabilidade de estruturas existentes como taludes e barragens e identificação de possíveis problemas, como presença de rochas fraturadas, solos moles ou água subterrânea. Os resultados dos estudos podem ser usados para desenvolver um plano de reabilitação eficaz."
  },
  {
    icon: Mountain,
    title: "Levantamento de Risco Geotécnico",
    description: "Identificação de áreas com risco de deslizamentos, inundações ou outros eventos geotécnicos. Os resultados dos estudos podem ser usados para desenvolver planos de mitigação de riscos e garantir a segurança de projetos e comunidades."
  },
  {
    icon: Route,
    title: "Projetos de Construção e Transporte",
    description: "Identificação se determinadas áreas são adequadas para construção de estradas, ferrovias, aeroportos e outros projetos de infraestrutura de transporte. Análise completa das características do terreno para garantir viabilidade e segurança."
  },
  {
    icon: Droplets,
    title: "Projetos Construtivos de Poços Tubulares",
    description: "Estudo da área de interesse, em conjunto com levantamento geofísico, elaboração de projeto básico e construtivo para poço tubular e emissão de autorização para perfuração do poço."
  }
];

const importancia = [
  "Avaliação das características do terreno",
  "Identificação de possíveis riscos geotécnicos",
  "Planejamento seguro de obras e atividades",
  "Otimização de projetos de fundações",
  "Prevenção de acidentes e falhas estruturais",
  "Redução de custos através de projetos adequados"
];

export default function EstudoGeotecnicoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Engenharia Geotécnica
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Estudo Geotécnico - Investigação e Análise Geotécnica
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços especializados em Estudos Geotécnicos para projeto de fundações, reabilitação de estruturas, levantamento de riscos e projetos de infraestrutura. Análise completa do terreno por profissionais qualificados.
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
            <h2 className="text-3xl font-bold mb-6">O que são Estudos Geotécnicos?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Os estudos geotécnicos são uma parte essencial do planejamento e execução de qualquer obra ou atividade que envolva o contato com o solo, rochas e estruturas da subsuperfície. Esses estudos são realizados por profissionais qualificados, como geólogos e engenheiros geotécnicos, para avaliar as características do terreno e identificar possíveis riscos.
            </p>
            <p className="text-lg text-muted-foreground">
              Os estudos geotécnicos podem ser realizados para uma variedade de propósitos, garantindo segurança, viabilidade técnica e otimização de projetos de engenharia e infraestrutura.
            </p>
          </div>
        </div>
      </section>

      {/* Importância */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Importância dos Estudos Geotécnicos</h2>
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

      {/* Aplicações */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações dos Estudos Geotécnicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Galeria de Imagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Estudos Geotécnicos em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geotecnico/1.png"
                    alt="Estudo geotécnico - investigação do terreno para projetos de engenharia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Investigação Geotécnica</CardTitle>
                  <CardDescription>
                    Análise completa das características do terreno
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geotecnico/2.png"
                    alt="Projeto de fundações - estudos geotécnicos para infraestrutura"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Projeto de Fundações</CardTitle>
                  <CardDescription>
                    Estudos para projetos de infraestrutura seguros
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geotecnico/foto12.jpg"
                    alt="Análise geotécnica - caracterização de solos e rochas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Caracterização do Terreno</CardTitle>
                  <CardDescription>
                    Análise detalhada de solos e rochas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geotecnico/foto13.jpg"
                    alt="Estabilidade de taludes - avaliação geotécnica de estruturas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Estabilidade de Estruturas</CardTitle>
                  <CardDescription>
                    Avaliação de taludes e barragens
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geotecnico/foto14.jpg"
                    alt="Projetos de infraestrutura - estudos geotécnicos para construção"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Projetos de Infraestrutura</CardTitle>
                  <CardDescription>
                    Estudos para estradas, ferrovias e aeroportos
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Profissionais Qualificados */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Profissionais Qualificados</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Os estudos geotécnicos são realizados por profissionais qualificados, como geólogos e engenheiros geotécnicos, que possuem conhecimento especializado para avaliar as características do terreno e identificar possíveis riscos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Geólogos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Profissionais especializados em análise de formações geológicas, caracterização de solos e rochas, e identificação de estruturas geológicas relevantes para projetos de engenharia.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Engenheiros Geotécnicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Especialistas em análise de comportamento de solos e rochas sob cargas, projeto de fundações, estabilidade de taludes e avaliação de riscos geotécnicos para projetos de infraestrutura.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefícios dos Estudos Geotécnicos</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Segurança em Projetos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação prévia de riscos geotécnicos permite implementação de medidas preventivas, garantindo segurança durante a execução e vida útil das obras.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Otimização de Custos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Projetos adequados às características do terreno resultam em fundações e estruturas otimizadas, reduzindo custos de construção e manutenção.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Conformidade Técnica</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Estudos geotécnicos garantem conformidade com normas técnicas e regulamentações, essenciais para aprovação de projetos e licenças ambientais.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Estudos Geotécnicos?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe de profissionais qualificados está pronta para realizar estudos geotécnicos completos para seus projetos, garantindo segurança, viabilidade técnica e otimização de custos.
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

