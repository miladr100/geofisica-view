import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Pickaxe, CheckCircle2, Zap, Magnet, Waves, Search, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Geofísica para Mineração - Prospecção e Exploração Mineral | GeoView",
  description: "Serviços de Geofísica para Mineração: método geoelétrico, polarização induzida (IP), método magnético e métodos sísmicos para prospecção e exploração mineral.",
  keywords: [
    "geofísica mineração",
    "prospecção mineral",
    "exploração mineral",
    "método geoelétrico",
    "polarização induzida",
    "método magnético mineração",
    "métodos sísmicos mineração",
    "geofísica para mineração",
    "prospecção geofísica",
    "delimitação de jazidas",
    "minerais metálicos",
    "anomalias magnéticas",
    "impedância acústica",
    "topos rochosos",
    "fraturas em rochas"
  ],
  openGraph: {
    title: "Geofísica para Mineração - Prospecção e Exploração Mineral | GeoView",
    description: "Métodos geofísicos para prospecção e exploração mineral: geoelétrico, IP, magnético e sísmico.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/geofisica-mineracao",
  },
};

const metodos = [
  {
    icon: Zap,
    title: "Método Geoelétrico e Polarização Induzida (IP)",
    description: "Permitem distinguir minerais com contraste de resistividade elétrica em relação ao meio geológico o qual se encontram, como por exemplo: grafita, quartzo, ferro, entre outros.",
    detalhes: "A Polarização Induzida (IP) em particular visa medir a cargabilidade (ou seja, sua capacidade de armazenar corrente elétrica) dos minerais em subsuperfície, sendo bastante eficiente para encontrar e delimitar minerais metálicos."
  },
  {
    icon: Magnet,
    title: "Método Magnético",
    description: "Também mais viável para pesquisar minerais metálicos, o método magnético analisa a variação do campo magnético terrestre, alterado devido à presença de minerais magnéticos.",
    detalhes: "A presença destes pode auxiliar para encontrar recursos minerais. A pesquisa consiste em caminhar com o magnetômetro por linhas de pesquisa pré-determinadas visando encontrar essas anomalias magnéticas."
  },
  {
    icon: Waves,
    title: "Métodos Sísmicos",
    description: "Medindo o tempo de trânsito das ondas mecânicas, geradas por marretas ou explosivos, os métodos sísmicos conseguem, através da diferença de impedância acústica das camadas geológicas, definir topos rochosos e a base de determinada jazida.",
    detalhes: "Além disso, verificam possíveis fraturas/falhas em corpos rochosos, entre outras funções. São mais aconselhadas para ambientes geológicos específicos, como bacias sedimentares."
  }
];

const aplicacoes = [
  "Distinção de minerais com contraste de resistividade elétrica",
  "Localização e delimitação de minerais metálicos",
  "Medição de cargabilidade de minerais em subsuperfície",
  "Detecção de anomalias magnéticas",
  "Definição de topos rochosos e base de jazidas",
  "Identificação de fraturas e falhas em corpos rochosos",
  "Prospecção em diferentes ambientes geológicos"
];

const vantagens = [
  "Métodos não invasivos para prospecção mineral",
  "Redução de custos em exploração mineral",
  "Identificação precisa de alvos minerais",
  "Delimitação eficiente de jazidas",
  "Aplicável em diferentes tipos de depósitos",
  "Otimização de campanhas de perfuração"
];

export default function GeofisicaMineracaoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Geofísica para Mineração
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Geofísica para Mineração - Prospecção e Exploração Mineral
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Métodos geofísicos especializados para prospecção e exploração mineral: geoelétrico, polarização induzida (IP), método magnético e métodos sísmicos. Tecnologia avançada para identificação e delimitação de recursos minerais.
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
            <h2 className="text-3xl font-bold mb-6">Geofísica Aplicada à Mineração</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Métodos geofísicos são amplamente utilizados na área de mineração, oferecendo técnicas eficientes e não invasivas para prospecção e exploração mineral. Esses métodos permitem identificar, delimitar e caracterizar depósitos minerais antes de investimentos em perfurações extensivas.
            </p>
            <p className="text-lg text-muted-foreground">
              A geofísica para mineração utiliza diferentes propriedades físicas dos materiais para detectar contrastes entre minerais e o meio geológico circundante, proporcionando informações valiosas para tomada de decisões em projetos de exploração mineral.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens da Geofísica para Mineração</h2>
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

      {/* Métodos */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Métodos Geofísicos para Mineração</h2>
            <div className="space-y-8">
              {metodos.map((metodo, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <metodo.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{metodo.title}</CardTitle>
                        <CardDescription className="text-base mb-4">{metodo.description}</CardDescription>
                        <CardDescription className="text-base">{metodo.detalhes}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações dos Métodos Geofísicos</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Geofísica para Mineração em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/geofisica-mineracao/eletrorresistividade.webp"
                    alt="Eletrorresistividade para mineração - método geoelétrico aplicado à prospecção mineral"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Eletrorresistividade</CardTitle>
                  <CardDescription>
                    Método geoelétrico para distinção de minerais
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/geofisica-mineracao/eletrorresistividade 3d.webp"
                    alt="Imageamento elétrico 3D para mineração - visualização tridimensional de estruturas minerais"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Imageamento Elétrico 3D</CardTitle>
                  <CardDescription>
                    Visualização tridimensional de estruturas minerais
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/geofisica-mineracao/ip 3d.webp"
                    alt="Polarização induzida 3D - método IP para delimitação de minerais metálicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Polarização Induzida (IP) 3D</CardTitle>
                  <CardDescription>
                    Delimitação precisa de minerais metálicos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/geofisica-mineracao/MASW.jpg"
                    alt="MASW para mineração - métodos sísmicos aplicados à prospecção mineral"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">MASW - Métodos Sísmicos</CardTitle>
                  <CardDescription>
                    Análise de ondas superficiais para caracterização geológica
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Minerais Detectáveis */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Minerais Detectáveis pelos Métodos Geofísicos</h2>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Tipos de Minerais Identificados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Os métodos geofísicos podem identificar diversos tipos de minerais através de suas propriedades físicas distintas:
                </CardDescription>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Método Geoelétrico e IP:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Grafita</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Quartzo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Ferro</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Minerais metálicos em geral</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Método Magnético:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Minerais magnéticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Magnetita</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Recursos minerais metálicos</span>
                      </li>
                    </ul>
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Geofísica para Mineração?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar prospecção e exploração mineral utilizando métodos geofísicos avançados, fornecendo informações precisas e confiáveis para seus projetos de mineração.
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

