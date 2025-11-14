import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Activity, CheckCircle2, Layers, Mountain, Leaf, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "MASW - Análise Multicanal de Ondas Superficiais | GeoView",
  description: "Serviços especializados em MASW (Análise Multicanal das Ondas Superficiais) para caracterização geológica, identificação de cavidades, mapeamento do topo rochoso e detecção de depósitos enterrados. Método sísmico avançado.",
  keywords: [
    "MASW",
    "análise multicanal de ondas superficiais",
    "ondas de Rayleigh",
    "ondas de Love",
    "perfis de velocidades sísmicas",
    "curvas de dispersão",
    "caracterização geológica",
    "identificação de cavidades",
    "mapeamento do topo rochoso",
    "zonas de fraturas",
    "detecção de depósitos enterrados",
    "geofísica sísmica",
    "investigação geotécnica",
    "análise sísmica",
    "ondas superficiais"
  ],
  openGraph: {
    title: "MASW - Análise Multicanal de Ondas Superficiais | GeoView",
    description: "Método MASW para caracterização geológica através de análise de ondas superficiais e perfis de velocidades sísmicas.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/masw",
  },
};

const etapas = [
  {
    numero: "1",
    titulo: "Aquisição",
    descricao: "Fontes geram as ondas sísmicas que são registradas pelo arranjo de sensores (geofones) obtendo-se ao final um sismograma."
  },
  {
    numero: "2",
    titulo: "Processamento",
    descricao: "Interpreta-se ao final as curvas de dispersão, pois diferentes ondas possuem diferentes curvas de diversos modos."
  },
  {
    numero: "3",
    titulo: "Inversão",
    descricao: "Cada curva de dispersão, ou então, todas as curvas em conjunto, são invertidas para que se obtenham perfis de velocidades - gráficos de profundidade em função da velocidade - que caracterizam a subsuperfície."
  }
];

const aplicacoesGeologicas = [
  "Identificação de cavidades subsuperficiais como cavernas",
  "Galerias de minas abandonadas",
  "Mapeamento do topo rochoso",
  "Identificação de zonas de fraturas e de falhas",
  "Delimitação de zonas de intemperismo",
  "Avaliação de diques"
];

const aplicacoesAmbientais = [
  "Detecção de depósitos de lixo enterrado",
  "Espessuras de aterros sanitários"
];

const vantagens = [
  {
    icon: Activity,
    title: "Análise de Ondas Superficiais",
    description: "Utiliza a análise do comportamento dispersivo das ondas de superfície (Rayleigh e Love) para caracterizar o meio geológico."
  },
  {
    icon: Layers,
    title: "Perfis de Velocidades",
    description: "Permite caracterizar o meio geológico através de perfis de velocidades das ondas sísmicas por meio da inversão de curvas de dispersão."
  },
  {
    icon: Waves,
    title: "Fontes Ativas ou Passivas",
    description: "Podem ser empregadas fontes ativas ou passivas, oferecendo flexibilidade na aplicação do método conforme as condições do local."
  },
  {
    icon: Mountain,
    title: "Caracterização Detalhada",
    description: "Perfis de velocidades caracterizam a subsuperfície segundo a velocidade de propagação das ondas P e/ou S, fornecendo informações precisas."
  }
];

export default function MASWPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Geofísica Sísmica
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            MASW - Análise Multicanal de Ondas Superficiais
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Método sísmico avançado que utiliza a análise do comportamento dispersivo das ondas de superfície (Rayleigh e Love) para caracterizar o meio geológico através de perfis de velocidades das ondas sísmicas.
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
            <h2 className="text-3xl font-bold mb-6">O que é MASW?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              O MASW (Análise Multicanal das Ondas Superficiais) é um método que utiliza a análise do comportamento dispersivo das ondas de superfície (Rayleigh e Love), o que permite caracterizar o meio geológico através de perfis de velocidades das ondas sísmicas por meio da inversão de curvas de dispersão.
            </p>
            <p className="text-lg text-muted-foreground">
              Podem ser empregadas fontes ativas ou passivas, mas independentemente das ondas analisadas, fontes ou arranjos de campo empregados, o método MASW possui etapas básicas bem definidas: aquisição, processamento e inversão.
            </p>
          </div>
        </div>
      </section>

      {/* Etapas do Método */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Etapas do Método MASW</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {etapas.map((etapa, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">{etapa.numero}</span>
                    </div>
                    <CardTitle className="text-xl">{etapa.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{etapa.descricao}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do Método MASW</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vantagens.map((vantagem, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <vantagem.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{vantagem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{vantagem.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações Geológicas */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações Geológicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aplicacoesGeologicas.map((aplicacao, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{aplicacao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações Ambientais */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações Ambientais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aplicacoesAmbientais.map((aplicacao, index) => (
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
            <h2 className="text-3xl font-bold mb-8 text-center">MASW em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/masw/MASW.jpg"
                    alt="Método MASW - Análise Multicanal de Ondas Superficiais para caracterização geológica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Método MASW</CardTitle>
                  <CardDescription>
                    Análise multicanal de ondas superficiais para caracterização geológica
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/masw/MASW1.webp"
                    alt="Equipamento MASW - análise de ondas de Rayleigh e Love para investigação geofísica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Análise de Ondas Superficiais</CardTitle>
                  <CardDescription>
                    Caracterização do meio através de ondas de Rayleigh e Love
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/masw/MAEW_2.png"
                    alt="Perfis de velocidades sísmicas através de MASW - caracterização da subsuperfície"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Perfis de Velocidades</CardTitle>
                  <CardDescription>
                    Caracterização da subsuperfície através de perfis de velocidades sísmicas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/masw/download.jpg"
                    alt="Investigação geofísica com MASW - identificação de cavidades e estruturas geológicas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Investigação Geofísica</CardTitle>
                  <CardDescription>
                    Identificação de cavidades e estruturas geológicas no subsolo
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Detalhado */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Como Funciona o MASW</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Aquisição de Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Fontes geram as ondas sísmicas que são registradas pelo arranjo de sensores (geofones), obtendo-se ao final um sismograma. Podem ser utilizadas fontes ativas (martelo, explosivos) ou passivas (ruído ambiente).
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Processamento de Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Interpreta-se ao final as curvas de dispersão, pois diferentes ondas possuem diferentes curvas de diversos modos. O processamento permite identificar e separar os diferentes modos de propagação das ondas superficiais.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Inversão e Perfis de Velocidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Cada curva de dispersão, ou então, todas as curvas em conjunto, são invertidas para que se obtenham perfis de velocidades - gráficos de profundidade em função da velocidade - que caracterizam a subsuperfície da área de estudo segundo a velocidade de propagação das ondas P e/ou S.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de MASW?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar investigações geológicas e ambientais utilizando o método MASW, com tecnologia de última geração e expertise comprovada.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
              <Link href="/contato">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/servicos/sismica-refracao">
                Saiba Mais sobre Sísmica
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

