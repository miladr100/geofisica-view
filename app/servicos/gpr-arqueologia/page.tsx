import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Radar, CheckCircle2, Search, ShieldCheck, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "GPR em Arqueologia - Investigação Arqueológica Não Destrutiva | GeoView",
  description: "Serviços especializados em GPR (Georadar) para investigação arqueológica. Método não destrutivo para localização de urnas funerárias, túmulos, muros enterrados, artefatos e fósseis. Preservação de sítios arqueológicos.",
  keywords: [
    "GPR em arqueologia",
    "georadar arqueológico",
    "investigação arqueológica",
    "GPR arqueologia",
    "radar arqueológico",
    "detecção de artefatos",
    "localização de fósseis",
    "sítios arqueológicos",
    "investigação não destrutiva",
    "arqueologia geofísica",
    "mapeamento arqueológico",
    "preservação arqueológica",
    "túmulos enterrados",
    "urnas funerárias",
    "construções históricas",
    "geofísica arqueológica"
  ],
  openGraph: {
    title: "GPR em Arqueologia - Investigação Arqueológica Não Destrutiva | GeoView",
    description: "Método GPR não destrutivo para investigação arqueológica, preservação de sítios e localização precisa de artefatos e estruturas históricas.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/gpr-arqueologia",
  },
};

const aplicacoes = [
  "Urnas funerárias",
  "Túmulos",
  "Muros enterrados",
  "Artefatos preciosos",
  "Construção histórica",
  "Fósseis"
];

const etapasProcesso = [
  {
    numero: "1",
    titulo: "Emissão da Onda",
    descricao: "Uma onda eletromagnética é emitida pelo transmissor do GPR"
  },
  {
    numero: "2",
    titulo: "Propagação e Reflexão",
    descricao: "A onda percorre o meio até ser refletida devido à mudança de material (como do solo para um fóssil)"
  },
  {
    numero: "3",
    titulo: "Captação do Sinal",
    descricao: "Geração de onda refletida, que é captada pelo receptor do GPR"
  },
  {
    numero: "4",
    titulo: "Mapeamento Contínuo",
    descricao: "O processo investigatório continua em sentido linear à medida que o operador move o equipamento GPR na superfície"
  }
];

const vantagens = [
  {
    icon: ShieldCheck,
    title: "Método Não Destrutivo",
    description: "Investigação completamente não invasiva que preserva a integridade dos sítios arqueológicos, sem necessidade de escavação prévia."
  },
  {
    icon: Search,
    title: "Localização Precisa",
    description: "Identificação precisa da localização e profundidade de artefatos, estruturas e fósseis em subsuperfície antes das escavações."
  },
  {
    icon: Layers,
    title: "Resultados 2D e 3D",
    description: "Processamento de dados com software específico gerando visualizações em 2D e 3D para melhor compreensão das estruturas arqueológicas."
  },
  {
    icon: Radar,
    title: "Orientação de Escavações",
    description: "Resultados que orientam as escavações arqueológicas, identificando limites do sítio e localização exata dos artefatos."
  }
];

export default function GPRArqueologiaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Geofísica Arqueológica
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            GPR em Arqueologia - Investigação Não Destrutiva
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Método GPR (Georadar) especializado para investigação arqueológica. Tecnologia não destrutiva para localização de artefatos, estruturas históricas e preservação de sítios arqueológicos.
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
            <h2 className="text-3xl font-bold mb-6">GPR em Investigação Arqueológica</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Projetos de investigação arqueológica muitas vezes precisam utilizar o Método GPR (georadar ou ground penetrating radar) para investigação da subsuperfície com o fim de mapear estruturas e artefatos históricos enterrados.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Esta investigação não destrutiva feita pelo GPR (georadar) ajuda a preservar os sítios arqueológicos e orientar as escavações arqueológicas. GPR é um método seguro e prático para identificação de estruturas em subsuperfície, sem qualquer tipo de prejuízo aos sítios arqueológicos, já que sua pesquisa se dá através de emissão de ondas eletromagnéticas feitas pelo equipamento à medida que este se locomove na superfície.
            </p>
            <p className="text-lg text-muted-foreground">
              Os dados são adquiridos por equipamento de georadar de antena blindada com duas antenas. Após a aquisição dos dados, estes são processados com software específico e devidamente interpretados gerando resultados em 2D e até mesmo 3D. Estes resultados são utilizados pela equipe de arqueologia para identificar os limites do sítio arqueológico e saber a localização e profundidade dos artefatos em subsuperfície.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">O que o GPR Pode Mapear em Arqueologia</h2>
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

      {/* Como Funciona */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Como Funciona o Método GPR em Arqueologia</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              O Método GPR funciona basicamente conforme explicação a seguir:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {etapasProcesso.map((etapa, index) => (
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
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do GPR em Arqueologia</h2>
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

      {/* Processamento de Dados */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Processamento e Interpretação de Dados</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Aquisição de Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Os dados são adquiridos por equipamento de georadar de antena blindada com duas antenas, garantindo alta qualidade e precisão nas medições.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Processamento Especializado</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Após a aquisição, os dados são processados com software específico e devidamente interpretados por especialistas, gerando resultados em 2D e até mesmo 3D.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Resultados para Arqueologia</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Os resultados processados são utilizados pela equipe de arqueologia para identificar os limites do sítio arqueológico e saber a localização e profundidade exata dos artefatos em subsuperfície, orientando as escavações de forma precisa e eficiente.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preservação */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Preservação de Sítios Arqueológicos</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              O método GPR é fundamental para a preservação de sítios arqueológicos, pois permite investigação completa sem causar danos ao local. A pesquisa se dá através de emissão de ondas eletromagnéticas enquanto o equipamento se locomove na superfície, sem necessidade de escavação prévia.
            </p>
            <p className="text-lg text-muted-foreground text-center">
              Esta abordagem não destrutiva garante que os sítios arqueológicos sejam preservados enquanto fornece informações valiosas para orientar escavações futuras de forma precisa e eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de GPR em Arqueologia?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para atender projetos arqueológicos com tecnologia GPR de última geração e expertise comprovada em investigações não destrutivas.
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

