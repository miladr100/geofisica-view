import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Camera, CheckCircle2, ShieldCheck, Search, Droplets, Wrench, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Perfilagem Ótica - Inspeção de Poços Artesianos em HD | GeoView",
  description: "Serviços de Perfilagem Ótica para poços artesianos com filmadora HD de 800 metros. Perfilagem preventiva e diagnóstica com câmeras 360º de alta qualidade.",
  keywords: [
    "perfilagem ótica",
    "inspeção poços artesianos",
    "filmagem poços",
    "perfilagem preventiva",
    "perfilagem diagnóstica",
    "câmera poço artesiano",
    "inspeção poço tubular",
    "diagnóstico poço",
    "manutenção poço",
    "contaminação poço",
    "colmatação poço",
    "obstrução poço",
    "filmadora HD poço",
    "inspeção visual poço"
  ],
  openGraph: {
    title: "Perfilagem Ótica - Inspeção de Poços Artesianos em HD | GeoView",
    description: "Perfilagem ótica para poços artesianos com equipamento HD de 800 metros. Inspeção preventiva e diagnóstica.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/perfilagem-otica",
  },
};

const caracteristicasEquipamento = [
  "Filmadora de 800 metros de cabo",
  "Duas câmeras HD de alta fidelidade",
  "Sensor CCD de alta qualidade",
  "Visada em 360º para ambas as direções",
  "Carrinho de transporte com duas rodas de borracha dura",
  "Guincho de 1,5 metros retratável com ajuste",
  "Contador de metro em alta precisão",
  "Gravação em SSD de 240 GB"
];

const tiposPerfilagem = [
  {
    icon: ShieldCheck,
    title: "Perfilagem Preventiva",
    description: "Identificação de possíveis manutenções necessárias ao poço antes que problemas maiores ocorram, permitindo planejamento adequado de manutenções preventivas."
  },
  {
    icon: Search,
    title: "Perfilagem Diagnóstica",
    description: "Identificação da causa raiz de problemas no funcionamento do poço, incluindo fonte de contaminação, mal funcionamento da bomba, obstruções e colmatação."
  }
];

const problemasIdentificados = [
  {
    icon: Droplets,
    title: "Fonte de Contaminação",
    description: "Identificação do local, profundidade e espessura da falha por onde entra a contaminação no poço."
  },
  {
    icon: Wrench,
    title: "Mal Funcionamento da Bomba",
    description: "Diagnóstico visual de problemas relacionados ao funcionamento da bomba e equipamentos instalados."
  },
  {
    icon: Search,
    title: "Obstrução ao Longo do Poço",
    description: "Identificação de obstruções e bloqueios que possam estar afetando o fluxo de água no poço."
  },
  {
    icon: Droplets,
    title: "Colmatação do Poço",
    description: "Detecção de processos de colmatação que reduzem a capacidade de produção do poço."
  }
];

const vantagens = [
  "Filmagem em HD de alta qualidade",
  "Visualização em tempo real",
  "Inspeção completa (laterais e fundo)",
  "Gravação para análise posterior",
  "Identificação precisa de problemas",
  "Redução de custos com manutenções"
];

export default function PerfilagemOticaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Perfilagem Ótica
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Perfilagem Ótica - Inspeção de Poços Artesianos em HD
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços de Perfilagem Ótica para poços artesianos com filmadora HD de 800 metros. Perfilagem preventiva e diagnóstica com câmeras 360º de alta qualidade para inspeção completa do interior do poço.
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
            <h2 className="text-3xl font-bold mb-6">O que é Perfilagem Ótica?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A GeoView presta serviços de perfilagem ótica através de uma filmadora de 800 metros de cabo, sendo duas câmeras HD, de alta fidelidade e sensor CCD de alta qualidade, com visada em 360º para ambas as direções.
            </p>
            <p className="text-lg text-muted-foreground">
              Trata-se de um equipamento para filmagem de poços artesianos, possibilitando mostrar e gravar em HD, em tempo real, tudo que esteja ocorrendo no interior do poço; tanto nas laterais, quanto no fundo. Pode também ser utilizado para outros propósitos de filmagem de profundidade, desde que respeitados os limites de profundidade e temperatura.
            </p>
          </div>
        </div>
      </section>

      {/* Características do Equipamento */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Características do Equipamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caracteristicasEquipamento.map((caracteristica, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{caracteristica}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Perfilagem */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Perfilagem Ótica</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              A perfilagem ótica é realizada através da inserção de uma câmera lateral e frontal no poço tubular. Através disto pode-se realizar a perfilagem preventiva e diagnóstica.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tiposPerfilagem.map((tipo, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <tipo.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{tipo.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{tipo.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problemas Identificados */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Problemas Identificados pela Perfilagem Diagnóstica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemasIdentificados.map((problema, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <problema.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{problema.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{problema.description}</CardDescription>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens da Perfilagem Ótica</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Perfilagem Ótica em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/perfilagem-otica/Perfilagem ótica.png"
                    alt="Perfilagem ótica - equipamento de filmagem HD para inspeção de poços artesianos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento de Perfilagem</CardTitle>
                  <CardDescription>
                    Filmadora HD de 800 metros para inspeção de poços
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/perfilagem-otica/Perfilagem ótica_01.png"
                    alt="Perfilagem ótica em poço artesiano - inspeção visual com câmeras HD"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Inspeção Visual</CardTitle>
                  <CardDescription>
                    Câmeras HD com visada 360º para análise completa
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/perfilagem-otica/Perfilagem ótica_02.png"
                    alt="Perfilagem ótica diagnóstica - identificação de problemas em poços"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Diagnóstico Preciso</CardTitle>
                  <CardDescription>
                    Identificação detalhada de problemas e falhas
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Aplicações da Perfilagem Ótica</h2>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Quando Utilizar a Perfilagem Ótica?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  A perfilagem ótica é essencial em diversas situações:
                </CardDescription>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Inspeção de poços artesianos:</strong> Visualização completa do interior do poço para avaliação de condições</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Manutenção preventiva:</strong> Identificação de problemas antes que se tornem críticos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Diagnóstico de problemas:</strong> Identificação precisa da causa de falhas no funcionamento do poço</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Controle de qualidade:</strong> Verificação da qualidade da construção e instalação de equipamentos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Documentação:</strong> Gravação em HD para análise posterior e documentação técnica</span>
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Perfilagem Ótica?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar perfilagem ótica em seus poços artesianos, fornecendo inspeção completa em HD e diagnóstico preciso de problemas.
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

