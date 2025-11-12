import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { ArrowRight, Mountain, CheckCircle2, Waves, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Sísmica de Refração - Investigação Geotécnica e Ambiental | GeoView",
  description: "Serviços especializados em Sísmica de Refração para determinação da profundidade do leito rochoso, mapeamento geológico, análise de estabilidade do solo e estudos geotécnicos. Métodos sísmicos de alta precisão.",
  keywords: [
    "sísmica de refração",
    "métodos sísmicos",
    "investigação geotécnica",
    "mapeamento geológico",
    "profundidade do leito rochoso",
    "ondas sísmicas",
    "estudos geotécnicos",
    "geofísica sísmica",
    "análise de estabilidade do solo",
    "localização de fraturas",
    "qualidade do leito rochoso",
    "prospecção sísmica",
    "ondas P e S",
    "refração crítica",
    "geofísica aplicada",
    "investigação ambiental"
  ],
  openGraph: {
    title: "Sísmica de Refração - Investigação Geotécnica e Ambiental | GeoView",
    description: "Métodos sísmicos avançados para caracterização geológica, determinação de profundidade do embasamento e estudos geotécnicos.",
    type: "website",
  },
  alternates: {
    canonical: "/servicos/sismica-refracao",
  },
};

const aplicacoes = [
  "Mapeamento geológico",
  "Determinação da profundidade do leito de rocha",
  "Qualidade do leito rochoso",
  "Estabilidade do solo e localização de fraturas e zonas frágeis"
];

const tiposMetodos = [
  {
    titulo: "Sísmica de Refração",
    descricao: "Mede-se o tempo de percurso da onda longitudinal P desde que é gerada até sua chegada aos detectores (geofones). O elemento de estudo é o raio incidente que sofre refração total ou crítica ao longo da interface antes de retornar à superfície.",
    icon: Waves
  },
  {
    titulo: "Sísmica de Reflexão",
    descricao: "O elemento de estudo é o raio que incide numa interface de contraste de impedância acústica (função da velocidade e densidade) e reflete de volta para a superfície.",
    icon: Activity
  },
  {
    titulo: "Ondas P e S",
    descricao: "Métodos classificados pelo tipo de energia gerada e registrada. Ondas P (longitudinais) e ondas S (transversais) podem ser utilizadas na superfície ou em furos de sondagem.",
    icon: Mountain
  }
];

const principiosFisicos = [
  {
    titulo: "Propagação das Ondas",
    descricao: "A propagação das ondas sísmicas nos materiais da terra é o objeto de estudo nos métodos sísmicos. A geração das ondas e o entendimento de sua transmissão, absorção e atenuação constituem as bases destes métodos."
  },
  {
    titulo: "Refração e Reflexão",
    descricao: "Nas interfaces das camadas com valores de densidade diferentes, parte da energia é refratada, parte é refletida e parte sofre espalhamento ou difração."
  },
  {
    titulo: "Raios Sísmicos",
    descricao: "Por razões de simplicidade, a frente de onda é tratada como um raio sísmico que se propaga na direção perpendicular à frente de onda."
  },
  {
    titulo: "Refração Crítica",
    descricao: "Para que a refração crítica ocorra e o princípio da sísmica de refração se aplique, é necessário que a velocidade cresça com a profundidade, o que em geral acontece."
  }
];

