# Implementation Plan: Landing Page para Captação de Leads

**Branch**: `002-landing-page-leads` | **Date**: 2026-04-09 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-landing-page-leads/spec.md`

## Summary

Landing page profissional para captação de leads para serviços de criação de sites, landing pages e aplicações web com foco em SEO, acessibilidade e conversão. Inclui formulário de orçamento, checklist gratuito via email, chat com IA para dúvidas, portfólio e página de contato.

## Technical Context

**Language/Version**: TypeScript (Next.js 16+)  
**Primary Dependencies**: shadcn-ui, TailwindCSS, Drizzle ORM, Better Auth, Resend, Vercel AI SDK, Lucide React, React Hook Form, Zod  
**Storage**: PostgreSQL  
**Testing**: N/A (MVP - testes pós-MVP conforme constituição)  
**Target Platform**: Web (Next.js App Router)  
**Performance Goals**: Lighthouse score >90, tempo de resposta <3s  
**Constraints**: Mobile-first, SEO técnico, acessibilidade WCAG 2.1 AA  
**Scale/Scope**: ~10k visitantes/mês (MVP)

## Constitution Check

| Gate                     | Status  | Notes                                                  |
| ------------------------ | ------- | ------------------------------------------------------ |
| I. Código Limpo          | ✅ PASS | Nomes significativos, funções pequenas, sem duplicação |
| II. UX Simples           | ✅ PASS | Interfaces mínimas e intuitivas                        |
| III. Design Responsivo   | ✅ PASS | Mobile-first, layouts adaptativos                      |
| IV. Dependências Mínimas | ✅ PASS | Stack definida e enxuta                                |
| V. SEO e Acessibilidade  | ✅ PASS | WCAG 2.1 AA, semântica HTML, ARIA                      |
| VI. Testes Pós-MVP       | ✅ PASS | Sem testes automáticos durante MVP                     |

**Gates**: Todos passaram. Nenhuma violação identificada.

> **Nota sobre Success Criteria**: SC-001 a SC-004 são KPIs de negócio (rastreadas pós-lançamento via analytics). SC-005 a SC-008 são requisitos técnicos de implementação.

## Project Structure

### Documentation (this feature)

```
specs/001-landing-page-leads/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (if needed)
└── tasks.md             # Phase 2 output (NOT created by /speckit.plan)
```

### Source Code (repository root)

```
src/
├── app/                      # Next.js App Router (páginas flat, sem route groups)
│   ├── page.tsx             # Landing page principal
│   ├── projects/            # Portfolio page
│   ├── contacts/            # Contact page
│   ├── design/              # Design/Stitch page
│   ├── privacy-policy/      # Privacy policy page
│   ├── api/
│   │   └── auth/            # Better Auth endpoints
│   │       └── [...auth]/
│   ├── layout.tsx           # Root layout
│   ├── not-found.tsx        # 404 customizado
│   └── _components/         # Componentes específicos da página
│       ├── hero.tsx
│       └── stats-bar.tsx
├── components/
│   ├── ui/                  # shadcn-ui + componentes base (Button, Input, Card...)
│   ├── sections/            # Seções da página (Hero, Footer, FAQ...)
│   ├── forms/               # Formulários (orçamento, checklist, contato)
│   ├── chat/                # Componentes de chat com IA
│   ├── icons/               # Ícones customizados (Lucide)
│   └── providers/           # React providers (Analytics, Auth...)
├── lib/                     # Utilities e configurações
│   ├── db.ts                # Drizzle client
│   ├── auth.ts              # Better Auth config
│   ├── email.ts             # Resend helpers
│   ├── email/               # Email templates
│   │   └── templates/
│   │       └── checklist.tsx
│   ├── ai.ts                # Vercel AI SDK config
│   ├── schemas.ts           # Zod schemas + validação
│   ├── utils.ts             # Utils (cn, formatters)
│   ├── umami.ts             # Analytics helpers
│   ├── errors.ts            # Error handling
│   ├── logger.ts            # Logging
│   └── animation-variants.ts # Motion patterns
├── actions/                 # Server actions
│   ├── checklist.ts         # Action para checklist
│   └── faqs.ts              # Action para FAQs
├── db/                      # Database
│   └── schema.ts            # Drizzle schema (leads, projetos, faqs)
├── data/                    # Seed data
│   ├── seed-runner.ts       # Runner para popular DB
│   └── faq-seed.ts          # FAQs iniciais
└── utils/                   # Utils misc
    └── counter.ts           # Contadores utilitários
