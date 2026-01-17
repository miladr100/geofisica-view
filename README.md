# GeoView - Next.js

Projeto GeoView de React + Next.js 14.

## 🚀 Instalação

```bash
cd next-app
npm install
```

## ⚙️ Configuração de Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```

2. Edite o arquivo `.env.local` e preencha as variáveis necessárias:
```env
# API Keys
RESEND_API_KEY=your_resend_api_key_here

# Google Sheets API (Blog)
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@projeto.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSua chave privada aqui\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_ID=seu-google-sheets-id-aqui
GOOGLE_SHEETS_RANGE=posts!A1:K

# Site URL (para SEO/Open Graph)
NEXT_PUBLIC_SITE_URL=https://geoview.com.br
```

**Para mais detalhes sobre a configuração do Blog, consulte [BLOG_SETUP.md](./BLOG_SETUP.md)**

**Importante**: 
- Variáveis com prefixo `NEXT_PUBLIC_` são expostas ao cliente (browser)
- O arquivo `.env.local` está no `.gitignore` e não será commitado
- Para produção, configure as variáveis no painel de seu provedor de hospedagem

## 🏃 Executar em desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:8080`

## 📦 Build para produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
next-app/
├── app/                    # Rotas e páginas (App Router)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página Home
│   ├── blog/              # Blog (listagem e posts)
│   │   ├── page.tsx       # Listagem do blog
│   │   └── [slug]/        # Post individual
│   ├── quem-somos/        # Rota /quem-somos
│   ├── servicos/          # Rota /servicos
│   └── contato/           # Rota /contato
├── components/            # Componentes React
│   ├── blog/             # Componentes do blog
│   │   ├── BlogPostCard.tsx
│   │   ├── BlogFilters.tsx
│   │   ├── BlogPagination.tsx
│   │   └── BlogEmptyState.tsx
│   ├── ui/               # Componentes UI (shadcn/ui)
│   ├── Header.tsx        # Cabeçalho
│   ├── Footer.tsx        # Rodapé
│   └── WhatsAppButton.tsx# Botão WhatsApp flutuante
├── lib/                  # Utilitários
│   ├── sheets.ts         # Integração com Google Sheets (Blog)
│   └── types/            # Tipos TypeScript
│       └── blog.ts       # Tipos do blog
├── consts/               # Constantes e dados
├── helpers/              # Funções auxiliares
├── hooks/                # React Hooks customizados
└── public/               # Assets estáticos (imagens, vídeos)
```

## 🔄 Vantagens do Next 14 para SEO

1. **Roteamento**: Next.js usa roteamento baseado em arquivos (App Router)
2. **Navegação**: `Link` vem de `next/link` ao invés de `react-router-dom`
3. **Imagens**: Use o componente `Image` do Next.js para otimização automática
4. **Assets**: Coloque arquivos estáticos na pasta `public/`
5. **Client Components**: Componentes com interatividade precisam da diretiva `"use client"`

## ✅ Componentes e Funcionalidades

- ✅ Configuração base (Next.js, TypeScript, Tailwind)
- ✅ Componentes UI (shadcn/ui)
- ✅ Header com navegação
- ✅ Footer
- ✅ WhatsAppButton
- ✅ Página Home
- ✅ Página Quem Somos
- ✅ Página Serviços
- ✅ Página Contato
- ✅ **Blog completo** com Google Sheets como CMS
  - Listagem de posts com paginação (9 por página)
  - Busca por texto (título, resumo, conteúdo)
  - Filtro por tags
  - Página individual de post com SEO completo
  - Open Graph e Twitter Cards
  - Imagens otimizadas com next/image
  - ISR (Incremental Static Regeneration) com revalidação automática a cada 5 minutos
  - Suporte a Markdown com sanitização HTML


## 🛠️ Tecnologias

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- React Hook Form + Zod
- **Blog:**
  - Google Sheets API (CMS)
  - Marked (Markdown parser)
  - sanitize-html (HTML sanitization)

## 📞 Contato do Desenvolvedor

- Milad Roghanian: miladr100@gmail.com

