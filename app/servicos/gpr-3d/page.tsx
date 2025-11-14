import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Radar, CheckCircle2, Boxes, Layers, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "GPR 3D - Imageamento Tridimensional com Georadar | GeoView",
  description: "Serviços especializados em GPR 3D (Georadar Tridimensional) para mapeamento subsuperficial em 3D. Visualização detalhada de estruturas, tubulações e objetos enterrados com tecnologia de última geração.",
  keywords: [
    "GPR 3D",
    "georadar 3D",
    "imageamento tridimensional",
    "GPR tridimensional",
    "mapeamento 3D subsuperficial",
    "visualização 3D georadar",
    "radar 3D",
    "investigação geofísica 3D",
    "mapeamento subsuperficial 3D",
    "análise tridimensional",
    "geofísica 3D",
    "localização 3D de tubulações",
    "detecção 3D de estruturas",
    "projetos de engenharia 3D",
    "georadar avançado"
  ],
  openGraph: {
    title: "GPR 3D - Imageamento Tridimensional com Georadar | GeoView",
    description: "Tecnologia avançada de GPR 3D para visualização tridimensional detalhada de estruturas e objetos no subsolo.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/gpr-3d",
  },
};

const aplicacoes = [
  "Canos metálicos, tubulações e cabos elétricos",
  "Utilidades públicas em geral",
  "Tambores plásticos",
  "Inspeção de pavimentos",
  "Contaminantes no lençol freático",
  "Áreas contaminadas",
  "Fósseis",
  "Objetos enterrados",
  "Tanques de combustível",
  "Análise em geral do subsolo",
  "Estruturas subterrâneas diversas"
];

const etapasProcesso = [
  {
    numero: "1",
    titulo: "Emissão da Onda",
    descricao: "Uma onda eletromagnética é emitida pelo transmissor do GPR"
  },
  {
    numero: "2",
    titulo: "Propagação no Meio",
    descricao: "A onda percorre o meio até ser refletida devido à mudança de material (como do solo para o cano metálico)"
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

const vantagens3D = [
  {
    icon: Boxes,
    title: "Visualização Tridimensional",
    description: "Visualização completa em 3D das estruturas e objetos no subsolo, proporcionando compreensão espacial detalhada."
  },
  {
    icon: Layers,
    title: "Análise em Profundidade",
    description: "Análise precisa da profundidade e distribuição espacial dos objetos e estruturas detectados."
  },
  {
    icon: Eye,
    title: "Interpretação Facilitada",
    description: "Modelos 3D facilitam a interpretação dos dados e comunicação dos resultados para equipes técnicas."
  },
  {
    icon: Radar,
    title: "Precisão Aprimorada",
    description: "Maior precisão na localização e caracterização de estruturas através da visualização tridimensional."
  }
];

export default function GPR3DPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Tecnologia Avançada
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            GPR 3D - Imageamento Tridimensional com Georadar
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Tecnologia avançada de GPR (Ground Penetrating Radar) para mapeamento subsuperficial em 2D e 3D. Visualização tridimensional detalhada de estruturas, tubulações e objetos enterrados com precisão excepcional.
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
            <h2 className="text-3xl font-bold mb-6">O que é GPR 3D?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Projetos de engenharia, investigação arqueológica, planejamento de campos rurais, dentre outros, muitas vezes precisam utilizar o Método GPR (georadar ou ground penetrating radar) para investigação da subsuperfície em 2D ou 3D, com o fim de mapear estruturas e objetos enterrados.
            </p>
            <p className="text-lg text-muted-foreground">
              O GPR 3D representa a evolução da tecnologia de georadar, permitindo visualização tridimensional completa do subsolo. Esta tecnologia avançada oferece uma compreensão espacial detalhada, facilitando a interpretação dos dados e a tomada de decisões em projetos complexos.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações do GPR 3D</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Como Funciona o Método GPR</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              O Método GPR funciona basicamente conforme as ilustrações abaixo. Por exemplo, no caso de haver um tubo metálico em subsuperfície, pode-se identificá-lo conforme explicação a seguir:
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

      {/* Vantagens do 3D */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do GPR 3D</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vantagens3D.map((vantagem, index) => (
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

      {/* Galeria de Imagens */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tecnologia GPR 3D em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/gpr-3d/GPR 3D.jpeg"
                    alt="Imageamento GPR 3D - visualização tridimensional de estruturas subsuperficiais"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Imageamento GPR 3D</CardTitle>
                  <CardDescription>
                    Visualização tridimensional completa de estruturas no subsolo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/gpr-3d/GPR.png"
                    alt="Equipamento GPR profissional para imageamento 3D - tecnologia de última geração"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento GPR</CardTitle>
                  <CardDescription>
                    Tecnologia avançada para imageamento tridimensional
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/gpr-3d/Identificação de tubulação.png"
                    alt="Identificação de tubulações em 3D através de GPR - localização precisa de utilidades"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Identificação de Tubulações</CardTitle>
                  <CardDescription>
                    Localização precisa de tubulações e utilidades em 3D
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/gpr-3d/LS2000.png"
                    alt="Equipamento LS2000 para GPR 3D - sistema avançado de georadar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento LS2000</CardTitle>
                  <CardDescription>
                    Sistema avançado para imageamento 3D detalhado
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/gpr-3d/Radargrama de GPR.png"
                    alt="Radargrama de GPR 3D - visualização e interpretação de dados tridimensionais"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Radargrama GPR 3D</CardTitle>
                  <CardDescription>
                    Visualização e interpretação de dados tridimensionais
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/gpr-3d/GPR aluguel.jpg"
                    alt="Equipamento GPR disponível para projetos 3D - locação de tecnologia avançada"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamentos Disponíveis</CardTitle>
                  <CardDescription>
                    Tecnologia de ponta para projetos de imageamento 3D
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="relative w-full h-64">
                  <Image
                    src="/gpr-3d/GPR aluguel 2.png"
                    alt="Serviços de GPR 3D - imageamento tridimensional profissional"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Serviços Profissionais</CardTitle>
                  <CardDescription>
                    Imageamento 3D com tecnologia de última geração
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processamento 3D */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Processamento e Visualização 3D</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Aquisição de Dados em Grade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Para gerar modelos 3D, os dados são adquiridos em grade sistemática, permitindo a reconstrução tridimensional completa das estruturas detectadas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Processamento Especializado</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Os dados coletados são processados com software especializado que permite a geração de modelos 3D detalhados, facilitando a visualização e interpretação dos resultados.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Visualização e Análise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Os modelos 3D gerados permitem análise espacial completa, visualização de cortes em diferentes planos e compreensão detalhada da distribuição das estruturas no subsolo.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de GPR 3D?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para atender seus projetos com tecnologia GPR 3D de última geração e expertise comprovada em imageamento tridimensional.
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