```

**Structure Decision**: Monolito Next.js com App Router, Drizzle ORM para PostgreSQL, API routes para backend.

## Research Phase

### NEEDS CLARIFICATION Items

1. **Stitch Design Integration**: O usuário quer usar o MCP do Stitch para pegar o design da interface já desenvolvido. Precisa verificar como integrar com Stitch.

### Technology Best Practices Research

1. **Next.js 16+ com App Router**: Estrutura de diretórios, Server Components, Server Actions
2. **shadcn-ui + TailwindCSS v4**: Setup, theming, dark mode
3. **Drizzle ORM**: Schema definition, migrations, queries
4. **Better Auth**: Setup, providers, session management
5. **Resend**: Email templates, sending API
6. **Vercel AI SDK**: Chat UI, streaming responses
7. **React Hook Form + Zod**: Form validation patterns

---

# Phase 0: Research

## Research Findings

### Decision: Stitch Integration

**Decision**: Utilizar Stitch MCP para geração de designs de interface

**Rationale**: O usuário já possui designs desenvolvidos no Stitch e deseja integrá-los ao projeto. O Stitch MCP permite gerar código React/Next.js a partir dos designs.

**Alternatives considered**: Criar designs manualmente com Figma, usar código manual

---

### Decision: Tech Stack Confirmada

**Decision**: Next.js 16+, TypeScript, shadcn-ui, TailwindCSS, PostgreSQL, Drizzle ORM, Better Auth, Resend, Vercel AI SDK, Lucide React, React Hook Form, Zod

**Rationale**: Stack moderna e completa que atende todos os requisitos do projeto:

- Next.js 16+ com App Router para SSR e performance
- shadcn-ui para componentes acessíveis e customizáveis
- TailwindCSS para estilização
- PostgreSQL + Drizzle ORM para persistência
- Better Auth para autenticação
- Resend para envio de emails transacionais
- Vercel AI SDK para chat de IA
- React Hook Form + Zod para validação de formulários

**Alternatives considered**: Outras combinações de libs avaliadas, mas esta stack atende todos os requisitos de forma coesa.

---

### Decision: SEO e Acessibilidade

**Decision**: Implementar SEO técnico completo com meta tags, schema markup, Open Graph, e acessibilidade WCAG 2.1 AA

**Rationale**: Requisito fundamental do projeto conforme especificação. Landing pages precisam de boa indexação e acessibilidade.

**Alternatives considered**: SEO básico apenas, mas não atende requisitos de conversão.

---

### Decision: Analytics com Umami

**Decision**: Utilizar Umami para tracking de eventos conforme solicitado

**Rationale**: Solução leve e隐私-focused para analytics, adequada para o escopo do projeto.

**Alternatives considered**: Google Analytics (mais pesado), Plausible (pago)

---

# Phase 1: Design & Contracts

## Entity Definition

### Lead

```
- id: uuid (PK)
- nome: string (required)
- email: string (required, unique)
- telefone: string (optional)
- empresa: string (optional)
- mensagem: text (optional)
- assunto: enum ('criacao_site', 'landing_page', 'analise_site')
- created_at: timestamp
```

### ChecklistLead

```
- id: uuid (PK)
- nome: string (required)
- email: string (required, unique)
- downloaded_at: timestamp
- email_sent: boolean
```

### Projeto (Portfólio)

```
- id: uuid (PK)
- titulo: string (required)
- descricao: text (required)
- thumbnail: string (url)
- imagens: string[] (urls)
- link: string (optional, url)
- nicho: string (optional)
- created_at: timestamp
```

### FAQ

```
- id: uuid (PK)
- pergunta: string (required)
- resposta: text (required)
- ordem: integer
- created_at: timestamp
```

## Interface Contracts

### API Endpoints

1. **POST /api/leads** - Captura novo lead
   - Input: { nome, email, telefone?, empresa?, mensagem, assunto }
   - Output: { success: boolean, lead: Lead }

2. **POST /api/checklist** - Download checklist
   - Input: { nome, email }
   - Output: { success: boolean, message: string }
   - Effect: Envio de email com PDF

3. **POST /api/chat** - Chat com IA
   - Input: { message: string, history: Message[] }
   - Output: Stream de resposta

### Formulários

1. **Formulário de Orçamento**
   - Campos: nome, email, telefone, empresa, assunto (select), mensagem
   - Validação: Zod schema

2. **Formulário de Checklist**
   - Campos: nome, email
   - Validação: Zod schema, email unique check

## Quickstart

### Setup Local

```bash
# Clone e instale dependências
pnpm add

# Configure variáveis de ambiente
cp .env.example .env

# Execute migration do banco
pnpm run db:push

# Inicie desenvolvimento
pnpm  dev
```

### Variáveis de Ambiente

```
DATABASE_URL=postgresql://...
BETTER_AUTH_SECRET=...
RESEND_API_KEY=...
VERCEL_AI_API_KEY=...
UMAMI_WEBSITE_ID=...
```

---

## Complexity Tracking

Nenhuma violação da constituição identificada. Stack segue princípios de código limpo, UX simples, e dependências mínimas.
