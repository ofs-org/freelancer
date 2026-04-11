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
|------------|---------|-----------|----------|
| Button | `src/components/ui/button.tsx` | primary, secondary, ghost, glass | sm, md, lg, xl |
| Input | `src/components/ui/input.tsx` | default, error, disabled | - |
| Textarea | `src/components/ui/textarea.tsx` | default, error, disabled | - |
| Card | `src/components/ui/card.tsx` | default, elevated, glass, primary-container | - |
| Badge | `src/components/ui/badge.tsx` | primary, secondary, tertiary, error, neutral, dark-pill, outline-primary | sm, md, lg |
| Select | `src/components/ui/select.tsx` | default, error, disabled | - |
| Dialog | `src/components/ui/dialog.tsx` | default, glass | sm, md, lg, xl, full |
| Sheet | `src/components/ui/sheet.tsx` | default, glass | - |

### Button - Tamanhos oficiais (Design System)

| Tamanho | Padding | Font Size | Border Radius |
|---------|---------|-----------|---------------|
| sm | `14px 7px` (h v) | 12px | 8px |
| md | `20px 10px` (h v) | 14px | 16px |
| lg | `28px 14px` (h v) | 16px | 16px |
| xl | `48px 20px` (h v) | 18-20px | 20px |

### Select - Estados

| Estado | Descrição |
|--------|-----------|
| default | Borda outline-variant, foco com primary |
| error | Borda error, texto de erro abaixo |
| disabled | Opacidade 50%, cursor not-allowed |

### Dialog - Variantes

| Variante | Background | Borda | Uso |
|----------|------------|-------|-----|
| default | surface-container-lowest | outline-variant/10 | Fundos claros |
| glass | inverse-surface/90 | white/10 | Fundos escuros/imagens |

### Sheet - Configuração

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| variant | default, glass | Estilo visual |
| side | right | Lado de abertura (só direita) |
| title | string | Título obrigatório no header |

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

// Usando variantes condicionais
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