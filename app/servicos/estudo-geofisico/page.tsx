import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, LineChart, CheckCircle2, Zap, Radar, Mountain, Activity, Layers, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Estudo Geofísico - Prospecção e Imageamento Subsuperficial | GeoView",
  description: "Serviços completos de Estudo Geofísico para reconstrução estratigráfica do subsolo. Imageamento elétrico, GPR, sísmica, MASW e mais. Mais de 200 projetos concluídos, experiência internacional, atendemos todo o Brasil.",
  keywords: [
    "estudo geofísico",
    "prospecção geofísica",
    "imageamento subsuperficial",
    "reconstrução estratigráfica",
    "geofísica aplicada",
    "investigação geofísica",
    "métodos geofísicos",
    "imageamento elétrico",
    "sísmica",
    "GPR",
    "MASW",
    "eletrorresistividade",
    "geofísica Brasil",
    "projetos geofísicos",
    "relatórios geofísicos"
  ],
  openGraph: {
    title: "Estudo Geofísico - Prospecção e Imageamento Subsuperficial | GeoView",
    description: "Serviços completos de estudo geofísico com mais de 200 projetos concluídos e experiência internacional. Atendemos todo o Brasil.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/estudo-geofisico",
  },
};

const tecnicas = [
  "Imageamento Elétrico Multi-eletrodo 2D/3D",
  "IP (Polarização Induzida)",
  "SEV - Sondagem Elétrica Vertical",
  "Mapeamento de resistividade",
  "Potencial espontâneo",
  "Sísmica de reflexão",
  "Sísmica de refração",
  "MASW",
  "Downhole"
];

const etapas = [
  {
    numero: "1",
    titulo: "Planejamento",
    descricao: "Formulação da proposta técnico-econômica e planejamento detalhado do projeto geofísico."
  },
  {
    numero: "2",
    titulo: "Aquisição",
    descricao: "Coleta de dados em campo utilizando equipamentos de última geração e metodologias adequadas."
  },
  {
    numero: "3",
    titulo: "Processamento",
    descricao: "Processamento dos dados coletados utilizando software especializado e técnicas avançadas."
  },
  {
    numero: "4",
    titulo: "Interpretação",
    descricao: "Interpretação dos resultados e reconstrução estratigráfica do subsolo."
  },
  {
    numero: "5",
    titulo: "Entrega",
    descricao: "Elaboração e entrega do relatório final completo com todas as análises e recomendações."
  }
];

const valores = [
  {
    icon: Award,
    title: "Qualidade",
    description: "Preocupação e cuidado desde a formulação da proposta técnico-econômica até a entrega do relatório final."
  },
  {
    icon: Zap,
    title: "Alta Tecnologia",
    description: "Contamos com os melhores equipamentos para pesquisa geofísica presentes no Brasil, quando se trata de pesquisas elétricas, voltadas para hidrogeologia, mineração e meio ambiente."
  },
  {
    icon: Layers,
    title: "Transparência",
    description: "Nosso objetivo é que o cliente compreenda todas as vantagens e limitações que a geofísica poderá prover para a sua necessidade."
  },
  {
    icon: LineChart,
    title: "Economia",
    description: "Como dispomos de equipamentos de alta tecnologia, conseguimos fornecer mais dados em menos tempo, consequentemente conseguindo oferecer serviços de qualidade com custo relativamente reduzido."
  },
  {
    icon: Award,
    title: "Honestidade",
    description: "A integridade de nossos profissionais e nosso compromisso com cada cliente é a nossa filosofia de trabalho!"
  }
];

