import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, HardHat, CheckCircle2, Building2, Zap, Waves, Radar, Mountain, Droplets, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Engenharia Geofísica - Mapeamento de Subsolo para Obras de Engenharia | GeoView",
  description: "Serviços de Engenharia Geofísica para mapeamento de subsolo em obras: usinas hidrelétricas, barragens, túneis, gasodutos. Método GPR para investigação subsuperficial.",
  keywords: [
    "engenharia geofísica",
    "mapeamento subsolo",
    "geofísica para engenharia",
    "investigação subsuperficial",
    "GPR engenharia",
    "georadar engenharia",
    "barragens geofísica",
    "túneis geofísica",
    "usinas hidrelétricas",
    "gasodutos geofísica",
    "investigação pré-obra",
    "planejamento geofísico",
    "estruturas subterrâneas",
    "utilidades públicas",
    "inspeção pavimentos"
  ],
  openGraph: {
    title: "Engenharia Geofísica - Mapeamento de Subsolo para Obras de Engenharia | GeoView",
    description: "Métodos geofísicos para mapeamento de subsolo em projetos de engenharia: usinas, barragens, túneis e gasodutos.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/engenharia-geofisica",
  },
};

const obrasEngenharia = [
  {
    icon: Zap,
    title: "Usinas e Pequenas Centrais Hidrelétricas",
    description: "Mapeamento geofísico de subsolo para apoio ao projeto e construção de usinas hidrelétricas, identificando estruturas geológicas e características do terreno."
  },
  {
    icon: Mountain,
    title: "Barragens",
    description: "Investigação geofísica para projetos de barragens, fornecendo informações sobre estabilidade do terreno, presença de falhas e características geológicas."
  },
  {
    icon: Building2,
    title: "Túneis Rodoviários",
    description: "Mapeamento de subsolo para projetos de túneis rodoviários, identificando estruturas geológicas, zonas de fraturamento e características do maciço rochoso."
  },
  {
    icon: Package,
    title: "Projetos para Instalação de Gasodutos",
    description: "Investigação geofísica para planejamento de rotas de gasodutos, mapeando estruturas subterrâneas e características do terreno ao longo do traçado."
  }
];

const mapeamentosGPR = [
  "Canos metálicos, tubulações, cabos elétricos, utilidades públicas em geral",
  "Tambores plásticos",
  "Inspeção de pavimentos",
  "Contaminantes no lençol freático",
  "Áreas contaminadas",
  "Fósseis",
  "Objetos enterrados",
  "Tanques de combustível",
  "Análise em geral do subsolo",
  "Outras estruturas subterrâneas"
];

const vantagens = [
  "Redução de riscos em projetos de engenharia",
  "Otimização de orçamentos através de informações precisas",
  "Identificação prévia de variáveis estruturais e litológicas",
  "Mapeamento não invasivo de subsuperfície",
  "Suporte ao planejamento e desenvolvimento de obras",
  "Prevenção de surpresas durante a execução"
];

const aplicacoes = [
  "Projetos de engenharia",
  "Investigação arqueológica",
  "Planejamento de campos rurais",
  "Obras de infraestrutura",
  "Projetos de construção civil"
];

export default function EngenhariaGeofisicaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Engenharia Geofísica
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Engenharia Geofísica - Mapeamento de Subsolo para Obras de Engenharia
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Métodos geofísicos para mapeamento de subsolo em projetos de engenharia: usinas hidrelétricas, barragens, túneis rodoviários, gasodutos e muito mais. Investigação pré-obra essencial para planejamento e redução de riscos.
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
            <h2 className="text-3xl font-bold mb-6">Importância da Engenharia Geofísica</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Projetos de engenharia precisam do devido pré-planejamento, ainda mais quando se trata de informações de subsuperfície, que geralmente apresentam variáveis estruturais e litológicas que interferem no orçamento e desenvolvimento da obra.
            </p>
            <p className="text-lg text-muted-foreground">
              Métodos geofísicos visam atender em obras de engenharia através de mapeamentos de subsolo para apoio à obras de engenharia, fornecendo informações essenciais para o planejamento adequado e redução de riscos.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens da Engenharia Geofísica</h2>
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

      {/* Obras de Engenharia */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações em Obras de Engenharia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {obrasEngenharia.map((obra, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <obra.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{obra.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{obra.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Método GPR */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Método GPR para Engenharia Geofísica</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Projetos de engenharia, investigação arqueológica, planejamento de campos rurais, dentre outros, muitas vezes precisam utilizar o Método GPR (georadar ou ground penetrating radar) para investigação da subsuperfície.
            </p>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Radar className="h-6 w-6 text-primary" />
                  Mapeamentos Realizados com GPR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mapeamentosGPR.map((mapeamento, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{mapeamento}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Áreas de Aplicação</h2>
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
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Engenharia Geofísica em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/engenharia-geofisica/GPR.png"
                    alt="GPR para engenharia geofísica - georadar em investigações de subsuperfície"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Georadar (GPR)</CardTitle>
                  <CardDescription>
                    Método GPR para investigação subsuperficial em projetos de engenharia
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/engenharia-geofisica/eletrorresistividade.webp"
                    alt="Eletrorresistividade para engenharia geofísica - imageamento elétrico de subsolo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Eletrorresistividade</CardTitle>
                  <CardDescription>
                    Imageamento elétrico para caracterização geológica do subsolo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/engenharia-geofisica/masw.webp"
                    alt="MASW para engenharia geofísica - métodos sísmicos aplicados a obras"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">MASW</CardTitle>
                  <CardDescription>
                    Análise multicanal de ondas superficiais para caracterização geológica
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pré-planejamento */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Pré-planejamento Essencial</h2>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Por que Investir em Engenharia Geofísica?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  A investigação geofísica pré-obra oferece benefícios significativos:
                </CardDescription>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Redução de custos:</strong> Identificação prévia de variáveis estruturais e litológicas permite ajustes no projeto antes da execução</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Otimização de orçamentos:</strong> Informações precisas sobre o subsolo ajudam a definir orçamentos mais realistas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Redução de riscos:</strong> Identificação de problemas potenciais antes da execução da obra</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Planejamento adequado:</strong> Informações detalhadas sobre o subsolo permitem planejamento mais eficiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Métodos não invasivos:</strong> Investigação sem necessidade de escavações extensivas ou perfurações múltiplas</span>
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Engenharia Geofísica?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar mapeamentos geofísicos de subsolo para seus projetos de engenharia, fornecendo informações essenciais para planejamento adequado e redução de riscos.
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

