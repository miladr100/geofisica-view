import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Wrench, CheckCircle2, Package, GraduationCap, User, FileText, Award, Radar, Zap, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Aluguel de Equipamento de Geofísica - GPR, Resistivímetro e Sísmica | GeoView",
  description: "Aluguel de equipamentos de geofísica: GPR (DS2000, Ditch Witch), sismógrafo TerraLoc e resistivímetro italiano multieletrodo. Inclui treinamento, operador, processamento e relatórios.",
  keywords: [
    "aluguel equipamento geofísica",
    "aluguel GPR",
    "aluguel georadar",
    "aluguel resistivímetro",
    "aluguel sismógrafo",
    "aluguel equipamento geofísico",
    "GPR para alugar",
    "DS2000 aluguel",
    "Ditch Witch aluguel",
    "TerraLoc aluguel",
    "treinamento equipamento geofísica",
    "operador equipamento geofísico",
    "processamento dados geofísicos",
    "aluguel equipamento Brasil"
  ],
  openGraph: {
    title: "Aluguel de Equipamento de Geofísica - GPR, Resistivímetro e Sísmica | GeoView",
    description: "Aluguel de equipamentos de geofísica com treinamento, operador e processamento de dados. GPR, resistivímetro e sismógrafo disponíveis.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/aluguel-equipamento-geofisica",
  },
};

const opcoesServico = [
  {
    icon: Package,
    title: "Aluguel de Equipamento Geofísico",
    description: "Aluguel de equipamentos de GPR, resistivímetro e sísmica por dia, semana ou mês, com flexibilidade de prazo conforme sua necessidade."
  },
  {
    icon: GraduationCap,
    title: "Treinamento de Operação",
    description: "Treinamento completo de como operar o equipamento geofísico, garantindo que sua equipe esteja preparada para utilizar os equipamentos de forma eficiente."
  },
  {
    icon: User,
    title: "Aluguel com Operador",
    description: "Aluguel de equipamento geofísico acompanhado de operador experiente, ideal para projetos que requerem expertise técnica especializada."
  },
  {
    icon: FileText,
    title: "Processamento de Dados",
    description: "Processamento profissional dos dados coletados utilizando software especializado e técnicas avançadas de análise geofísica."
  },
  {
    icon: FileText,
    title: "Emissão de Relatório",
    description: "Elaboração e emissão de relatório completo com todas as análises, interpretações e recomendações técnicas dos dados processados."
  },
  {
    icon: Award,
    title: "Emissão de ART",
    description: "Emissão de Anotação de Responsabilidade Técnica (ART) para garantir a conformidade legal e técnica dos trabalhos realizados."
  }
];

const equipamentos = [
  {
    icon: Radar,
    title: "GPR - Georadar",
    modelos: ["DS2000", "Ditch Witch"],
    description: "Equipamentos de georadar (Ground Penetrating Radar) para investigação subsuperficial não invasiva, ideais para localização de utilidades, estruturas enterradas e investigações geológicas."
  },
  {
    icon: Waves,
    title: "Sismógrafo",
    modelos: ["TerraLoc"],
    description: "Sismógrafo TerraLoc para métodos sísmicos de refração e reflexão, essencial para caracterização geológica e determinação de velocidades de ondas sísmicas."
  },
  {
    icon: Zap,
    title: "Resistivímetro",
    modelos: ["Equipamento italiano multieletrodo"],
    description: "Resistivímetro italiano de alta tecnologia com sistema multieletrodo para imageamento elétrico 2D e 3D, ideal para investigações geoelétricas e hidrogeológicas."
  }
];

const periodosAluguel = [
  "Aluguel por dia",
  "Aluguel por semana",
  "Aluguel por mês"
];

const vantagens = [
  "Equipamentos de última geração",
  "Flexibilidade de prazo (dia, semana ou mês)",
  "Treinamento incluso disponível",
  "Suporte técnico especializado",
  "Processamento de dados profissional",
  "Relatórios técnicos completos"
];

export default function AluguelEquipamentoGeofisicaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Aluguel de Equipamentos
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Aluguel de Equipamento de Geofísica - GPR, Resistivímetro e Sísmica
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Aluguel de equipamentos de geofísica de última geração: GPR (DS2000, Ditch Witch), sismógrafo TerraLoc e resistivímetro italiano multieletrodo. Inclui treinamento, operador, processamento e relatórios.
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
            <h2 className="text-3xl font-bold mb-6">Aluguel de Equipamentos de Geofísica</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa empresa aluga equipamentos de GPR, resistivímetro e sísmica por dia, semana ou mesmo por mês. Junto com o aluguel do equipamento pode ser fornecido treinamento de como utilizar o mesmo.
            </p>
            <p className="text-lg text-muted-foreground">
              Em adição, podemos fornecer processamento de dados e envio do relatório completo, oferecendo uma solução completa para seus projetos de geofísica.
            </p>
          </div>
        </div>
      </section>

      {/* Períodos de Aluguel */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Flexibilidade de Prazo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {periodosAluguel.map((periodo, index) => (
                <Card key={index} className="border-none shadow-soft text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle>{periodo}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opções de Serviço */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Opções de Serviço Disponíveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opcoesServico.map((opcao, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <opcao.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{opcao.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{opcao.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos Disponíveis */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Equipamentos Disponíveis para Aluguel</h2>
            <div className="space-y-6">
              {equipamentos.map((equipamento, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <equipamento.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{equipamento.title}</CardTitle>
                        <div className="mb-3">
                          <p className="font-semibold text-foreground mb-2">Modelos Disponíveis:</p>
                          <div className="flex flex-wrap gap-2">
                            {equipamento.modelos.map((modelo, idx) => (
                              <Badge key={idx} variant="secondary" className="text-sm">
                                {modelo}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <CardDescription className="text-base">{equipamento.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do Aluguel</h2>
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

      {/* Galeria de Imagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Equipamentos em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/aluguel-equipamento-geofisica/GPR aluguel.jpg"
                    alt="GPR para aluguel - equipamento georadar DS2000 e Ditch Witch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">GPR - Georadar</CardTitle>
                  <CardDescription>
                    Equipamentos DS2000 e Ditch Witch disponíveis
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/aluguel-equipamento-geofisica/GPR aluguel 2.png"
                    alt="Equipamento GPR para aluguel - georadar para investigações subsuperficiais"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Georadar em Operação</CardTitle>
                  <CardDescription>
                    Equipamento GPR para investigações não invasivas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/aluguel-equipamento-geofisica/LS2000.png"
                    alt="LS2000 - equipamento de geofísica para aluguel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">LS2000</CardTitle>
                  <CardDescription>
                    Sistema avançado para investigações geofísicas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/aluguel-equipamento-geofisica/eletrorresistividade.webp"
                    alt="Resistivímetro italiano multieletrodo para aluguel - equipamento de eletrorresistividade"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Resistivímetro Multieletrodo</CardTitle>
                  <CardDescription>
                    Equipamento italiano para imageamento elétrico
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="relative w-full h-64">
                  <Image
                    src="/aluguel-equipamento-geofisica/MAEW_2.png"
                    alt="Equipamento sísmico para aluguel - TerraLoc e métodos sísmicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento Sísmico</CardTitle>
                  <CardDescription>
                    Sismógrafo TerraLoc disponível para aluguel
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Aluguel */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Como Funciona o Aluguel</h2>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Processo Simplificado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Solicitação de Orçamento</p>
                      <p className="text-muted-foreground">Entre em contato conosco informando o equipamento desejado e período de aluguel.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Definição dos Serviços</p>
                      <p className="text-muted-foreground">Escolha entre aluguel simples, com treinamento, com operador ou pacote completo.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Entrega e Suporte</p>
                      <p className="text-muted-foreground">Equipamento entregue com todas as instruções e suporte técnico durante todo o período.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Processamento e Relatório</p>
                      <p className="text-muted-foreground">Se solicitado, processamos os dados coletados e entregamos relatório completo com ART.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa Alugar Equipamentos de Geofísica?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para aluguel de equipamentos de geofísica. Oferecemos flexibilidade de prazo e opções completas de serviço.
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

