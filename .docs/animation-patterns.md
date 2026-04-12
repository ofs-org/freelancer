# Animation Patterns

Guia de boas práticas para animações usando Motion.

---

## Instalação

A biblioteca `motion` já está instalada (`motion` v12+).

```bash
# Verificar versão
pnpm list motion
```

---

## Estrutura de Arquivos

```
src/lib/animation-variants.ts  # Variantes reutilizáveis
```

**NUNCA** definir variantes inline nos componentes. Sempre criar em arquivo centralizado.

---

## Boas Práticas

### 1. Tipagem Explícita

```typescript
import type { Variants } from 'motion';

export const containerVariants: Variants = { ... };
```

### 2. staggerChildren para Sequências

```typescript
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};
```

### 3. Tipos de Easing

| Tipo | Uso | Exemplo |
|------|-----|---------|
| `spring` | Elementos principais | Badge, Headline, Buttons |
| `ease-out` | Elementos secundários | Description, Scroll indicator |

```typescript
// Spring - para elementos principais
{
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 20,
    duration: 0.6,
  },
}

// Ease-out - para elementos secundários
{
  transition: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
  },
}
```

### 4. Performance

- **Sempre** usar `viewport={{ once: true, margin: '-100px' }}` para animações de scroll
- **Nunca** re-animar elementos já vistos
- Motion gerencia `will-change` automaticamente

### 5. Hover States para Buttons

```typescript
export const buttonHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

// Aplicar
<motion.div
  variants={buttonHoverVariants}
  initial="rest"
  whileHover="hover"
  whileTap="tap"
>
```

---

## Exemplos Práticos

### Hero Section

Ver: `src/app/_components/hero.tsx`

**Estrutura:**
1. Background image (fadeIn Simples)
2. Container com stagger
3. Elementos individuais com variantes

**Ordem de animação:**
| # | Elemento | Variante | Delay |
|---|---------|---------|-------|
| 1 | Background | fadeIn | 0s |
| 2 | Badge | fadeInUp | 0s |
| 3 | Sub-headline | fadeInUp | 0.1s |
| 4 | Headline | fadeInUp | 0.2s |
| 5 | Description | fadeInUp | 0.3s |
| 6 | Buttons | fadeInScale | 0.4s |
| 7 | StatsBar | fadeInUp | 0.6s |
| 8 | Scroll indicator | fadeIn | 0.8s |

---

## Anti-patterns

### ❌ Nunca fazer isto

```typescript
// ERRO: Variantes inline
<motion.div animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

// ERRO: useAnimation sem necessidade
const controls = useAnimation();
controls.start({ opacity: 1 });

// ERRO: will-change manual
className="will-change-opacity"

// ERRO: animações em background-image
<Image className="animate-pulse" />
```

### ✅ Sempre fazer

```typescript
// CORRETO: Usar variantes centralizadas
import { fadeInUpVariants } from '@/lib/animation-variants';

// CORRETO: viewport once para performance
<motion.div whileInView={{ opacity: 1 }} viewport={{ once: true }}>

// CORRETO: Usar transform, não left/top/margin
<motion.div initial={{ y: 30 }} animate={{ y: 0 }}>
```

---

## Referências

- [Motion Docs](https://motion.dev)
- Ver: `src/lib/animation-variants.ts`
- Ver: `src/app/_components/hero.tsx`