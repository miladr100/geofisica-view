# GeoView - Next.js

Projeto GeoView de React + Next.js 14.

## 🚀 Instalação

```bash
cd next-app
npm install
```

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
│   ├── quem-somos/        # Rota /quem-somos
│   ├── servicos/          # Rota /servicos
│   └── contato/           # Rota /contato
├── components/            # Componentes React
│   ├── ui/               # Componentes UI (shadcn/ui)
│   ├── Header.tsx        # Cabeçalho
│   ├── Footer.tsx        # Rodapé
│   └── WhatsAppButton.tsx# Botão WhatsApp flutuante
├── consts/               # Constantes e dados
├── helpers/              # Funções auxiliares
├── hooks/                # React Hooks customizados
├── lib/                  # Utilitários
└── public/               # Assets estáticos (imagens, vídeos)
```

## 🔄 Vantagens do Next 14 para SEO

1. **Roteamento**: Next.js usa roteamento baseado em arquivos (App Router)
2. **Navegação**: `Link` vem de `next/link` ao invés de `react-router-dom`
3. **Imagens**: Use o componente `Image` do Next.js para otimização automática
4. **Assets**: Coloque arquivos estáticos na pasta `public/`
5. **Client Components**: Componentes com interatividade precisam da diretiva `"use client"`

## ✅ Componentes

- ✅ Configuração base (Next.js, TypeScript, Tailwind)
- ✅ Componentes UI (shadcn/ui)
- ✅ Header com navegação
- ✅ Footer
- ✅ WhatsAppButton
- ✅ Página Home
- ✅ Página Quem Somos
- ✅ Página Serviços
- ✅ Página Contato


## 🛠️ Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- React Hook Form + Zod

## 📞 Contato do Desenvolvedor

- Milad Roghanian: miladr100@gmail.com

