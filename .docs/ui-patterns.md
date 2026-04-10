# Padrões de Componentes UI

Estes são os padrões estabelecidos para componentes UI no projeto OFS Freelancer.

## Estrutura de Componentes

Todos os componentes UI devem seguir esta estrutura:

```typescript
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const componentVariants = cva(
  'classes-base',
  {
    variants: {
      variant: { /* ... */ },
      size: { /* ... */ },
    },
    defaultVariants: { /* ... */ },
  }
);

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {}

export function Component({ className, variant, size, ...props }: ComponentProps) {
  return (
    <element
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { componentVariants };
```

## Regras

### 1. Use CVA para variantes
- Sempre use `class-variance-authority` para componentes com variantes
- Defina variantes claras: `variant`, `size`, `radius`
- Sempre forneça `defaultVariants`

### 2. Props estendidas
- Use `VariantProps<typeof cvaInstance>` para tipagem
- Use `React.HTMLAttributes` para props nativas
- Re-export `componentVariants` para uso externo

### 3. Função cn()
- Sempre use `cn()` do `@/lib/utils` para concatenar classes
- Permite sobrescrever classes com `className`

### 4. Nomenclatura
- Arquivo: `kebab-case` (ex: `button.tsx`)
- Componente: `PascalCase` (ex: `Button`)
- Props: `camelCase` (ex: `variant`, `size`)

### 5. Acessibilidade
- Sempre associe Labels com Inputs via `htmlFor` + `id`
- Use `aria-` props quando necessário
-garanta contraste mínimo 4.5:1

## Componentes Criados

| Componente | Arquivo | Variantes | Tamanhos |
|------------|---------|----------|----------|
| Button | `src/components/ui/button.tsx` | primary, secondary, ghost, glass | sm, md, lg, xl |
| Input | `src/components/ui/input.tsx` | default, error, disabled | - |
| Textarea | `src/components/ui/textarea.tsx` | default, error, disabled | - |
| Card | `src/components/ui/card.tsx` | default, elevated, glass, primary-container | - |
| Badge | `src/components/ui/badge.tsx` | primary, secondary, tertiary, error, neutral, dark-pill, outline-primary | sm, md, lg |

## Exemplo de Uso

```typescript
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Uso básico
<Button variant="primary" size="md">Clique aqui</Button>

// Com className customizado
<Button 
  variant="secondary" 
  size="lg" 
  className="w-full md:w-auto"
>
  Enviar
</Button>

// Usando variantes em kondisiais
<Button 
  variant={isLoading ? 'secondary' : 'primary'}
  disabled={isLoading}
>
  {isLoading ? 'Enviando...' : 'Enviar'}
</Button>
```

##Boas Práticas de Estilo

### Cores - Use tokens design system
```typescript
// ✅ Bom
variant: 'primary': 'bg-primary text-on-primary-container'

// ❌ Evitar
variant: 'primary': 'bg-yellow-400 text-green-900'
```

### Espaçamento - Use escala consistente
```typescript
// ✅ Bom
className="px-4 py-2" // sm
className="px-5 py-2.5" // md
className="px-7 py-3.5" // lg

// ❌ Evitar
className="px-4 px-5 py-2" // inconsistente
```

### Tipografia - Use estilos do design system
```typescript
// ✅ Bom
className="text-xl font-bold text-on-surface"
className="text-sm text-on-surface-variant"

// ❌ Evitar
className="text-[17px] font-semibold" // tamanhos arbitrários
```

### Bordas - Use radius tokens
```typescript
// ✅ Bom
className="rounded-md" // 16px
className="rounded-lg" // 32px

// ❌ Evitar
className="rounded-[15px]" // arbitrário
```

---

**Referência**: Ao criar novos componentes UI, siga este documento.
Para tokens de design, veja `docs/design-tokens.md`.
Para padrões de accessibility, veja `docs/accessibility.md`.