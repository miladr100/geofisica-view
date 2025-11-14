import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Zap, CheckCircle2, Droplets, ShieldCheck, Target, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Imageamento Elétrico para Poço - Localização de Aquíferos e Poços Artesianos | GeoView",
  description: "Serviços especializados em Imageamento Elétrico para localização de poços tubulares e artesianos. Identificação de aquíferos, redução de riscos na perfuração e otimização de recursos hídricos com eletrorresistividade.",
  keywords: [
    "imageamento elétrico para poço",
    "localização de poços artesianos",
    "eletrorresistividade para poços",
    "localização de aquíferos",
    "geofísica para poços",
    "sondagem elétrica vertical",
    "SEV para poços",
    "perfuração de poços",
    "poços tubulares",
    "poços artesianos",
    "captação de águas subterrâneas",
    "investigação geofísica poços",
    "redução de riscos perfuração",
    "mapeamento de aquíferos",
    "geofísica hídrica"
  ],
  openGraph: {
    title: "Imageamento Elétrico para Poço - Localização de Aquíferos | GeoView",
    description: "Tecnologia avançada de imageamento elétrico para localização precisa de poços artesianos e aquíferos.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/imageamento-eletrico-poco",
  },
};

const vantagens = [
  {
    icon: Target,
    title: "Localização de Camadas Geológicas Favoráveis",
    description: "Permite identificar estruturas geológicas propícias para a captação de águas subterrâneas, melhorando a eficiência na perfuração de poços."
  },
  {
    icon: Layers,
    title: "Informações Detalhadas sobre o Subsolo",
    description: "Fornece dados essenciais, incluindo a profundidade do topo rochoso, resistividade das rochas e o grau de fraturamento, contribuindo para o planejamento preciso das perfurações."
  },
  {
    icon: ShieldCheck,
    title: "Redução de Riscos e Custos",
    description: "Minimiza os riscos e custos associados à perfuração em áreas secas, ao proporcionar uma visão prévia das condições do subsolo."
  },
  {
    icon: Droplets,
    title: "Determinação de Extensão e Profundidade de Aquíferos",
    description: "Permite uma avaliação detalhada da extensão e profundidade dos aquíferos, facilitando a gestão sustentável dos recursos hídricos."
  },
  {
    icon: Zap,
    title: "Monitoramento de Ingresso de Águas Marinhas",
    description: "Em áreas costeiras, possibilita o acompanhamento do eventual ingresso de águas marinhas nas águas subterrâneas, prevenindo impactos indesejados."
  },
  {
    icon: ShieldCheck,
    title: "Detecção de Contaminações em Aquíferos",
    description: "Identifica possíveis zonas de contaminação em aquíferos, contribuindo para a preservação da qualidade da água subterrânea."
  }
];

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

export default function ImageamentoEletricoPocoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Geofísica para Poços
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Imageamento Elétrico para Poço - Localização de Aquíferos
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços especializados em Imageamento Elétrico para localização precisa de poços tubulares e artesianos. Identificação de aquíferos, redução de riscos na perfuração e otimização de recursos hídricos.
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
            <h2 className="text-3xl font-bold mb-6">Imageamento Elétrico para Localização de Poços</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A aplicação da eletrorresistividade na geofísica é uma ferramenta eficaz para a identificação de locais ideais para a locação de poços tubulares/artesianos. O estudo geofísico prévio oferece diversas vantagens significativas para o sucesso de projetos de captação de água subterrânea.
            </p>
            <p className="text-lg text-muted-foreground">
              A eletrorresistividade, fundamentada na Lei de Ohm, relaciona a corrente elétrica (I) e a voltagem (V) em um condutor por V = R.I, onde R é a resistência elétrica em Ohms. Nesse método, uma corrente contínua é inserida na terra por dois eletrodos conectados a uma fonte, enquanto a diferença de potencial no solo é medida por eletrodos ligados a um voltímetro.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do Imageamento Elétrico para Poços</h2>
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

      {/* Métodos e Técnicas */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Métodos e Técnicas de Eletrorresistividade</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Nomenclaturas do Método</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nomenclaturas.map((nomenclatura, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{nomenclatura}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Técnicas Disponíveis</h3>
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
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Imageamento Elétrico para Poços em Ação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico-poco/IE_poço.webp"
                    alt="Imageamento elétrico para localização de poços artesianos - investigação geofísica de aquíferos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Localização de Poços Artesianos</CardTitle>
                  <CardDescription>
                    Investigação geofísica para identificação de locais ideais para perfuração de poços
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico-poco/IE_poço_2.webp"
                    alt="Mapeamento de aquíferos através de imageamento elétrico - determinação de extensão e profundidade"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Mapeamento de Aquíferos</CardTitle>
                  <CardDescription>
                    Determinação precisa da extensão e profundidade de aquíferos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico-poco/IE_poço_3.webp"
                    alt="Equipamento de imageamento elétrico para poços - resistivímetro profissional"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento Profissional</CardTitle>
                  <CardDescription>
                    Tecnologia avançada para investigação geofísica de aquíferos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico-poco/eletrorresistividade.webp"
                    alt="Eletrorresistividade para localização de poços - método geofísico eficaz"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Eletrorresistividade</CardTitle>
                  <CardDescription>
                    Método eficaz para investigação da subsuperfície e localização de aquíferos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico-poco/eletrorresistividade 3d.webp"
                    alt="Eletrorresistividade 3D para poços - visualização tridimensional de aquíferos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Eletrorresistividade 3D</CardTitle>
                  <CardDescription>
                    Visualização tridimensional completa de estruturas aquíferas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/imageamento-eletrico-poco/perfil eletrorresistividade.webp"
                    alt="Perfis geoelétricos para localização de poços - análise detalhada do subsolo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Perfis Geoelétricos</CardTitle>
                  <CardDescription>
                    Análise detalhada do subsolo para planejamento de perfurações
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
                    Para a realização dos perfis geoelétricos, será utilizado um resistivímetro de fabricação italiana, equipado com 48 canais, garantindo alta precisão e eficiência nas medições.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Sistema Completo de Eletrodos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    O processo contará com o suporte de 48 eletrodos de alumínio para as medidas de potencial (MN). Além disso, serão empregados 4 cabos elétricos multipolares para o sinal elétrico, cada um contendo 24 polos e apresentando um passo de 10 metros, essenciais para atingir o comprimento máximo necessário do perfil unitário de 470 metros.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Precisão e Eficiência</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Este conjunto de equipamentos proporciona as condições ideais para a realização eficiente e precisa dos perfis geoelétricos, contribuindo para uma análise detalhada das características do subsolo e localização otimizada de poços.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Princípios Físicos */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Princípios da Eletrorresistividade</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              A distribuição da resistividade elétrica abaixo da superfície é obtida a partir das leituras de potencial e corrente. Em rochas cristalinas, a resistividade pode variar devido a fatores como grau de saturação, mineralogia e compactação.
            </p>
            <p className="text-lg text-muted-foreground text-center">
              Por exemplo, um granito altamente compactado pode ter maior resistividade do que um granito poroso e saturado em água. Esta variação permite identificar zonas favoráveis para a captação de água subterrânea através da análise das propriedades elétricas do subsolo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que Realizar Imageamento Elétrico Antes da Perfuração?</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Redução de Riscos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    O estudo geofísico prévio minimiza significativamente os riscos de perfuração em locais inadequados, evitando poços secos e reduzindo custos operacionais.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Otimização de Recursos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação precisa dos melhores locais para perfuração resulta em poços com maior vazão e melhor qualidade de água, otimizando o investimento realizado.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Planejamento Estratégico</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Informações detalhadas sobre profundidade do topo rochoso, resistividade das rochas e grau de fraturamento permitem planejamento estratégico das perfurações.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Imageamento Elétrico para Poços?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para localizar os melhores pontos para perfuração de poços artesianos, reduzindo riscos e otimizando seus recursos hídricos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
              <Link href="/contato">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/servicos/imageamento-eletrico">
                Saiba Mais sobre Imageamento Elétrico
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