export default function EstudoGeofisicoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Estudos Geofísicos
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Estudo Geofísico - Prospecção e Imageamento Subsuperficial
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços completos de Estudo Geofísico para reconstrução estratigráfica do subsolo utilizando métodos de prospecção geofísica. Mais de 200 projetos concluídos, experiência internacional, atendemos todo o Brasil.
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
            <h2 className="text-3xl font-bold mb-6">O que são Estudos Geofísicos?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Os métodos de prospecção geofísica (geoelétrica, GPR, sísmica, etc) permitem a reconstrução estratigráfica do subsolo utilizando parâmetros físico-elétricos das formações que o constituem, resultando em um imageamento da subsuperfície.
            </p>
            <p className="text-lg text-muted-foreground">
              Com experiência internacional, há mais de 10 anos atuando na área de estudo geofísico, os profissionais da GeoView visam garantir um serviço de excelência, utilizando tecnologia de ponta e metodologias comprovadas.
            </p>
          </div>
        </div>
      </section>

      {/* Técnicas */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Técnicas de Prospecção Geofísica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tecnicas.map((tecnica, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{tecnica}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etapas do Processo */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Processo Completo de Estudo Geofísico</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Planejamento, aquisição, processamento, interpretação e entrega de relatório final para cada projeto de geofísica.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {etapas.map((etapa, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-xl">{etapa.numero}</span>
                    </div>
                    <CardTitle className="text-lg text-center">{etapa.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-center">{etapa.descricao}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Experiência e Credibilidade</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-none shadow-soft text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <CardTitle>Projetos Concluídos</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <CardTitle>Anos de Experiência</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">Todo</div>
                  <CardTitle>Brasil</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Atendemos todo o Brasil com experiência internacional</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossos Valores e Compromissos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valores.map((valor, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <valor.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{valor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{valor.description}</CardDescription>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Estudos Geofísicos em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geofisico/GPR.png"
                    alt="Equipamento GPR para estudos geofísicos - georadar em investigações subsuperficiais"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Georadar (GPR)</CardTitle>
                  <CardDescription>
                    Tecnologia avançada para imageamento subsuperficial
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geofisico/eletrorresistividade.webp"
                    alt="Eletrorresistividade - imageamento elétrico para estudos geofísicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Eletrorresistividade</CardTitle>
                  <CardDescription>
                    Imageamento elétrico para caracterização do subsolo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geofisico/eletrorresistividade 3d.webp"
                    alt="Imageamento elétrico 3D - visualização tridimensional de estruturas geológicas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Imageamento Elétrico 3D</CardTitle>
                  <CardDescription>
                    Visualização tridimensional completa de estruturas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geofisico/IE_poço_2.webp"
                    alt="Imageamento elétrico para poços - localização de aquíferos em estudos geofísicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Imageamento para Poços</CardTitle>
                  <CardDescription>
                    Localização de aquíferos e estruturas geológicas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geofisico/LS2000.png"
                    alt="Equipamento LS2000 - sistema avançado para estudos geofísicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento LS2000</CardTitle>
                  <CardDescription>
                    Sistema avançado para investigações geofísicas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geofisico/MASW.jpg"
                    alt="Método MASW - análise multicanal de ondas superficiais para estudos geofísicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">MASW</CardTitle>
                  <CardDescription>
                    Análise multicanal de ondas superficiais
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="relative w-full h-64">
                  <Image
                    src="/estudo-geofisico/arqueologia.jpeg"
                    alt="Geofísica aplicada em arqueologia - investigações não destrutivas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Geofísica Aplicada</CardTitle>
                  <CardDescription>
                    Investigações em diversas áreas de aplicação
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reconstrução Estratigráfica */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Reconstrução Estratigráfica do Subsolo</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Os métodos de prospecção geofísica permitem a reconstrução estratigráfica do subsolo utilizando parâmetros físico-elétricos das formações que o constituem, resultando em um imageamento detalhado da subsuperfície.
            </p>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Imageamento Subsuperficial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Através da análise de parâmetros físico-elétricos, conseguimos criar uma representação precisa das camadas geológicas do subsolo, identificando estruturas, aquíferos, zonas de fraturamento e outras características geológicas importantes para seus projetos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Estudos Geofísicos?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Com mais de 200 projetos concluídos e experiência internacional, nossa equipe está pronta para atender seus projetos em todo o Brasil com tecnologia de ponta e compromisso com a qualidade.
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
                Ver Todos os Serviços
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

