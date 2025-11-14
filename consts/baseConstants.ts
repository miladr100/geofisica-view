import {
  Radar,
  Droplets,
  Mountain,
  Building2,
  Zap,
  Users,
  Award,
  TrendingUp,
  Target,
  Eye,
  Heart,
  Pickaxe,
  Waves,
  Activity,
  Camera,
  LineChart,
  HardHat,
  TreePine,
  ShieldCheck,
  Package,
  Search,
  Boxes,
  Layers,
  Gauge,
  TestTube,
  BookOpen,
  Wrench,
} from "lucide-react";

export const address = "Rua Cardeal Arcoverde, 928 - São Paulo - SP";
export const phone = "11961718358";
export const email = "hsoares@geofisica-view.com";
export const DEFAULT_EMAIL = "site@geofisica-view.abrdns.com";
export const homeServices = [
  {
    icon: Radar,
    title: "Georadar",
    description: "Tecnologia avançada para mapeamento subsuperficial de alta precisão.",
    link: "/servicos/georadar",
  },
  {
    icon: Droplets,
    title: "Hidrogeologia",
    description: "Estudos hidrológicos e perfuração de poços tubulares.",
    link: "/servicos/hidrogeologia",
  },
  {
    icon: Zap,
    title: "Imageamento Elétrico",
    description: "Técnicas de imageamento elétrico para caracterização do subsolo, identificação de aquíferos e estruturas geológicas.",
    link: "/servicos/imageamento-eletrico",
  },
  {
    icon: Camera,
    title: "Perfilagem Ótica",
    description: "Imageamento interno de poços através de câmeras especializadas para inspeção e diagnóstico.",
    link: "/servicos/perfilagem-optica",
  },
  {
    icon: Mountain,
    title: "Sísmica",
    description: "Métodos sísmicos para determinação de profundidade do embasamento rochoso e caracterização de camadas do subsolo.",
    link: "/servicos/sismica-refracao",
  },
  {
    icon: Pickaxe,
    title: "Geofísica para Mineração",
    description: "Métodos geofísicos aplicados à exploração mineral, mapeamento de corpos mineralizados e caracterização de jazidas.",
    link: "/servicos/geofisica-mineracao",
  },
];

export const areas = [
  {
    title: "Projetos de Engenharia com Georadar",
    description: "Soluções avançadas de mapeamento para projetos de infraestrutura e construção civil.",
    icon: Building2,
  },
  {
    title: "Mineração, Meio Ambiente e Hidrogeologia",
    description: "Estudos especializados para exploração mineral e preservação ambiental.",
    icon: Mountain,
  },
  {
    title: "Perfilagem de Poços e Métodos Geofísicos",
    description: "Análise completa de poços e caracterização geofísica detalhada.",
    icon: Droplets,
  },
];

export const metrics = [
  { value: "500+", label: "Projetos Concluídos", icon: Award },
  { value: "10+", label: "Anos de Experiência", icon: TrendingUp },
  { value: "200+", label: "Clientes Satisfeitos", icon: Users },
  { value: "26", label: "Estados Atendidos + DF", icon: TrendingUp },
];

export const clients = [
  { name: "Petrobras", logo: "https://logo.clearbit.com/petrobras.com.br", color: "#00A859" },
  { name: "Vale", logo: "https://logo.clearbit.com/vale.com", color: "#003366" },
  { name: "Cemig", logo: "https://logo.clearbit.com/cemig.com.br", color: "#0066CC" },
  { name: "Copasa", logo: "https://logo.clearbit.com/copasa.com.br", color: "#0088CC" },
  { name: "Usiminas", logo: "https://logo.clearbit.com/usiminas.com", color: "#003D7A" },
  { name: "ArcelorMittal", logo: "https://logo.clearbit.com/arcelormittal.com", color: "#E31E24" },
  { name: "Gerdau", logo: "https://logo.clearbit.com/gerdau.com.br", color: "#F37021" },
  { name: "Samarco", logo: "https://logo.clearbit.com/samarco.com", color: "#0066B3" },
  { name: "Anglo American", logo: "https://logo.clearbit.com/angloamerican.com", color: "#009FDA" },
  { name: "MRN", logo: "https://logo.clearbit.com/mrn.com.br", color: "#1E4B8C" },
  { name: "Votorantim", logo: "https://logo.clearbit.com/votorantim.com.br", color: "#ED7D00" },
  { name: "CSN", logo: "https://logo.clearbit.com/csn.com.br", color: "#003D7A" }
];