export default function SismicaRefracaoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Serviços de Geofísica
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Sísmica de Refração - Investigação Geotécnica e Ambiental
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8">
            Métodos sísmicos avançados para caracterização geológica, determinação da profundidade do embasamento rochoso e estudos de estabilidade do solo com tecnologia de ponta.
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
            <h2 className="text-3xl font-bold mb-6">O que são Métodos Sísmicos?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A propagação das ondas sísmicas nos materiais da terra é o objeto de estudo nos métodos sísmicos de prospecção ou investigação. A geração das ondas e o entendimento de sua transmissão, absorção e atenuação constituem as bases destes métodos.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nas interfaces das camadas com valores de densidade diferentes, parte da energia é refratada, parte é refletida e parte sofre espalhamento ou difração. Em geral, por razões de simplicidade, a frente de onda é tratada como um raio sísmico que se propaga na direção perpendicular à frente de onda.
            </p>
            <p className="text-lg text-muted-foreground">
              Os métodos são classificados de acordo com vários critérios, principalmente relacionados ao caminho dos raios sísmicos, sua geometria, tipo de energia utilizada e se os trabalhos são desenvolvidos na superfície ou em furos de sondagem.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Métodos */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Métodos Sísmicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {tiposMetodos.map((metodo, index) => (
                <Card key={index} className="border-none shadow-soft hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <metodo.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{metodo.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{metodo.descricao}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Princípios Físicos */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Princípios Físicos dos Métodos Sísmicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {principiosFisicos.map((principio, index) => (
                <Card key={index} className="border-none shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl">{principio.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{principio.descricao}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sísmica de Refração */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Sísmica de Refração</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              Na sísmica de refração, mais comumente utilizada em estudos de apoio geotécnico e ambiental, mede-se o tempo de percurso da onda longitudinal P desde que ela é gerada até sua chegada aos detectores (geofones).
            </p>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Na reflexão o elemento de estudo é o raio que incide numa interface de contraste de impedância acústica e reflete de volta para a superfície. Já na refração o elemento de estudo é o raio incidente que sofre refração total ou crítica ao longo da interface antes de retornar à superfície.
            </p>

            {/* Galeria de Imagens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/sismica/sismica_de_refracao.png"
                    alt="Sísmica de refração - método geofísico para investigação geotécnica e determinação da profundidade do leito rochoso"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Sísmica de Refração</CardTitle>
                  <CardDescription>
                    Método para determinação da profundidade do embasamento
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/sismica/ondas_sismicas.png"
                    alt="Ondas sísmicas - propagação e comportamento em diferentes materiais geológicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Ondas Sísmicas</CardTitle>
                  <CardDescription>
                    Propagação e comportamento das ondas em materiais geológicos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/sismica/metodo_sismico.png"
                    alt="Método sísmico - técnicas de prospecção e investigação geofísica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Método Sísmico</CardTitle>
                  <CardDescription>
                    Técnicas avançadas de prospecção geofísica
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/sismica/mapeamento_geologico.png"
                    alt="Mapeamento geológico através de métodos sísmicos - caracterização de camadas do subsolo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Mapeamento Geológico</CardTitle>
                  <CardDescription>
                    Caracterização detalhada das camadas do subsolo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-soft overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src="/sismica/estudo_geotecnico_sismico.png"
                    alt="Estudo geotécnico sísmico - análise de estabilidade do solo e qualidade do leito rochoso"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Estudo Geotécnico Sísmico</CardTitle>
                  <CardDescription>
                    Análise de estabilidade e qualidade do solo
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
            <h2 className="text-3xl font-bold mb-8 text-center">Aplicações da Sísmica de Refração</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aplicacoes.map((aplicacao, index) => (
                <Card key={index} className="border-none shadow-soft">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <CardTitle className="text-lg">{aplicacao}</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens dos Métodos Sísmicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Mountain className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Precisão na Profundidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Determinação precisa da profundidade do leito rochoso e caracterização das camadas geológicas do subsolo.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Mountain className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Análise de Estabilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Identificação de fraturas, zonas frágeis e avaliação da estabilidade do solo para projetos de engenharia.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Mountain className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Mapeamento Geológico</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Caracterização detalhada da estrutura geológica e qualidade do leito rochoso para diversos projetos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardHeader>
                  <Mountain className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Versatilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Aplicável em estudos geotécnicos, ambientais, projetos de engenharia e investigações geológicas diversas.
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
          <h2 className="mb-6 text-white text-3xl font-bold">Precisa de Serviços de Sísmica de Refração?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para atender suas necessidades com métodos sísmicos de alta precisão e expertise comprovada em investigações geotécnicas e ambientais.
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

