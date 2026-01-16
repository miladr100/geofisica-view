# Configuração do Blog

Este documento explica como configurar o blog do GeoView que utiliza Google Sheets como CMS.

## 📋 Pré-requisitos

1. Conta Google com acesso ao Google Sheets
2. Projeto no Google Cloud Platform
3. Service Account criada no GCP

## 🔧 Configuração do Google Sheets API

### 1. Criar Service Account no Google Cloud Platform

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Vá em **IAM & Admin** > **Service Accounts**
4. Clique em **Create Service Account**
5. Preencha os dados e crie a conta
6. Na lista de Service Accounts, clique na conta criada
7. Vá na aba **Keys** e clique em **Add Key** > **Create new key**
8. Escolha **JSON** e baixe o arquivo
9. Abra o arquivo JSON e copie:
   - `client_email` → será `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → será `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`

### 2. Criar e Configurar a Planilha

1. Crie uma nova planilha no Google Sheets
2. Crie uma aba chamada `posts`
3. Configure as colunas na primeira linha (cabeçalho):

| id | title | slug | excerpt | content_md | cover_image_url | author | tags | published_at | status |
|----|-------|------|---------|------------|----------------|--------|-----|--------------|--------|

**Explicação das colunas:**
- `id`: Identificador único do post (string)
- `title`: Título do post (string)
- `slug`: URL amigável (string, opcional - será gerado automaticamente se vazio)
- `excerpt`: Resumo/descrição curta (string)
- `content_md`: Conteúdo em Markdown (string)
- `cover_image_url`: URL da imagem de capa (string)
- `author`: Nome do autor (string)
- `tags`: Tags separadas por vírgula, ex: "Next.js, React, SEO" (string)
- `published_at`: Data de publicação no formato ISO (YYYY-MM-DD ou ISO string)
- `status`: Status do post - "draft" ou "published" (string)

### 3. Compartilhar Planilha com Service Account

1. Na planilha, clique em **Compartilhar**
2. Cole o email da Service Account (o `client_email` do JSON)
3. Dê permissão de **Visualizador**
4. Copie o ID da planilha da URL:
   ```
   https://docs.google.com/spreadsheets/d/SEU_SHEET_ID_AQUI/edit
   ```
   O `SEU_SHEET_ID_AQUI` será o valor de `GOOGLE_SHEETS_ID`

### 4. Configurar Variáveis de Ambiente

Adicione as seguintes variáveis no arquivo `.env.local`:

```env
# Google Sheets API (Blog)
GOOGLE_SERVICE_ACCOUNT_EMAIL=seu-service-account@projeto.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSua chave privada aqui\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_ID=seu-google-sheets-id-aqui
GOOGLE_SHEETS_RANGE=posts!A1:K

# Site URL (para SEO/Open Graph)
NEXT_PUBLIC_SITE_URL=https://geoview.com.br
```

**Importante:**
- A `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` deve estar entre aspas e com `\n` para quebras de linha
- O `GOOGLE_SHEETS_RANGE` define qual aba e intervalo ler (padrão: `posts!A1:K`)

## 🔄 Revalidação de Cache

O blog usa ISR (Incremental Static Regeneration) com revalidação automática a cada 300 segundos (5 minutos).

Isso significa que:
- As páginas são geradas estaticamente para melhor performance
- A cada 5 minutos, o Next.js automaticamente busca novos dados do Google Sheets
- Durante a revalidação, os usuários continuam vendo a versão em cache
- Após a revalidação, a nova versão substitui a antiga automaticamente

**Nota:** Se você atualizar a planilha, as mudanças aparecerão automaticamente em até 5 minutos.

## 📝 Exemplo de Post na Planilha

| id | title | slug | excerpt | content_md | cover_image_url | author | tags | published_at | status |
|----|-------|------|---------|------------|----------------|--------|-----|--------------|--------|
| 1 | Introdução à Geofísica | introducao-geofisica | Um guia completo sobre geofísica | # Introdução\n\nEste é o conteúdo... | https://exemplo.com/imagem.jpg | João Silva | Geofísica, Ciência | 2024-01-15 | published |

## 🎨 Markdown Suportado

O blog suporta Markdown completo, incluindo:
- Títulos (# ## ###)
- Texto em negrito e itálico
- Listas ordenadas e não ordenadas
- Links
- Imagens
- Código inline e blocos de código
- Citações
- Tabelas

O HTML gerado é sanitizado automaticamente para segurança.

## 🚀 Funcionalidades

- ✅ Listagem de posts com paginação (9 por página)
- ✅ Busca por texto (título, resumo, conteúdo)
- ✅ Filtro por tags
- ✅ Página individual de post com SEO completo
- ✅ Open Graph e Twitter Cards
- ✅ Imagens otimizadas com next/image
- ✅ Cache/ISR configurável
- ✅ Estado vazio quando não há posts
- ✅ Responsivo e acessível

## 📍 Rotas

- `/blog` - Listagem de posts
- `/blog?search=termo` - Busca
- `/blog?tag=react` - Filtro por tag
- `/blog?page=2` - Paginação
- `/blog/[slug]` - Post individual
