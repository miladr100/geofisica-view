import {
    Radar,
    Droplets,
    Mountain,
    Building2,
    Leaf,
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
    Wheat,
    HardHat,
    TreePine,
    Wind,
    FileText,
    ScrollText,
    ShieldCheck,
    ClipboardList,
} from "lucide-react";

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
        icon: Mountain,
        title: "Sísmica de Refração",
        description: "Análise detalhada das camadas geológicas do subsolo.",
        link: "/servicos/sismica-refracao",
    },
    {
        icon: Building2,
        title: "Projetos de Engenharia",
        description: "Soluções geofísicas para obras de engenharia civil.",
        link: "/servicos/geofisica-engenharia",
    },
    {
        icon: Leaf,
        title: "Meio Ambiente",
        description: "Avaliação de passivos ambientais e estudos ecológicos.",
        link: "/servicos/geofisica-meio-ambiente",
    },
    {
        icon: Zap,
        title: "Energia Renovável",
        description: "Estudos para campos eólicos e solares.",
        link: "/servicos/geofisica-energia",
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
    { name: "Georadar", path: "/servicos/georadar" },
    { name: "Hidrogeologia", path: "/servicos/hidrogeologia" },
    { name: "Sísmica de Refração", path: "/servicos/sismica-refracao" },
    { name: "Geofísica para Mineração", path: "/servicos/geofisica-mineracao" },
    { name: "Geofísica para Meio Ambiente", path: "/servicos/geofisica-meio-ambiente" },
    { name: "Geofísica para Projetos de Engenharia", path: "/servicos/geofisica-engenharia" },
    { name: "Sísmica de Refração e Downhole", path: "/servicos/sismica-downhole" },
    { name: "MASW", path: "/servicos/masw" },
    { name: "Perfilagem Óptica", path: "/servicos/perfilagem-optica" },
    { name: "Perfilagem Geofísica", path: "/servicos/perfilagem-geofisica" },
    { name: "Agricultura de Precisão", path: "/servicos/agricultura-precisao" },
    { name: "Medição da Resistividade", path: "/servicos/medicao-resistividade" },
    { name: "Geofísica para Engenharia Civil", path: "/servicos/geofisica-civil" },
    { name: "Geofísica Ambiental", path: "/servicos/geofisica-ambiental" },
    { name: "Geofísica para Campos Eólicos e Solares", path: "/servicos/geofisica-energia" },
    { name: "Estudo Hidrológico", path: "/servicos/estudo-hidrologico" },
    { name: "Projeto Construtivo para Poço Tubular", path: "/servicos/projeto-poco" },
    { name: "Autorização para Perfuração de Poço e Outorga", path: "/servicos/autorizacao-poco" },
    { name: "Avaliação Preliminar de Passivo Ambiental", path: "/servicos/avaliacao-passivo" },
];

export const address = "Rua Cardeal Arcoverde, 928 - São Paulo - SP";
export const phone = "11961718358";
export const email = "hsoares@geofisica-view.com";

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
      icon: Droplets,
      title: "Hidrogeologia",
      description: "Estudos hidrológicos completos, análise de aquíferos, avaliação de recursos hídricos subterrâneos e soluções para abastecimento de água.",
      slug: "hidrogeologia",
    },
    {
      icon: Mountain,
      title: "Sísmica de Refração",
      description: "Método geofísico para determinação de profundidade do embasamento rochoso e caracterização de camadas do subsolo.",
      slug: "sismica-refracao",
    },
    {
      icon: Pickaxe,
      title: "Geofísica para Mineração",
      description: "Métodos geofísicos aplicados à exploração mineral, mapeamento de corpos mineralizados e caracterização de jazidas.",
      slug: "geofisica-mineracao",
    },
    {
      icon: Leaf,
      title: "Geofísica para Meio Ambiente",
      description: "Investigações ambientais, detecção de contaminações, mapeamento de áreas degradadas e estudos de impacto ambiental.",
      slug: "geofisica-meio-ambiente",
    },
    {
      icon: Building2,
      title: "Geofísica para Projetos de Engenharia",
      description: "Estudos geofísicos para fundações, obras lineares, túneis, barragens e grandes projetos de infraestrutura.",
      slug: "geofisica-engenharia",
    },
    {
      icon: Waves,
      title: "Sísmica de Refração e Downhole",
      description: "Análise sísmica detalhada em profundidade para caracterização geotécnica e estudos de estabilidade.",
      slug: "sismica-downhole",
    },
    {
      icon: Activity,
      title: "MASW",
      description: "Análise Multicanal de Ondas Superficiais para determinação de propriedades dinâmicas do solo e perfil de velocidades.",
      slug: "masw",
    },
    {
      icon: Camera,
      title: "Perfilagem Óptica",
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
      icon: Wheat,
      title: "Agricultura de Precisão",
      description: "Mapeamento geofísico para agricultura, análise de solo, umidade e otimização de produtividade agrícola.",
      slug: "agricultura-precisao",
    },
    {
      icon: Zap,
      title: "Medição da Resistividade",
      description: "Medições de resistividade elétrica do solo para diversos fins, incluindo sistemas de aterramento.",
      slug: "medicao-resistividade",
    },
    {
      icon: HardHat,
      title: "Geofísica para Engenharia Civil",
      description: "Investigações geofísicas específicas para projetos de engenharia civil, rodovias, ferrovias e urbanização.",
      slug: "geofisica-civil",
    },
    {
      icon: TreePine,
      title: "Geofísica Ambiental",
      description: "Estudos geofísicos focados em questões ambientais, preservação e recuperação de áreas.",
      slug: "geofisica-ambiental",
    },
    {
      icon: Wind,
      title: "Geofísica para Campos Eólicos e Solares",
      description: "Estudos geofísicos para implantação de parques de energia renovável, análise de fundações e viabilidade.",
      slug: "geofisica-energia",
    },
    {
      icon: FileText,
      title: "Estudo Hidrológico",
      description: "Estudos completos de recursos hídricos, balanço hídrico, análise de bacias e disponibilidade de água.",
      slug: "estudo-hidrologico",
    },
    {
      icon: ScrollText,
      title: "Projeto Construtivo para Poço Tubular",
      description: "Elaboração de projetos técnicos completos para perfuração de poços tubulares profundos.",
      slug: "projeto-poco",
    },
    {
      icon: ShieldCheck,
      title: "Autorização para Perfuração de Poço e Outorga",
      description: "Assessoria completa para obtenção de autorizações e outorgas para uso de recursos hídricos.",
      slug: "autorizacao-poco",
    },
    {
      icon: ClipboardList,
      title: "Avaliação Preliminar de Passivo Ambiental",
      description: "Diagnóstico e avaliação de passivos ambientais, identificação de áreas contaminadas e estudos de remediação.",
      slug: "avaliacao-passivo",
    },
  ];