import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Gauge, CheckCircle2, TestTube, Search, Leaf, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Monitoramento de Solo - Análise e Qualidade do Solo | GeoView",
  description: "Serviços especializados em Monitoramento de Solo para avaliação da qualidade, identificação de contaminantes e proteção ambiental. Levantamento de solo, testes físico-químicos e sondagem conforme normas ABNT.",
  keywords: [
    "monitoramento de solo",
    "análise de solo",
    "qualidade do solo",
    "testes de solo",
    "levantamento de solo",
    "sondagem físico-química",
    "contaminantes no solo",
    "fertilidade do solo",
    "classificação geopedológica",
    "análise físico-química",
    "monitoramento ambiental",
    "solo contaminado",
    "avaliação de solo",
    "geofísica ambiental",
    "normas ABNT solo"
  ],
  openGraph: {
    title: "Monitoramento de Solo - Análise e Qualidade do Solo | GeoView",
    description: "Serviços completos de monitoramento de solo para avaliação da qualidade, identificação de problemas e proteção ambiental.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/monitoramento-solo",
  },
};

const metodos = [
  {
    icon: Search,
    title: "Levantamento de Solo",
    description: "Envolve a coleta de amostras de solo para análise. As amostras podem ser coletadas em diferentes profundidades e locais para fornecer uma visão geral da qualidade do solo e da classificação geopedológica."
  },
  {
    icon: TestTube,
    title: "Testes de Solo",
    description: "Este método envolve a análise de amostras de solo para determinar a composição química, física e biológica do solo. Esses dados podem ser usados para avaliar a fertilidade do solo, a presença de contaminantes e a capacidade do solo de suportar o desenvolvimento."
  },
  {
    icon: Gauge,
    title: "Sondagem Físico-Química",
    description: "Envolve o uso de sensores para coletar dados sobre o solo sem entrar em contato direto com ele. Os sensores podem ser usados para monitorar a umidade do solo, a temperatura do solo e a presença de contaminantes."
  }
];

const setores = [
  "Agricultura",
  "Construção",
  "Pesquisa e Monitoramento Ambiental"
];

const beneficios = [
  "Avaliação da saúde do solo",
  "Identificação de possíveis problemas",
  "Proteção do meio ambiente",
  "Conformidade com normas ABNT",
  "Avaliação de fertilidade",
  "Detecção de contaminantes",
  "Classificação geopedológica",
  "Monitoramento contínuo"
];

export default function MonitoramentoSoloPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Monitoramento Ambiental
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Monitoramento de Solo - Análise e Qualidade do Solo
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços especializados em Monitoramento de Solo para avaliação da qualidade, identificação de contaminantes e proteção ambiental. Análises conforme normas ABNT.
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
            <h2 className="text-3xl font-bold mb-6">O que é Monitoramento de Solo?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              O monitoramento de solo é um processo de coleta e análise de dados sobre a qualidade do solo. Esses dados podem ser usados para avaliar a saúde do solo, identificar possíveis problemas e tomar medidas para proteger o meio ambiente.
            </p>
            <p className="text-lg text-muted-foreground">
              O monitoramento de solo pode ser realizado por uma variedade de métodos, incluindo levantamento de solo, testes físico-químicos e sondagem físico-química, cada um oferecendo informações específicas sobre as características e qualidade do solo.
            </p>
          </div>
        </div>
      </section>

      {/* Métodos */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Métodos de Monitoramento de Solo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Benefícios */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefícios do Monitoramento de Solo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setores */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Setores de Aplicação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {setores.map((setor, index) => (
                <Card key={index} className="border-none shadow-soft text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      {setor === "Agricultura" && <Leaf className="h-8 w-8 text-white" />}
                      {setor === "Construção" && <Building2 className="h-8 w-8 text-white" />}
                      {setor === "Pesquisa e Monitoramento Ambiental" && <Gauge className="h-8 w-8 text-white" />}
                    </div>
                    <CardTitle className="text-xl">{setor}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mt-8 text-center">
              O monitoramento de solo é uma atividade importante para uma variedade de setores. De acordo com os valores obtidos para cada parâmetro analisado, é determinado se as concentrações estão acima dos valores permitidos conforme a norma ABNT.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Monitoramento de Solo em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/monitoramento-solo/1.png"
                    alt="Monitoramento de solo - coleta de amostras e análise da qualidade do solo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Coleta de Amostras</CardTitle>
                  <CardDescription>
                    Levantamento de solo com coleta de amostras em diferentes profundidades
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/monitoramento-solo/2.png"
                    alt="Análise de solo - testes físico-químicos para avaliação da qualidade"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Análise Laboratorial</CardTitle>
                  <CardDescription>
                    Testes físico-químicos para determinação da composição do solo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/monitoramento-solo/foto5.jpg"
                    alt="Sondagem físico-química - monitoramento com sensores de umidade e temperatura"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Sondagem Físico-Química</CardTitle>
                  <CardDescription>
                    Monitoramento com sensores para coleta de dados sobre o solo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/monitoramento-solo/foto8.jpg"
                    alt="Monitoramento ambiental de solo - avaliação da qualidade e identificação de contaminantes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Monitoramento Ambiental</CardTitle>
                  <CardDescription>
                    Avaliação da qualidade do solo e identificação de contaminantes
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conformidade com Normas */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Conformidade com Normas ABNT</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              De acordo com os valores obtidos para cada parâmetro analisado, é determinado se as concentrações estão acima dos valores permitidos conforme a norma ABNT. Nossos serviços garantem total conformidade com as normas técnicas vigentes.
            </p>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Análise Conforme Normas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Todos os parâmetros analisados são comparados com os valores de referência estabelecidos pela ABNT, garantindo que os resultados sejam precisos, confiáveis e em conformidade com a legislação ambiental vigente.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aplicações Detalhadas */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações do Monitoramento de Solo</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Leaf className="h-6 w-6 text-primary" />
                    <CardTitle>Agricultura</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Avaliação da fertilidade do solo, identificação de nutrientes, análise de pH e capacidade de suporte para desenvolvimento agrícola, otimizando a produtividade e reduzindo impactos ambientais.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-primary" />
                    <CardTitle>Construção</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Caracterização do solo para projetos de construção, avaliação de capacidade de carga, identificação de riscos geotécnicos e planejamento seguro de obras de engenharia.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Gauge className="h-6 w-6 text-primary" />
                    <CardTitle>Pesquisa e Monitoramento Ambiental</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação de contaminantes, monitoramento de áreas degradadas, avaliação de impactos ambientais e acompanhamento de processos de recuperação de solos contaminados.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Monitoramento de Solo?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar monitoramento completo de solo, fornecendo análises precisas e conformes com as normas ABNT para seus projetos.
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

