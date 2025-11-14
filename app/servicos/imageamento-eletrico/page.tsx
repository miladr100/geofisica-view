import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Zap, CheckCircle2, Layers, Activity, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Imageamento Elétrico - Eletrorresistividade e Tomografia Elétrica | GeoView",
  description: "Serviços especializados em Imageamento Elétrico Multi-eletrodo 2D e 3D, Tomografia Elétrica e Eletrorresistividade. Localização de poços, aquíferos, contaminações e estruturas geológicas com tecnologia avançada.",
  keywords: [
    "imageamento elétrico",
    "eletrorresistividade",
    "tomografia elétrica",
    "imageamento elétrico 2D",
    "imageamento elétrico 3D",
    "sondagem elétrica vertical",
    "SEV",
    "dipolo dipolo",
    "wenner",
    "polarização induzida",
    "IP",
    "localização de poços",
    "aquíferos",
    "geofísica elétrica",
    "resistividade elétrica",
    "investigação geofísica",
    "mapeamento de aquíferos",
    "detecção de contaminação"
  ],
  openGraph: {
    title: "Imageamento Elétrico - Eletrorresistividade e Tomografia Elétrica | GeoView",
    description: "Tecnologia avançada de imageamento elétrico para investigação geofísica, localização de aquíferos e análise do subsolo.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/imageamento-eletrico",
  },
};

const nomenclaturas = [
  "Imageamento elétrico multi-eletrodo 2D",
  "Imageamento elétrico multi-eletrodo 3D",
  "Tomografia elétrica",
  "Eletrorresistividade"
];

const tecnicas = [
  "SEV (Sondagem Elétrica Vertical)",
  "Dipolo Dipolo",
  "Wenner",
  "Polo Dipolo",
  "IP (Polarização Induzida)",
  "Mapeamento de Resistividade",
  "Potencial Espontâneo"
];

const aplicacoes = [
  "Identificar os melhores locais para locação de poços tubulares/artesianos",
  "Localizar camadas e estruturas geológicas favoráveis para captação de águas subterrâneas",
  "Obter informações como profundidade do topo rochoso, resistividade das rochas e grau de fraturamento",
  "Diminuição de riscos e custos na perfuração de poços em lugares secos",
  "Determinar a extensão e profundidade de aquíferos",
  "Monitorar o eventual ingresso de águas marinhas nas águas subterrâneas (áreas costeiras)",
  "Detectar possíveis zonas de contaminações em aquíferos",
  "Delimitar depósitos de resíduos",
  "Delimitar plumas de contaminação e definir a provável localização da sua fonte",
  "Localizar vazios estruturais em subsuperfície e feições cársticas",
  "Contribuir para a análise de possíveis desmoronamentos em zonas de taludes",
  "Análise de cunhas salinas ao longo de zonas litorâneas",
  "Pesquisas arqueológicas"
];

const vantagens = [
  {
    icon: Zap,
    title: "Método Não Invasivo",
    description: "Métodos geofísicos não invasivos geram mínimo dano em superfície durante a pesquisa e fornecem informações mais abrangentes que métodos diretos."
  },
  {
    icon: Layers,
    title: "Imageamento 2D e 3D",
    description: "Tecnologia avançada permite imageamento em duas e três dimensões, proporcionando visualização completa das estruturas geológicas."
  },
  {
    icon: Droplets,
    title: "Localização de Aquíferos",
    description: "Identificação precisa de aquíferos, determinação de extensão, profundidade e características das camadas aquíferas."
  },
  {
    icon: Activity,
    title: "Detecção de Contaminação",
    description: "Detecção e delimitação de zonas de contaminação, plumas de contaminação e monitoramento ambiental."
  }
];