export const headerServices = [
  { name: "GPR", path: "/servicos/georadar" },
  { name: "Georadar", path: "/servicos/georadar" },
  { name: "Aluguel de GPR", path: "/servicos/aluguel-gpr" },
  { name: "GPR em arqueologia", path: "/servicos/gpr-arqueologia" },
  { name: "GPR 3D", path: "/servicos/gpr-3d" },
  { name: "Imageamento Elétrico", path: "/servicos/imageamento-eletrico" },
  { name: "Imageamento Elétrico para poço", path: "/servicos/imageamento-eletrico-poco" },
  { name: "Perfilagem Ótica", path: "/servicos/perfilagem-optica" },
  { name: "Perfilagem Geofísica", path: "/servicos/perfilagem-geofisica" },
  { name: "Sísmica", path: "/servicos/sismica-refracao" },
  { name: "Sísmica de Refração e Downhole", path: "/servicos/sismica-downhole" },
  { name: "MASW - Análise de Ondas de Superfície", path: "/servicos/masw" },
  { name: "Estudo geológico", path: "/servicos/estudo-geologico" },
  { name: "Monitoramento de solo", path: "/servicos/monitoramento-solo" },
  { name: "Análise de solo contaminado", path: "/servicos/analise-solo-contaminado" },
  { name: "Estudo Geofísico", path: "/servicos/estudo-geofisico" },
  { name: "Estudo Geotécnico", path: "/servicos/estudo-geotecnico" },
  { name: "Geofísica Ambiental", path: "/servicos/geofisica-ambiental" },
  { name: "Geofísica Forense", path: "/servicos/geofisica-forense" },
  { name: "Geofísica para Mineração", path: "/servicos/geofisica-mineracao" },
  { name: "Aluguel de Equipamento de Geofísica", path: "/servicos/aluguel-equipamento-geofisica" },
  { name: "Engenharia Geofísica", path: "/servicos/engenharia-geofisica" },
];

export const geoViewValues = [
  {
    icon: Target,
    title: "Missão",
    description: "Oferecer serviços de geofísica com transparência, qualidade e responsabilidade social, construindo relações baseadas na integridade e na equidade."
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser referência nacional em soluções geofísicas, reconhecida pela excelência técnica, inovação constante e compromisso com a sustentabilidade."
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Excelência técnica, integridade, inovação, compromisso com o cliente, responsabilidade ambiental e desenvolvimento contínuo da equipe."
  }
];

export const aboutDescriptions = [
  "Com experiência internacional, há mais de 10 anos atuando na área de estudo geofísico, os profissionais da GeoView visam garantir um serviço de:",
  "Qualidade: preocupação e cuidado desde a formulação da proposta técnico-econômica até a entrega do relatório final;",
  "Alta tecnologia: contamos com os melhores equipamentos para pesquisa geofísica presentes no Brasil, quando se trata de pesquisas elétricas, voltadas para hidrogeologia, mineração e meio ambiente;",
  "Transparência: nosso objetivo é que o cliente compreenda todas as vantagens e limitações que a geofísica poderá prover para a sua necessidade;",
  "Economia: como dispomos de equipamentos de alta tecnologia, conseguimos fornecer mais dados em menos tempo, consequentemente conseguindo oferecer serviços de qualidade com custo relativamente reduzido;",
  "Segurança: a GeoView atua sempre em conformidade com a legislação vigente, sempre seguindo as normas técnicas e de segurança;",
  "Honestidade: a integridade de nossos profissionais e nosso compromisso com cada cliente é a nossa filosofia de trabalho!"
];

export const aboutTeam = [
  { name: "Me. Henrique Soares de Sá", role: "Geofísico - Gerente de Projetos", specialty: "Especializado em Geoelétrica" },
  { name: "Dir. Thiago Jartas", role: "Geofísico - Diretor Técnico", specialty: "Especializado em GPR e Perfilagem Geofísica" },
  { name: "Felipe Stefani", role: "Geofísico - Diretor de Processamento", specialty: "Especializado em Sísmica" },
  { name: "Me. Samuel Matsuura", role: "Geólogo - Responsável Técnico", specialty: "Especializado em Hidrogeologia" },
];

export const arrayAddress = [
  "Rua Cardeal Arcoverde, 928",
  "Pinheiros, São Paulo - SP",
  "CEP 05408-001"
];

