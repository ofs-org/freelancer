# shadcn/ui Custom Patterns

Guia de boas práticas para customização de componentes shadcn/ui.

---

## Princípios Gerais

| # | Princípio | Descrição |
|---|---------|-----------|
| 1 | Acessibilidade primeiro | Todo componente dialog deve ter título |
| 2 | Props configuráveis | Evitar hardcoded, usar props |
| 3 | Layout mobile-first | Pensar primeiro em mobile |
| 4 | Close button custom | Preferir botão próprio vs default |

---

## Sheet (Dialog)

Ver: `src/components/ui/sheet.tsx`

### Boas Práticas

#### 1. Sempre incluir título oculto

```typescript
import { Dialog as SheetPrimitive } from 'radix-ui';

return (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Title className="sr-only">
      Menu de navegação
    </SheetPrimitive.Title>
    <SheetPrimitive.Content ...>
```

#### 2. Layout para menu mobile

```typescript
// CERTO: h-screen para ocupa toda altura
className="data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-screen data-[side=right]:w-3/4"

// ERRADO: h-full pode não funcionar em alguns browsers
className="data-[side=right]:h-full"

// ERRADO: limit width com sm:max-w-sm
className="sm:max-w-sm"  // Remove isso!
```

#### 3. Close button custom (quando necessário)

```typescript
import { SheetClose } from '@/components/ui/sheet';
import { X } from 'lucide-react';

<SheetContent showCloseButton={false}>
  <div className="flex flex-row items-center justify-between">
    <Logo />
    <SheetClose asChild>
      <Button variant="ghost" size="icon-sm">
        <X size={20} />
        <span className="sr-only">Fechar</span>
      </Button>
    </SheetClose>
  </div>
```

#### 4. Variantes configuráveis

```typescript
interface SheetContentProps extends React.ComponentProps<typeof SheetPrimitive.Content> {
  variant?: 'default' | 'glass';
  side?: 'top' | 'right' | 'bottom' | 'left';
  showCloseButton?: boolean;
}

const variantStyles = {
  default: 'bg-surface-container',
  glass: 'glass-panel',
};
```

#### 5. Border radius

Para menus mobile, **evitar** bordas muito arredondadas:

```typescript
// CERTO: bordas retas
'data-[side=right]:rounded-l-none'

// Avoid: bordas muito arredondadas
'data-[side=right]:rounded-l-xl'  // Remover se muito grande
```

---

## Custom Hooks

### useCounterAnimation

Ver: `src/utils/counter.ts`

```typescript
import { useCounterAnimation } from '@/utils/counter';

function StatCounter({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const { displayValue } = useCounterAnimation({ target, decimals });
  return <span>{displayValue.toFixed(decimals)}</span>;
}
```

---

## Ver Exemplos Reais

| Componente | Arquivo |
|-----------|--------|
| Hero animado | `src/app/_components/hero.tsx` |
| StatsBar com counter | `src/app/_components/stats-bar.tsx` |
| Sheet customizado | `src/components/ui/sheet.tsx` |
| Menu mobile | `src/components/sections/mobile-menu.tsx` |

---

## Testes de Acessibilidade

```bash
# Verificar erros no console
pnpm dev

# No navegador, abrir DevTools > Console
# Procurar erros de Radix UI

# Testar com screen reader
# NVDA (Windows) ou VoiceOver (Mac)
```

---

## Erros Comuns

### ❌ Dialog sem título

```
DialogContent requires a DialogTitle for the component to be accessible
```

**Solução:** Adicionar `<SheetPrimitive.Title className="sr-only">`

### ❌ Menu mobile pequeno

**Solução:** Usar `h-screen` em vez de `h-full`, remover `sm:max-w-*`

### ❌ Border muito arredondado

**Solução:** Remover classes `rounded-*-xl` ou usar valores menores

---

## Referências

- [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog)
- [Radix UI Sheet](https://www.radix-ui.com/primitives/docs/components/sheet)
- Ver: `src/components/ui/sheet.tsx`
- Ver: `src/components/sections/mobile-menu.tsx`