export default function ImageamentoEletricoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Geofísica Elétrica
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Imageamento Elétrico - Eletrorresistividade e Tomografia Elétrica
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços especializados em Imageamento Elétrico Multi-eletrodo 2D e 3D, Tomografia Elétrica e Eletrorresistividade para investigação geofísica, localização de aquíferos e análise do subsolo.
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
            <h2 className="text-3xl font-bold mb-6">O que é Imageamento Elétrico?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A geofísica com o método da eletrorresistividade é eficaz para investigação da subsuperfície. Existem várias nomenclaturas de pesquisa de eletrorresistividade, incluindo Imageamento Elétrico Multi-eletrodo 2D e 3D, Tomografia Elétrica e Eletrorresistividade.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              A eletrorresistividade, fundamentada na Lei de Ohm, relaciona a corrente elétrica (I) e a voltagem (V) em um condutor por V = R.I, onde R é a resistência elétrica em Ohms. Nesse método, uma corrente contínua é inserida na terra por dois eletrodos conectados a uma fonte, enquanto a diferença de potencial no solo é medida por eletrodos ligados a um voltímetro.
            </p>
            <p className="text-lg text-muted-foreground">
              A distribuição da resistividade elétrica abaixo da superfície é obtida a partir das leituras de potencial e corrente. Em rochas cristalinas, a resistividade pode variar devido a fatores como grau de saturação, mineralogia e compactação.
            </p>
          </div>
        </div>
      </section>

      {/* Nomenclaturas */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nomenclaturas do Método</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nomenclaturas.map((nomenclatura, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{nomenclatura}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Técnicas de Eletrorresistividade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tecnicas.map((tecnica, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{tecnica}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <p className="text-muted-foreground text-center">
                Além disso, prestamos o serviço de <strong>eletromagnetismo indutivo</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações do Imageamento Elétrico</h2>
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

      {/* Vantagens */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do Imageamento Elétrico</h2>
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

      {/* Galeria de Imagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tecnologia e Equipamentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico/eletrorresistividade.webp"
                    alt="Imageamento elétrico - eletrorresistividade para investigação geofísica do subsolo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Eletrorresistividade</CardTitle>
                  <CardDescription>
                    Método eficaz para investigação da subsuperfície através de medições de resistividade elétrica
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico/eletrorresistividade 3d.webp"
                    alt="Imageamento elétrico 3D - visualização tridimensional de estruturas geológicas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Imageamento Elétrico 3D</CardTitle>
                  <CardDescription>
                    Visualização tridimensional completa de estruturas geológicas e aquíferos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico/IE_poço_2.webp"
                    alt="Imageamento elétrico para poço - localização de aquíferos e estruturas geológicas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Imageamento para Poços</CardTitle>
                  <CardDescription>
                    Localização precisa de aquíferos e estruturas favoráveis para perfuração de poços
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico/ip 3d.webp"
                    alt="Polarização induzida IP 3D - método avançado de imageamento elétrico"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Polarização Induzida (IP) 3D</CardTitle>
                  <CardDescription>
                    Método avançado de polarização induzida para imageamento tridimensional
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Equipamentos Utilizados</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Resistivímetro de 48 Canais</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Utilizamos resistivímetro de produção italiana, de 48 canais, garantindo alta precisão e eficiência nas medições.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Sistema de Eletrodos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Sistema completo com 48 eletrodos de alumínio para medidas de potencial (MN) e 4 cabos elétricos multipolares, cada um de 24 polos, passo 10 m, permitindo comprimento máximo do perfil unitário de 470 m.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Método Não Invasivo */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Método Não Invasivo</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Métodos geofísicos são não invasivos, portanto além de gerar o mínimo dano em superfície durante a pesquisa, também podem dar informações muito mais abrangentes do que métodos diretos, como poços de monitoramento.
            </p>
            <p className="text-lg text-muted-foreground text-center">
              O imageamento elétrico permite investigação completa do subsolo sem necessidade de escavação ou perfuração prévia, reduzindo custos e riscos em projetos de localização de aquíferos e análise geológica.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Imageamento Elétrico?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para atender seus projetos com tecnologia avançada de imageamento elétrico e expertise comprovada em investigações geofísicas.
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