export const allServices = [
  {
    icon: Radar,
    title: "Georadar",
    description: "Tecnologia de ponta para mapeamento subsuperficial de alta precisão, ideal para localizar estruturas, vazios, tubulações e caracterizar materiais.",
    slug: "georadar",
  },
  {
    icon: Package,
    title: "Aluguel de GPR",
    description: "Aluguel de equipamentos GPR (Ground Penetrating Radar) para investigações geofísicas e mapeamento subsuperficial.",
    slug: "aluguel-gpr",
  },
  {
    icon: Search,
    title: "GPR em Arqueologia",
    description: "Aplicação de georadar em investigações arqueológicas para localização de estruturas e artefatos enterrados sem escavação.",
    slug: "gpr-arqueologia",
  },
  {
    icon: Boxes,
    title: "GPR 3D",
    description: "Imageamento tridimensional utilizando georadar para visualização detalhada de estruturas e objetos no subsolo.",
    slug: "gpr-3d",
  },
  {
    icon: Zap,
    title: "Imageamento Elétrico",
    description: "Técnicas de imageamento elétrico para caracterização do subsolo, identificação de aquíferos e estruturas geológicas.",
    slug: "imageamento-eletrico",
  },
  {
    icon: Droplets,
    title: "Imageamento Elétrico para Poço",
    description: "Imageamento elétrico aplicado em poços para caracterização de aquíferos e análise de recursos hídricos subterrâneos.",
    slug: "imageamento-eletrico-poco",
  },
  {
    icon: Camera,
    title: "Perfilagem Ótica",
    description: "Imageamento interno de poços através de câmeras especializadas para inspeção e diagnóstico.",
    slug: "perfilagem-optica",
  },
  {
    icon: LineChart,
    title: "Perfilagem Geofísica",
    description: "Perfilagem completa de poços utilizando diversos métodos geofísicos para caracterização detalhada.",
    slug: "perfilagem-geofisica",
  },
  {
    icon: Mountain,
    title: "Sísmica",
    description: "Métodos sísmicos para determinação de profundidade do embasamento rochoso e caracterização de camadas do subsolo.",
    slug: "sismica-refracao",
  },
  {
    icon: Waves,
    title: "Sísmica de Refração e Downhole",
    description: "Análise sísmica detalhada em profundidade para caracterização geotécnica e estudos de estabilidade.",
    slug: "sismica-downhole",
  },
  {
    icon: Activity,
    title: "MASW - Análise de Ondas de Superfície",
    description: "Análise Multicanal de Ondas Superficiais para determinação de propriedades dinâmicas do solo e perfil de velocidades.",
    slug: "masw",
  },
  {
    icon: Layers,
    title: "Estudo Geológico",
    description: "Estudos geológicos completos para caracterização de formações rochosas, estruturas geológicas e mapeamento geológico.",
    slug: "estudo-geologico",
  },
  {
    icon: Gauge,
    title: "Monitoramento de Solo",
    description: "Monitoramento contínuo de propriedades do solo, umidade, compactação e características geotécnicas ao longo do tempo.",
    slug: "monitoramento-solo",
  },
  {
    icon: TestTube,
    title: "Análise de Solo Contaminado",
    description: "Investigação e análise de solos contaminados utilizando métodos geofísicos para localização e caracterização de contaminantes.",
    slug: "analise-solo-contaminado",
  },
  {
    icon: BookOpen,
    title: "Estudo Geofísico",
    description: "Estudos geofísicos completos utilizando diversos métodos para caracterização do subsolo e investigações geológicas.",
    slug: "estudo-geofisico",
  },
  {
    icon: HardHat,
    title: "Estudo Geotécnico",
    description: "Estudos geotécnicos para projetos de engenharia, análise de fundações, estabilidade de taludes e caracterização de solos.",
    slug: "estudo-geotecnico",
  },
  {
    icon: TreePine,
    title: "Geofísica Ambiental",
    description: "Estudos geofísicos focados em questões ambientais, preservação e recuperação de áreas.",
    slug: "geofisica-ambiental",
  },
  {
    icon: ShieldCheck,
    title: "Geofísica Forense",
    description: "Aplicação de métodos geofísicos em investigações forenses para localização de evidências e objetos enterrados.",
    slug: "geofisica-forense",
  },
  {
    icon: Pickaxe,
    title: "Geofísica para Mineração",
    description: "Métodos geofísicos aplicados à exploração mineral, mapeamento de corpos mineralizados e caracterização de jazidas.",
    slug: "geofisica-mineracao",
  },
  {
    icon: Package,
    title: "Aluguel de Equipamento de Geofísica",
    description: "Aluguel de equipamentos geofísicos especializados para diversos métodos de investigação do subsolo.",
    slug: "aluguel-equipamento-geofisica",
  },
  {
    icon: Wrench,
    title: "Engenharia Geofísica",
    description: "Serviços de engenharia geofísica para projetos de infraestrutura, caracterização de solos e análises geotécnicas.",
    slug: "engenharia-geofisica",
  },
];