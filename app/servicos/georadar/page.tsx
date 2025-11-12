import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Radar, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Georadar (GPR) - Serviços de Mapeamento Subsuperficial | GeoView",
  description: "Serviços especializados em Georadar (GPR - Ground Penetrating Radar) para localização de tubulações, estruturas subterrâneas, inspeção de pavimentos e investigação arqueológica. Tecnologia de ponta em geofísica.",
  keywords: [
    "georadar",
    "GPR",
    "ground penetrating radar",
    "mapeamento subsuperficial",
    "localização de tubulações",
    "investigação arqueológica",
    "inspeção de pavimentos",
    "geofísica",
    "detecção de estruturas subterrâneas",
    "radar de penetração no solo",
    "identificação de canos metálicos",
    "detecção de contaminantes",
    "análise de subsolo",
    "projetos de engenharia",
    "geofísica aplicada"
  ],
  openGraph: {
    title: "Georadar (GPR) - Serviços de Mapeamento Subsuperficial | GeoView",
    description: "Tecnologia avançada de Georadar para localização precisa de estruturas subterrâneas, tubulações e investigação do subsolo.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/georadar",
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

export default function GeoradarPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Serviços de Geofísica
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Georadar (GPR) - Mapeamento Subsuperficial de Alta Precisão
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Tecnologia avançada de Ground Penetrating Radar para investigação não invasiva do subsolo, ideal para projetos de engenharia, investigação arqueológica e planejamento de campos rurais.
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
            <h2 className="text-3xl font-bold mb-6">O que é Georadar (GPR)?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              O Método GPR (Georadar ou Ground Penetrating Radar) é uma tecnologia geofísica não invasiva utilizada para investigação da subsuperfície. Projetos de engenharia, investigação arqueológica, planejamento de campos rurais, dentre outros, muitas vezes precisam utilizar esta metodologia para mapear estruturas e materiais no subsolo.
            </p>
            <p className="text-lg text-muted-foreground">
              O Georadar funciona através da emissão de ondas eletromagnéticas que penetram no solo e são refletidas quando encontram mudanças nas propriedades dos materiais, permitindo a identificação precisa de objetos e estruturas enterradas sem necessidade de escavação.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações do Georadar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

            {/* Galeria de Imagens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/georadar/gpr.png"
                    alt="Equipamento GPR - Ground Penetrating Radar utilizado em investigações geofísicas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento GPR</CardTitle>
                  <CardDescription>
                    Tecnologia de ponta para investigação subsuperficial
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/georadar/identificacao-tubulacao.png"
                    alt="Identificação de tubulações subterrâneas através do método GPR"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Identificação de Tubulações</CardTitle>
                  <CardDescription>
                    Localização precisa de canos metálicos e estruturas enterradas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/georadar/ls2000.png"
                    alt="Equipamento LS2000 para investigações geofísicas com georadar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento LS2000</CardTitle>
                  <CardDescription>
                    Sistema avançado de georadar para mapeamento detalhado
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/georadar/radargrama-gpr.png"
                    alt="Radargrama de GPR mostrando dados de investigação subsuperficial"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Radargrama de GPR</CardTitle>
                  <CardDescription>
                    Visualização e interpretação dos dados coletados
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do Método GPR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Radar className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Método Não Invasivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Investigação do subsolo sem necessidade de escavação ou perfuração, preservando a integridade do local.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Radar className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Alta Precisão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Tecnologia avançada que permite localização precisa de objetos e estruturas em diferentes profundidades.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Radar className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Rapidez na Execução</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Coleta de dados rápida e eficiente, permitindo mapeamento de grandes áreas em tempo reduzido.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Radar className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Versatilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Aplicável em diversos contextos: engenharia, arqueologia, meio ambiente, agricultura e muito mais.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Georadar?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para atender suas necessidades com tecnologia de ponta e expertise comprovada.
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

