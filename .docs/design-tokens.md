# Design Tokens - OFS Design System v1.0

Este documento contém todos os tokens de design do OFS Design System.

## Cores

### Primary
| Token | Hex | Uso |
|-------|-----|-----|
| `--primary` | `#D0F336` | CTA principal, acentos |
| `--primary-fixed` | `#CEF134` | Variação fixada |
| `--primary-fixed-dim` | `#B3D406` | Primário em superfície escura |
| `--on-primary` | `#FFFFFF` | Texto sobre primary |
| `--on-primary-container` | `#181E00` | Texto sobre container |
| `--primary-container` | `#D0F336` | Container primário |
| `--surface-tint` | `#546500` | Tinting de superfícies |
| `--inverse-primary` | `#B3D406` | Primary em temas invertidos |

### Secondary
| Token | Hex | Uso |
|-------|-----|-----|
| `--secondary` | `#566516` | Cor secundária |
| `--on-secondary` | `#FFFFFF` | Texto sobre secondary |
| `--secondary-container` | `#D6E98B` | Container secundário |
| `--on-secondary-container` | `#5A691A` | Texto no container |

### Tertiary
| Token | Hex | Uso |
|-------|-----|-----|
| `--tertiary` | `#356575` | Cor terciária |
| `--tertiary-container` | `#BCECFF` | Container terciário |
| `--on-tertiary-container` | `#3D6C7C` | Texto no container |

### Error
| Token | Hex | Uso |
|-------|-----|-----|
| `--error` | `#BA1A1A` | Estado de erro |
| `--on-error` | `#FFFFFF` | Texto sobre error |
| `--error-container` | `#FFDAD6` | Container de erro |
| `--on-error-container` | `#93000A` | Texto no container |

### Surface
| Token | Hex | Uso |
|-------|-----|-----|
| `--surface-container-lowest` | `#FFFFFF` | Superfície mais clara |
| `--surface` / `--background` | `#F9F9F9` | Fundo padrão |
| `--surface-container-low` | `#F3F3F3` | Container baixa elevação |
| `--surface-container` | `#EEEEEE` | Container padrão |
| `--surface-container-high` | `#E8E8E8` | Container média elevação |
| `--surface-dim` | `#DADADA` | Superfície escurecida |
| `--surface-variant` | `#E2E2E2` | Variante |

### Outline
| Token | Hex | Uso |
|-------|-----|-----|
| `--outline` | `#767962` | Bordas visíveis |
| `--outline-variant` | `#C6C9AE` | Bordas sutis |

### Texto
| Token | Hex | Uso |
|-------|-----|-----|
| `--on-surface` | `#1A1C1C` | Texto principal |
| `--on-surface-variant` | `#454934` | Texto secundário |
| `--on-background` | `#1A1C1C` | Texto sobre background |

### Inverse (Dark Mode)
| Token | Hex | Uso |
|-------|-----|-----|
| `--inverse-surface` | `#2F3131` | Superfície invertida |
| `--inverse-on-surface` | `#F1F1F1` | Texto sobre inversa |

## Tipografia

### Fonte
- Família: **Plus Jakarta Sans** (Google Fonts)
- Pesos: 300, 400, 500, 600, 700, 800

```html
<link 
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
  rel="stylesheet" 
/>
```

### Escala Tipográfica
| Nível | Tamanho | Peso | Line Height |
|-------|---------|------|------------|
| Display | 64-80px | 800 | 0.9 |
| Headline 1 | 48-56px | 800 | 1.0 |
| Headline 2 | 32-40px | 700 | 1.1 |
| Title Large | 24px | 700 | 1.2 |
| Title | 20px | 600 | 1.3 |
| Body Large | 18-20px | 400 | 1.6 |
| Body | 16px | 400 | 1.6 |
| Body Small | 14px | 400 | 1.5 |
| Label | 10-12px | 700 | - |

## Espaçamento

Sistema baseado em múltiplos de **4px**.

| Token | Valor |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |
| 4xl | 96px |
| 5xl | 128px |

## Border Radius

| Token | Valor | Tailwind |
|-------|-------|--------|
| xs | 4px | `rounded` |
| sm | 8px | - |
| md | 16px | `rounded` (default) |
| lg | 32px | `rounded-lg` |
| xl | 48px | `rounded-xl` |
| full | 9999px | `rounded-full` |

## Sombras

| Nível | CSS |
|-------|-----|
| Low | `0 10px 30px -5px rgba(0,0,0,0.04)` |
| Medium | `0 12px 32px rgba(26,28,28,0.04)` |
| High | `0 40px 80px -15px rgba(0,0,0,0.1)` |
| Primary | `0 0 50px rgba(208,243,54,0.4)` |

## Glass Morphism

### Glass Panel
```css
.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

### Glass Button
```css
.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

**Nota**: Glass é reservado para elementos sobre imagens ou fundos escuros.

## Boas Práticas

### Nunca use cores ou fontes hard-coded

**Cores**: Use sempre tokens Tailwind
- ✅ `bg-primary`, `text-on-surface`, `border-outline`
- ❌ `bg-[#D0F336]`, `text-[#1a1c1c]`

**Fontes**: Use tokens do sistema
- ✅ `font-body`, `font-heading`
- ❌ `font-['Plus_Jakarta_Sans']`, `font-['Noto_Serif']`

**Como identificar cores hard-coded no código**:
```bash
grep -r "#[0-9a-fA-F]{3,6}" --include="*.tsx" --include="*.ts" src/
```

**Como identificar fontes hard-coded no código**:
```bash
grep -r "font-\['" --include="*.tsx" --include="*.ts" src/
```

**Exceções válidas**:
- Email templates (CSS inline) devem usar objeto de cores centralizado
- Sombras customizadas que não existem nos tokens

---

##Classes CSS Disponíveis

No Tailwind v4 com `@theme inline`, as seguintesclasses estão disponíveis:

- `bg-primary`, `text-on-primary-container`
- `bg-secondary`, `text-on-secondary-container`
- `bg-tertiary`, `text-on-tertiary-container`
- `bg-error`, `text-on-error-container`
- `bg-surface`, `text-on-surface`
- `bg-outline`, `border-outline-variant`
- `shadow-low`, `shadow-medium`, `shadow-high`, `shadow-primary`
- `roundedDEFAULT`, `rounded-lg`, `rounded-xl`

---

**Referência**: Estes tokens são usados em `src/app/globals.css`.
Para padrões de componentes, veja `docs/ui-patterns.md`.