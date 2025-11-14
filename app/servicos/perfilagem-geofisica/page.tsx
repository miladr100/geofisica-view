import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, LineChart, CheckCircle2, Camera, Eye, ShieldCheck, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Perfilagem Geofísica - Perfilagem Ótica e Diagnóstica de Poços | GeoView",
  description: "Serviços especializados em Perfilagem Geofísica e Perfilagem Ótica de poços artesianos. Filmagem HD em 360º, diagnóstico de problemas, identificação de contaminações e manutenção preventiva com tecnologia avançada.",
  keywords: [
    "perfilagem geofísica",
    "perfilagem ótica",
    "perfilagem de poços",
    "filmagem de poços",
    "diagnóstico de poços",
    "perfilagem preventiva",
    "perfilagem diagnóstica",
    "inspeção de poços artesianos",
    "câmera para poços",
    "análise de poços",
    "manutenção de poços",
    "contaminação em poços",
    "filmagem HD poços",
    "perfilagem geofísica de poços",
    "investigação de poços"
  ],
  openGraph: {
    title: "Perfilagem Geofísica - Perfilagem Ótica e Diagnóstica de Poços | GeoView",
    description: "Tecnologia avançada de perfilagem geofísica e ótica para diagnóstico e manutenção de poços artesianos.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/perfilagem-geofisica",
  },
};

const tiposPerfilagem = [
  {
    icon: ShieldCheck,
    title: "Perfilagem Preventiva",
    description: "Identificação de possíveis manutenções necessárias ao poço antes que problemas se agravem, garantindo maior durabilidade e eficiência."
  },
  {
    icon: Search,
    title: "Perfilagem Diagnóstica",
    description: "Encontrar a razão por trás de problemas no funcionamento do poço, como contaminação, mal funcionamento da bomba, obstruções e colmatação."
  }
];

const problemasIdentificados = [
  "Fonte de contaminação (localização, profundidade e espessura da falha)",
  "Mal funcionamento da bomba",
  "Obstrução ao longo do poço",
  "Colmatação do poço",
  "Danos estruturais",
  "Problemas de vedação",
  "Desgaste de componentes"
];

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

export default function PerfilagemGeofisicaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Perfilagem de Poços
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Perfilagem Geofísica - Perfilagem Ótica e Diagnóstica de Poços
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Serviços especializados em Perfilagem Geofísica e Perfilagem Ótica de poços artesianos. Filmagem HD em 360º, diagnóstico de problemas, identificação de contaminações e manutenção preventiva com tecnologia de última geração.
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
            <h2 className="text-3xl font-bold mb-6">O que é Perfilagem Geofísica?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A GeoView presta serviços de perfilagem ótica através de uma filmadora de 800 metros de cabo, sendo duas câmeras HD, de alta fidelidade e sensor CCD de alta qualidade, com visada em 360º para ambas as direções.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Trata-se de um equipamento para filmagem de poços artesianos, possibilitando mostrar e gravar em HD, em tempo real, tudo que esteja ocorrendo no interior do poço; tanto nas laterais, quanto no fundo. Pode também ser utilizado para outros propósitos de filmagem de profundidade, desde que respeitados os limites de profundidade e temperatura.
            </p>
            <p className="text-lg text-muted-foreground">
              A perfilagem ótica é realizada através da inserção de uma câmera lateral e frontal no poço tubular. Através disto pode-se realizar a perfilagem preventiva e diagnóstica.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Perfilagem */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Perfilagem</h2>
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

      {/* Perfilagem Preventiva */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Perfilagem Preventiva</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              A perfilagem preventiva tem a finalidade de identificar possíveis manutenções necessárias ao poço antes que problemas se agravem, garantindo maior durabilidade, eficiência e prevenção de custos elevados com reparos emergenciais.
            </p>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Benefícios da Perfilagem Preventiva</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Realizar perfilagem preventiva regular permite identificar pequenos problemas antes que se tornem grandes, reduzindo custos de manutenção, aumentando a vida útil do poço e garantindo qualidade constante da água captada.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfilagem Diagnóstica */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Perfilagem Diagnóstica</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              A perfilagem diagnóstica visa encontrar a razão por trás de algum problema no mal funcionamento do poço. Através da análise visual em HD, é possível identificar diversos problemas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problemasIdentificados.map((problema, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{problema}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipamento */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Equipamento de Última Geração</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {caracteristicasEquipamento.map((caracteristica, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{caracteristica}</p>
                </div>
              ))}
            </div>
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Tecnologia Avançada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  O equipamento inclui carrinho de transporte com duas rodas de borracha dura, guincho de 1,5 metros retratável com ajuste e contador de metro em alta precisão, garantindo operação precisa e eficiente. A gravação é realizada em SSD de 240 GB, permitindo armazenamento de grandes volumes de dados em alta qualidade.
                </CardDescription>
              </CardContent>
            </Card>
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
                    src="/perfilagem-geofisica/Perfilagem ótica.png"
                    alt="Perfilagem ótica de poços artesianos - filmagem HD em 360 graus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Perfilagem Ótica</CardTitle>
                  <CardDescription>
                    Filmagem HD em 360º para análise completa do interior do poço
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/perfilagem-geofisica/Perfilagem ótica_01.png"
                    alt="Equipamento de perfilagem ótica - câmeras HD para inspeção de poços"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Equipamento Profissional</CardTitle>
                  <CardDescription>
                    Câmeras HD de alta fidelidade com sensor CCD de alta qualidade
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/perfilagem-geofisica/Perfilagem ótica_02.png"
                    alt="Diagnóstico de poços através de perfilagem ótica - identificação de problemas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Diagnóstico Preciso</CardTitle>
                  <CardDescription>
                    Identificação precisa de problemas e contaminações no poço
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
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações da Perfilagem Geofísica</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Camera className="h-6 w-6 text-primary" />
                    <CardTitle>Filmagem em Tempo Real</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Visualização e gravação em HD, em tempo real, de tudo que ocorre no interior do poço, tanto nas laterais quanto no fundo, permitindo análise detalhada e imediata.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <CardTitle>Inspeção Completa</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Visada em 360º para ambas as direções permite inspeção completa do poço, identificando problemas em qualquer ponto da estrutura tubular.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Search className="h-6 w-6 text-primary" />
                    <CardTitle>Identificação de Contaminações</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação precisa da fonte de contaminação, incluindo localização exata, profundidade e espessura da falha por onde entra a contaminação, facilitando ações corretivas direcionadas.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens da Perfilagem Geofísica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Diagnóstico Preciso</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação exata de problemas através de visualização direta em alta definição, eliminando suposições e permitindo ações corretivas precisas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Redução de Custos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação precoce de problemas através de perfilagem preventiva reduz custos de manutenção e evita reparos emergenciais mais caros.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Documentação Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Gravação em HD permite documentação completa do estado do poço, útil para análises futuras, relatórios técnicos e histórico de manutenções.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle>Versatilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Equipamento pode ser utilizado para outros propósitos de filmagem de profundidade, desde que respeitados os limites de profundidade e temperatura.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Perfilagem Geofísica?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para realizar perfilagem preventiva ou diagnóstica em seus poços artesianos, utilizando tecnologia de última geração e expertise comprovada.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
              <Link href="/contato">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/servicos/perfilagem-optica">
                Saiba Mais sobre Perfilagem Ótica
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

