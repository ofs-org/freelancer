<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may differ from training data. Read `node_modules/next/dist/docs/` before writing code.
<!-- END:nextjs-agent-rules -->

# AGENTS.md - Agent Guidelines for OFS Freelancer

Next.js 16+ landing page for lead capture. TypeScript, Biome (lint/format), TailwindCSS v4, pnpm.

---

## Commands

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # Biome linter
pnpm biome check .                         # Lint + format check
pnpm biome format --write --organize-imports .  # Auto-format + import org
npx tsc --noEmit     # Type check
```

---

## Project Structure

```
src/app/           # App Router (page.tsx, layout.tsx, api/)
src/components/     # React components
  ui/             # Base UI (Button, Input, Card...)
  sections/        # Page sections (Hero, Footer...)
  forms/          # Form components
  chat/           # AI chat
src/lib/          # Utils, schemas, configs
src/db/           # Drizzle ORM schema
src/actions/       # Server actions
```

---

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Files | kebab-case | `orcamento-form.tsx` |
| Components | PascalCase | `OrcamentoForm` |
| Functions/Variables | camelCase | `handleSubmit` |
| Constants | SCREAMING_SNAKE | `MAX_RETRIES` |
| Types/Interfaces | PascalCase | `LeadFormProps` |
| React Props | camelCase | `{ name, email }` |

---

## TypeScript Rules

- Always define explicit return types
- Use `interface` for objects, `type` for unions
- Prefer `unknown` over `any`
- Strict mode enabled
- Use `import type` for types, `import` for values

---

## Imports (Biome enforces order)

```typescript
// 1. React/Next 2. External libs 3. Internal @/* 4. Types
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { leadSchema } from '@/lib/schemas';
import type { Lead } from '@/lib/types';
```

---

## Formatting (Biome)

- Indent: 2 spaces
- Line width: 80
- Quote: single (JS), double (JSX)
- Trailing commas: es5
- Semicolons: required

```bash
pnpm biome format --write --organize-imports .
```

---

## React Patterns

- Functional components (arrow or `function`)
- Use `use client` only when needed
- Keep components small and focused
- Extract logic to custom hooks

## Links e Navegação

- Use `Link` do Next.js para navegação interna
- Use `Link` com `target="_blank"` para links externos
- Tag `<a>` apenas para casos específicos

```typescript
import Link from 'next/link';

// Navegação interna
<Link href="/contato">Contato</Link>

// Link externo
<Link href="https://external.com" target="_blank" rel="noopener noreferrer">
  Site Externo
</Link>
```

---

## Error Handling

```typescript
try {
  const result = await createLead(data);
  return { success: true, data: result };
} catch (error) {
  console.error('Failed to create lead:', error);
  return { success: false, error: 'Failed to submit lead' };
}
```

- Always validate input with Zod
- Return typed success/error objects
- Use `use server` in action files

---

## CSS & Tailwind

- Use Tailwind utilities
- Avoid custom CSS
- Use `cn()` for conditional classes

---

## Form + Zod Pattern

```typescript
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadSchema } from '@/lib/schemas';

export function OrcamentoForm() {
  const form = useForm<z.infer<typeof leadSchema>>({
    resolver: zodResolver(leadSchema),
  });
  // ...
}
```

---

## Server Action

```typescript
'use server';
import { db } from '@/lib/db';
import { leads } from '@/db/schema';

export async function createLead(data: z.infer<typeof leadSchema>) {
  const validated = leadSchema.parse(data);
  await db.insert(leads).values(validated);
}
```

---

## Testing

No test framework currently. If added: Vitest or Jest.
Run single test: `vitest run --filter "test-name"`

---

## Documentação de Referência

Ao criar componentes UI, forms ou做任何 task, consulte:

- **Design Tokens**: `.docs/design-tokens.md` - Cores, fontes, espaçamento, sombras
- **UI Patterns**: `.docs/ui-patterns.md` - Padrões de componentes com CVA
- **Acessibilidade**: `.docs/accessibility.md` - Boas práticas WCAG 2.1 AA
- **Copy**: `.docs/copy.md` - Textos e mensagens do projeto

---

## Key Notes

1. **Next.js 16** - Check breaking changes in `node_modules/next/dist/docs/`
2. Path aliases: `@/*` maps to `./src/*`
3. Never commit secrets - use `.env.local`
4. Run `pnpm biome check .` before committing
5. **Antes de criar novos componentes**: Siga `.docs/ui-patterns.md`
6. **Ao estilizar**: Use tokens de `.docs/design-tokens.md`
7. **Acessibilidade**: Validate com `.docs/accessibility.md`