import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, TestTube, CheckCircle2, Zap, Radar, ShieldCheck, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Análise de Solo Contaminado - Detecção e Remediação de Contaminantes | GeoView",
  description: "Serviços especializados em Análise de Solo Contaminado para identificação de áreas contaminadas, delimitação de plumas contaminantes e remediação. Análise química e geofísica de contaminantes.",
  keywords: [
    "análise de solo contaminado",
    "solo contaminado",
    "detecção de contaminantes",
    "pluma contaminante",
    "remediação de solo",
    "áreas contaminadas",
    "análise química de solo",
    "análise geofísica contaminantes",
    "metais pesados",
    "solventes orgânicos",
    "pesticidas",
    "eletrorresistividade contaminantes",
    "GPR contaminação",
    "delimitação de contaminação",
    "identificação de poluentes",
    "geofísica ambiental"
  ],
  openGraph: {
    title: "Análise de Solo Contaminado - Detecção e Remediação de Contaminantes | GeoView",
    description: "Serviços completos de análise de solo contaminado para identificação, delimitação e remediação de áreas contaminadas.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/analise-solo-contaminado",
  },
};

const metodos = [
  {
    icon: TestTube,
    title: "Análise Química",
    description: "Envolve a determinação da concentração de contaminantes químicos no solo. Os contaminantes químicos comuns incluem metais pesados, solventes orgânicos e pesticidas.",
    contaminantes: [
      "Metais pesados",
      "Solventes orgânicos",
      "Pesticidas"
    ]
  },
  {
    icon: Zap,
    title: "Análise Geofísica",
    description: "Envolve o uso de técnicas geofísicas para detectar e delimitar a pluma contaminante na subsuperfície. Os métodos geofísicos utilizados para esse fim são o de eletrorresistividade e GPR.",
    metodos: [
      "Eletrorresistividade",
      "GPR (Georadar)"
    ]
  }
];

const objetivos = [
  "Identificar a fonte da contaminação",
  "Delimitar as áreas de risco",
  "Determinar a extensão da pluma contaminante",
  "Confirmar a existência de substâncias poluentes",
  "Planejar estratégias de remediação",
  "Avaliar riscos ambientais e à saúde"
];

const aplicacoes = [
  "Remediação de solos contaminados",
  "Identificação de áreas contaminadas",
  "Confirmação da existência de poluentes",
  "Delimitação de zonas de risco",
  "Avaliação de passivos ambientais",
  "Monitoramento de áreas degradadas"
];

export default function AnaliseSoloContaminadoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Geofísica Ambiental
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Análise de Solo Contaminado - Detecção e Remediação
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços especializados em Análise de Solo Contaminado para identificação de áreas contaminadas, delimitação de plumas contaminantes e planejamento de remediação. Análise química e geofísica de contaminantes.
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
            <h2 className="text-3xl font-bold mb-6">Importância da Análise de Solo Contaminado</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A análise de solo contaminado é uma etapa importante no processo de remediação de solos contaminados, como também faz parte da identificação de áreas contaminadas ou a confirmação da existência ou não de substâncias poluentes.
            </p>
            <p className="text-lg text-muted-foreground">
              Os resultados da análise podem ser usados para identificar a fonte da contaminação, delimitar as áreas de risco ou de influência da pluma contaminante, fornecendo informações essenciais para o planejamento de estratégias de remediação eficazes.
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Objetivos da Análise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objetivos.map((objetivo, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{objetivo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Métodos */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Métodos de Análise de Solo Contaminado</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {metodos.map((metodo, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <metodo.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{metodo.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{metodo.description}</CardDescription>
                    {metodo.contaminantes && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold mb-2 text-foreground">Contaminantes comuns:</p>
                        <ul className="space-y-1">
                          {metodo.contaminantes.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {metodo.metodos && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold mb-2 text-foreground">Métodos utilizados:</p>
                        <ul className="space-y-1">
                          {metodo.metodos.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="border-none shadow-soft bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle>Escolha do Método Adequado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A escolha do método de análise adequado depende de uma variedade de fatores, incluindo o tipo de contaminante, a extensão da contaminação e o objetivo da análise. Nossa equipe especializada avalia cada caso para determinar a melhor abordagem metodológica.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações da Análise</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Análise de Solo Contaminado em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/analise-solo-contaminado/foto9.jpg"
                    alt="Análise de solo contaminado - investigação geofísica para detecção de contaminantes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Investigação Geofísica</CardTitle>
                  <CardDescription>
                    Detecção e delimitação de plumas contaminantes
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/analise-solo-contaminado/foto10.jpg"
                    alt="Análise química de solo contaminado - identificação de metais pesados e contaminantes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Análise Química</CardTitle>
                  <CardDescription>
                    Determinação da concentração de contaminantes químicos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/analise-solo-contaminado/foto11.jpg"
                    alt="Delimitação de áreas contaminadas - mapeamento de plumas contaminantes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Delimitação de Áreas</CardTitle>
                  <CardDescription>
                    Mapeamento preciso de zonas de risco e contaminação
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens da Análise de Solo Contaminado</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Identificação Precisa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação precisa da fonte da contaminação e delimitação exata das áreas de risco, permitindo ações direcionadas e eficientes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Planejamento de Remediação</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Informações detalhadas sobre a extensão e características da contaminação permitem planejamento estratégico de processos de remediação.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Radar className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Métodos Não Invasivos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Métodos geofísicos como eletrorresistividade e GPR permitem detecção e delimitação de contaminação sem necessidade de escavação extensiva.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <TestTube className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Análise Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Combinação de análise química e geofísica fornece visão completa da contaminação, desde identificação até delimitação espacial.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Processo de Análise</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>1. Identificação e Confirmação</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação de áreas potencialmente contaminadas e confirmação da existência de substâncias poluentes através de análises preliminares.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>2. Delimitação da Contaminação</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Delimitação precisa das áreas de risco e da extensão da pluma contaminante utilizando métodos geofísicos e análises químicas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>3. Caracterização Detalhada</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Caracterização detalhada dos contaminantes presentes, suas concentrações e distribuição espacial, fornecendo base sólida para remediação.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Análise de Solo Contaminado?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar análises completas de solo contaminado, utilizando métodos químicos e geofísicos para identificação e delimitação precisa de áreas contaminadas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
              <Link href="/contato">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/servicos/geofisica-ambiental">
                Saiba Mais sobre Geofísica Ambiental
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

