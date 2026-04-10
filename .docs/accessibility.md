# Boas Práticas de Acessibilidade

Este documento estabelece as práticas de acessibilidade para o projeto OFS Freelancer.

## WCAG 2.1 AA

O projeto deve seguir as diretrizes WCAG 2.1 AA.

## Regras de Contraste

### Contraste Mínimo
- **Texto normal**: 4.5:1 mínimo
- **Texto grande** (18px+ ou 14px+ bold): 3:1 mínimo
- **Componentes de UI**: 3:1 mínimo

### Valores de Contraste do OFS Design System
| Situação | Background | Texto | Contraste |
|----------|------------|-------|-----------|
| Primary Button | `#D0F336` | `#181E00` | 14.9:1 ✅ |
| Secondary Container | `#D6E98B` | `#5A691A` | 8.5:1 ✅ |
| Error Container | `#FFDAD6` | `#93000A` | 7.8:1 ✅ |
| On Surface | `#FFFFFF` | `#1A1C1C` | 14.8:1 ✅ |

### Cores com Problemas de Contraste
⚠️ As seguintes classes Tailwind NÃO devem ser usadas diretamente:
- `text-on-primary` (branco em amarelo) - contraste ~1.4:1
- `text-primary-container` (verde escuro em amarelo) - baixo contraste

**Solução**: Use valores hex diretos ou defina tokens corretamente.

## Formulários

### Labels
- Use sempre `<label htmlFor="id">` associado ao input
- O `id` do input deve ser único na página
- Para campos obrigatórios, indique com `*` ou aria-required

```typescript
// ✅ Bom
<label htmlFor="email" className="...">E-mail *</label>
<Input id="email" type="email" required />

// ❌ Evitar
<p>E-mail</p>  // Sem associação
<Input placeholder="E-mail" />  // Sem label
```

### Estados de Input
- **Error**: border em vermelho + mensagem de erro visível
- **Disabled**: opacity 50%, cursor not-allowed
- **Focus**: ring visível (2px)

## Imagens

### Alt Text
- Todas as imagens devem ter `alt` text
- Decorative images: `alt=""`
- Imagens com texto: Use o mesmo texto da imagem

```typescript
// ✅ Bom
<Image src="/logo.png" alt="Logo OFS" />
<Image src="/decorative.png" alt="" />  // Decorativa

// ❌ Evitar
<Image src="/logo.png" />  // Sem alt
```

## Botões e Links

### Botões
- Use elementos `<button>` para ações
- Use `aria-label` se o texto não for suficiente

```typescript
// ✅ Bom
<Button aria-label="Fechar menu">✕</Button>

// ❌ Evitar
<div onClick={...}>✕</div>  // Não é button
```

### Links

**IMPORTANTE**: Use o componente `Link` do Next.js em vez da tag `<a>`.

```typescript
// ✅ Bom - Use Link do Next.js para navegação interna
import Link from 'next/link';

<Link href="/pagina" className="...">
  Página Interna
</Link>

// Use Link com href externo para navegar para outros domínios
<Link href="https://site-externo.com" target="_blank" rel="noopener noreferrer">
  Site externo
</Link>

// ❌ Evitar - tag <a> para navegação interna
<a href="/pagina">Página</a>
```

**Quando usar tag `<a>`**:
- Links externos para outros domínios (com `rel="noopener noreferrer"`)
- Links com comportamento JavaScript específico

**Exemplo com botão para ação**:
```typescript
// Para ações (não navegação), use Button
<Button onClick={handleAction}>
  Executar Ação
</Button>
```

## Estrutura Semântica

### HTML Semântico
- `<header>`: Cabeçalho
- `<nav>`: Navegação
- `<main>`: Conteúdo principal
- `<section>`: Seção temática
- `<footer>`: Rodapé

### Heading Hierarchy
- Use apenas um `<h1>` por página
- Não pule níveis: h1 → h2 → h3 (não h1 → h3)

```html
<!-- ✅ Bom -->
<h1>Título</h1>
<h2>Seção</h2>
<h3>Subseção</h3>

<!-- ❌ Evitar -->
<h1>Título</h1>
<h3>Subseção</h3>  // Pulou h2
```

## Keyboard Navigation

### Foco Visível
- Sempre tenha um indicador de foco visível
- Não remova `outline` sem substituir

```css
/* ✅ Bom */
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* ❌ Evitar */
*:focus {
  outline: none;
}
```

### Ordem de Foco
- A ordem de foco deve seguir a ordem visual
- Use `tabIndex` apenas quando necessário

## Regions ARIA

Use atributos ARIA quando necessário:

| Atributo | Uso |
|---------|-----|
| `aria-label` | Texto descritivo para screen readers |
| `aria-describedby` | Associa a descrição ao elemento |
| `aria-required` | Indica campo obrigatório |
| `aria-invalid` | Indica estado de erro |
| `aria-expanded` | Para accordions/expandables |
| `aria-controls` | Associa controls ao target |

## Testing de Acessibilidade

### Checklist Antes de Commit
- [ ] Contraste mínimo 4.5:1 em todo texto
- [ ] Todos os inputs com labels associados
- [ ] Um h1 por página
- [ ] Foco visível em todos os interactive elements
- [ ] Imagens com alt text
- [ ] Semantic HTML

### Ferramentas
- Lighthouse Accessibility audit
- axe DevTools
- Wave ( extensãoweb)

---

**Referência**: Para cores e tokens, veja `docs/design-tokens.md`.
Para padrões de componentes, veja `docs/ui-patterns.md`.