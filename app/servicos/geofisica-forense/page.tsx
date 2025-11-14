import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Search, CheckCircle2, User, Package, Shovel, Route, Radar, Magnet } from "lucide-react";

export const metadata: Metadata = {
  title: "Geofísica Forense - Investigação Não Invasiva para Estudos Forenses | GeoView",
  description: "Serviços de Geofísica Forense para delimitação de corpos enterrados, itens enterrados, localização de áreas escavadas e túneis subterrâneos. Métodos não invasivos: resistividade, GPR e magnético.",
  keywords: [
    "geofísica forense",
    "investigação forense",
    "delimitação de corpos enterrados",
    "localização de itens enterrados",
    "geofísica não invasiva",
    "GPR forense",
    "resistividade forense",
    "investigação de túneis",
    "áreas escavadas",
    "investigação criminal",
    "perícia geofísica",
    "métodos geofísicos forenses",
    "radar de penetração no solo",
    "método magnético forense"
  ],
  openGraph: {
    title: "Geofísica Forense - Investigação Não Invasiva para Estudos Forenses | GeoView",
    description: "Métodos geofísicos não invasivos para investigações forenses: delimitação de corpos enterrados, itens enterrados e localização de túneis.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/geofisica-forense",
  },
};

const aplicacoes = [
  {
    icon: User,
    title: "Delimitação de Corpos Enterrados",
    description: "Identificação e delimitação precisa de corpos enterrados em subsuperfície, fornecendo informações precisas sobre localização e profundidade através de métodos não invasivos."
  },
  {
    icon: Package,
    title: "Delimitação de Itens Enterrados",
    description: "Localização de itens em geral enterrados, incluindo objetos, evidências e materiais relevantes para investigações forenses, sem necessidade de escavações extensivas."
  },
  {
    icon: Shovel,
    title: "Localização de Áreas Remexidas",
    description: "Identificação de áreas que foram remexidas, escavadas ou perturbadas, permitindo detectar atividades recentes e áreas de interesse para investigações."
  },
  {
    icon: Route,
    title: "Localização de Túneis Subterrâneos",
    description: "Detecção e mapeamento de túneis subterrâneos através de métodos geofísicos, essencial para investigações de segurança e perícias técnicas."
  }
];

const metodos = [
  {
    icon: Magnet,
    title: "Resistividade",
    description: "Método de eletrorresistividade para investigação forense, detectando variações nas propriedades elétricas do subsolo que podem indicar presença de alvos enterrados."
  },
  {
    icon: Radar,
    title: "Radar de Penetração no Solo (GPR)",
    description: "Georadar para investigação de alta resolução, fornecendo imageamento detalhado da subsuperfície e capacidade de detectar objetos e estruturas enterradas."
  },
  {
    icon: Magnet,
    title: "Método Magnético",
    description: "Detecção de variações no campo magnético terrestre, útil para localização de objetos metálicos e estruturas enterradas relevantes para investigações forenses."
  }
];

const vantagens = [
  "Métodos não invasivos que geram mínimo dano em superfície",
  "Informações muito precisas sobre alvos enterrados",
  "Investigações discretas e eficientes",
  "Profundidade variável de investigação (de cm a centenas de metros)",
  "Aplicável em diferentes configurações geológicas",
  "Preservação da cena do crime ou área de investigação"
];

export default function GeofisicaForensePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Geofísica Forense
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Geofísica Forense - Investigação Não Invasiva para Estudos Forenses
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Métodos geofísicos não invasivos para investigações forenses: delimitação de corpos enterrados, itens enterrados, localização de áreas escavadas e túneis subterrâneos. Informações precisas com mínimo impacto.
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
            <h2 className="text-3xl font-bold mb-6">O que é Geofísica Forense?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Métodos geofísicos são amplamente utilizados na área forense. Por serem não invasivos, além de gerar o mínimo dano em superfície durante a pesquisa, também podem dar informações muito precisas a respeito de alvos enterrados.
            </p>
            <p className="text-lg text-muted-foreground">
              Métodos geofísicos são uma forte ferramenta para estudos forenses, oferecendo investigação eficiente, discreta e precisa do subsolo sem necessidade de escavações extensivas que possam comprometer evidências ou a integridade da área investigada.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens dos Métodos Geofísicos Forenses</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações da Geofísica Forense</h2>
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

      {/* Métodos */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Métodos Geofísicos Utilizados</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              As variações entre cada método dependem da profundidade que se deseja estudar (de cm a centenas de metros), da configuração geológica, do alvo investigado, dos limitadores em superfície, entre outros fatores.
            </p>
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

      {/* Galeria de Imagens */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Geofísica Forense em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/geofisica-forense/geofísica forense.png"
                    alt="Geofísica forense - investigação não invasiva para estudos forenses"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Investigação Forense</CardTitle>
                  <CardDescription>
                    Métodos geofísicos não invasivos para estudos forenses
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/geofisica-forense/forense.jpeg"
                    alt="Delimitação de alvos enterrados - geofísica forense aplicada"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Delimitação de Alvos</CardTitle>
                  <CardDescription>
                    Localização precisa de corpos e itens enterrados
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/geofisica-forense/Design sem nome (3).png"
                    alt="Métodos geofísicos forenses - investigação não invasiva GeoView"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Técnicas Avançadas</CardTitle>
                  <CardDescription>
                    Aplicação de métodos geofísicos em investigações forenses
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Importância da Não Invasividade */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Por que Métodos Não Invasivos?</h2>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Preservação da Integridade da Investigação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Os métodos geofísicos forenses oferecem vantagens críticas em investigações:
                </CardDescription>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Preservação da cena:</strong> Não comprometem evidências ou alteram a área investigada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Precisão:</strong> Fornecem informações muito precisas sobre alvos enterrados sem necessidade de escavação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Discretização:</strong> Investigação discreta que não altera a superfície</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Eficiência:</strong> Permitem investigação rápida de grandes áreas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Otimização:</strong> Reduzem necessidade de escavações extensivas e múltiplas tentativas</span>
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Geofísica Forense?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar investigações forenses não invasivas utilizando métodos geofísicos avançados, fornecendo informações precisas e confiáveis para suas investigações.
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

