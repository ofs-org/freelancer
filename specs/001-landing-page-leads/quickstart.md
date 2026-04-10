# Quickstart: Landing Page para Captação de Leads

## Pré-requisitos

- Node.js 20+
- PostgreSQL 14+
- npm ou pnpm

## Setup

### 1. Instalação

```bash
# Clone o repositório
git clone <repo-url>
cd ofs-freelancer

# Instale dependências
npm install

# ou pnpm
pnpm install
```

### 2. Variáveis de Ambiente

Crie o arquivo `.env.local`:

```env
# Banco de dados
DATABASE_URL=postgresql://user:password@localhost:5432/ofs_freelancer

# Autenticação
BETTER_AUTH_SECRET=your-secret-key-min-32-chars-long

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx

# IA (Vercel AI SDK)
VERCEL_AI_API_KEY=sk-xxxxxxxxxxxx

# Analytics (Umami)
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_UMAMI_SCRIPT_URL=https://umami.example.com/script.js
```

### 3. Banco de Dados

```bash
# Crie o banco de dados
createdb ofs_freelancer

# Execute as migrations
pnpm run db:push
```

### 4. Desenvolvimento

```bash
pnpm run dev
```

Acesse: http://localhost:3000

## Estrutura de Diretórios

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Global styles
│   ├── portfolio/         # Portfolio page
│   ├── contato/          # Contact page
│   └── api/              # API routes
│       ├── leads/        # Lead capture
│       ├── checklist/    # Checklist download
│       └── chat/         # AI chat
├── components/
│   ├── ui/               # shadcn-ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── sheet.tsx    # Mobile menu
│   ├── forms/            # Form components
│   │   ├── orcamento-form.tsx
│   │   └── checklist-form.tsx
│   └── sections/         # Page sections
│       ├── hero.tsx
│       ├── beneficios.tsx
│       ├── portfolio.tsx
│       └── faq.tsx
├── lib/
│   ├── db.ts             # Drizzle client
│   ├── auth.ts           # Better Auth config
│   ├── email.ts          # Resend helpers
│   └── ai.ts             # Vercel AI SDK config
├── db/
│   ├── schema.ts         # Drizzle schema
│   └── index.ts          # DB exports
└── actions/              # Server actions
    ├── leads.ts
    └── checklist.ts
```

## Comandos Úteis

```bash
# Desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Lint
pnpm run lint

# Typecheck
pnpm run typecheck
```

## Stack Utilizada

- **Framework**: Next.js 16+ (App Router)
- **Styling**: TailwindCSS + shadcn/ui
- **Database**: PostgreSQL + Drizzle ORM
- **Auth**: Better Auth
- **Email**: Resend
- **AI**: Vercel AI SDK
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Analytics**: Umami
