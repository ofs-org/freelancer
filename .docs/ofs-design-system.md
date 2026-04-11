# OFS Design System v1.0

> Base visual para projetos OFS · Plus Jakarta Sans · Tailwind CSS · Material Symbols · Modo claro/escuro

---

## Sumário

1. [Identidade Visual](#identidade-visual)
2. [Paleta de Cores](#paleta-de-cores)
3. [Tipografia](#tipografia)
4. [Espaçamento](#espaçamento)
5. [Border Radius](#border-radius)
6. [Elevação & Sombras](#elevação--sombras)
7. [Componentes](#componentes)
   - [Botões](#botões)
   - [Badges & Chips](#badges--chips)
   - [Formulários & Inputs](#formulários--inputs)
   - [Cards](#cards)
   - [Navegação](#navegação)
   - [Alertas & Feedbacks](#alertas--feedbacks)
   - [Metric Cards](#metric-cards)
   - [Process Steps](#process-steps)
   - [Testimonial Card](#testimonial-card)
   - [FAQ Accordion](#faq-accordion)
   - [Tech Tags](#tech-tags)
8. [Padrões de Seção](#padrões-de-seção)
9. [Tailwind Config](#tailwind-config)
10. [Glass Morphism](#glass-morphism)

---

## Identidade Visual

| Propriedade     | Valor                     |
| --------------- | ------------------------- |
| Nome do projeto | OFS — Sovereign Architect |
| Fonte principal | Plus Jakarta Sans         |
| Ícones          | Material Symbols Outlined |
| Framework CSS   | Tailwind CSS              |
| Slogan          | Built with precision.     |

---

## Paleta de Cores

### Brand / Primary

| Token                  | Hex       | Uso                              |
| ---------------------- | --------- | -------------------------------- |
| `primary`              | `#D0F336` | CTA principal, acentos, destaque |
| `primary-fixed`        | `#CEF134` | Variação fixada do primário      |
| `primary-fixed-dim`    | `#B3D406` | Primário em superfície escura    |
| `on-primary`           | `#FFFFFF` | Texto sobre fundo primary        |
| `on-primary-container` | `#181E00` | Texto sobre primary container    |
| `primary-container`    | `#D0F336` | Container com cor primária       |
| `surface-tint`         | `#546500` | Tinting de superfícies           |
| `inverse-primary`      | `#B3D406` | Primary em temas invertidos      |

### Secondary

| Token                        | Hex       | Uso                           |
| ---------------------------- | --------- | ----------------------------- |
| `secondary`                  | `#566516` | Cor secundária                |
| `on-secondary`               | `#FFFFFF` | Texto sobre secondary         |
| `secondary-container`        | `#D6E98B` | Container secundário          |
| `on-secondary-container`     | `#5A691A` | Texto no container secundário |
| `secondary-fixed`            | `#D9EB8E` | Secundário fixado             |
| `secondary-fixed-dim`        | `#BDCF75` | Secundário fixado escurecido  |
| `on-secondary-fixed`         | `#181E00` | Texto no fixed secondary      |
| `on-secondary-fixed-variant` | `#3F4C00` | Variante de texto no fixed    |

### Tertiary

| Token                       | Hex       | Uso                             |
| --------------------------- | --------- | ------------------------------- |
| `tertiary`                  | `#356575` | Cor terciária (azul-esverdeado) |
| `on-tertiary`               | `#FFFFFF` | Texto sobre tertiary            |
| `tertiary-container`        | `#BCECFF` | Container terciário             |
| `on-tertiary-container`     | `#3D6C7C` | Texto no container terciário    |
| `tertiary-fixed`            | `#BAEAFD` | Terciário fixado                |
| `tertiary-fixed-dim`        | `#9ECEE0` | Terciário fixado escurecido     |
| `on-tertiary-fixed`         | `#001F28` | Texto no fixed tertiary         |
| `on-tertiary-fixed-variant` | `#1A4D5C` | Variante de texto no fixed      |

### Semântica / Error

| Token                | Hex       | Uso                        |
| -------------------- | --------- | -------------------------- |
| `error`              | `#BA1A1A` | Estado de erro             |
| `on-error`           | `#FFFFFF` | Texto sobre error          |
| `error-container`    | `#FFDAD6` | Container de erro          |
| `on-error-container` | `#93000A` | Texto no container de erro |

### Surface & Neutros

| Token                       | Hex       | Uso                                    |
| --------------------------- | --------- | -------------------------------------- |
| `surface-container-lowest`  | `#FFFFFF` | Superfície mais clara (cards elevados) |
| `surface` / `background`    | `#F9F9F9` | Fundo padrão da aplicação              |
| `surface-bright`            | `#F9F9F9` | Superfície brilhante                   |
| `surface-container-low`     | `#F3F3F3` | Container com baixa elevação           |
| `surface-container`         | `#EEEEEE` | Container padrão                       |
| `surface-container-high`    | `#E8E8E8` | Container com elevação média           |
| `surface-container-highest` | `#E2E2E2` | Container com máxima elevação          |
| `surface-dim`               | `#DADADA` | Superfície escurecida                  |
| `surface-variant`           | `#E2E2E2` | Variante de superfície                 |
| `outline`                   | `#767962` | Bordas e divisórias visíveis           |
| `outline-variant`           | `#C6C9AE` | Bordas sutis                           |
| `on-surface`                | `#1A1C1C` | Texto principal sobre superfície       |
| `on-surface-variant`        | `#454934` | Texto secundário sobre superfície      |
| `on-background`             | `#1A1C1C` | Texto sobre background                 |
| `inverse-surface`           | `#2F3131` | Superfície invertida (dark mode)       |
| `inverse-on-surface`        | `#F1F1F1` | Texto sobre superfície invertida       |

---

## Tipografia

**Família:** `Plus Jakarta Sans` (Google Fonts)  
**Pesos utilizados:** 300, 400, 500, 600, 700, 800

```html
<link
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

### Escala Tipográfica

| Nível       | Tamanho | Peso | Letter Spacing | Line Height | Uso                          |
| ----------- | ------- | ---- | -------------- | ----------- | ---------------------------- |
| Display     | 64–80px | 800  | -0.04em        | 0.9         | Hero headlines               |
| Headline 1  | 48–56px | 800  | -0.03em        | 1.0         | Títulos de seção principais  |
| Headline 2  | 32–40px | 700  | -0.02em        | 1.1         | Subtítulos de seção          |
| Title Large | 24px    | 700  | -0.01em        | 1.2         | Títulos de card/componente   |
| Title       | 20px    | 600  | 0              | 1.3         | Labels de seção              |
| Body Large  | 18–20px | 400  | 0              | 1.6         | Texto introdutório           |
| Body        | 16px    | 400  | 0              | 1.6         | Texto corrido                |
| Body Small  | 14px    | 400  | 0              | 1.5         | Descrições, legendas         |
| Label       | 10–12px | 700  | 0.15–0.25em    | —           | Tags, badges, uppercase caps |

### Exemplo de uso (Tailwind)

```html
<!-- Display Hero -->
<h1 class="font-extrabold tracking-tighter leading-[0.9] text-6xl md:text-8xl">
  Transforme em <span class="text-primary">seu maior vendedor.</span>
</h1>

<!-- Headline de seção -->
<h2 class="text-5xl font-black tracking-tighter leading-[1.1]">
  Stack Tecnológica de Elite
</h2>

<!-- Label uppercase -->
<p class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
  Lighthouse Score 100/100
</p>
```

---

## Espaçamento

Sistema baseado em múltiplos de **4px**.

| Token | Valor | Uso típico                       |
| ----- | ----- | -------------------------------- |
| xs    | 4px   | Gap entre ícone e texto          |
| sm    | 8px   | Padding interno de badges        |
| md    | 16px  | Gap entre elementos em linha     |
| lg    | 24px  | Padding de cards compactos       |
| xl    | 32px  | Padding de cards e seções        |
| 2xl   | 48px  | Espaçamento entre seções menores |
| 3xl   | 64px  | Margin entre blocos de conteúdo  |
| 4xl   | 96px  | Padding vertical de seções       |
| 5xl   | 128px | Seções hero e destaque           |

---

## Border Radius

| Token | Valor  | Tailwind            | Uso                          |
| ----- | ------ | ------------------- | ---------------------------- |
| xs    | 4px    | `rounded`           | Elementos internos pequenos  |
| sm    | 8px    | —                   | Tags, badges, pills internas |
| md    | 16px   | `rounded` (DEFAULT) | Botões, inputs, alertas      |
| lg    | 32px   | `rounded-lg`        | Cards, painéis               |
| xl    | 48px   | `rounded-xl`        | Seções, hero panels          |
| full  | 9999px | `rounded-full`      | Pills, avatares, indicadores |

> **Nota:** No Tailwind config do projeto, `rounded-DEFAULT` = `1rem`, `rounded-lg` = `2rem`, `rounded-xl` = `3rem`.

---

## Elevação & Sombras

| Nível   | CSS                                             | Uso                       |
| ------- | ----------------------------------------------- | ------------------------- |
| Flat    | sem sombra                                      | Cards de superfície       |
| Low     | `box-shadow: 0 10px 30px -5px rgba(0,0,0,0.04)` | Cards padrão              |
| Medium  | `box-shadow: 0 12px 32px rgba(26,28,28,0.04)`   | Cards elevados            |
| High    | `box-shadow: 0 40px 80px -15px rgba(0,0,0,0.1)` | Cards em hover            |
| Primary | `box-shadow: 0 0 50px rgba(208,243,54,0.4)`     | Botão primary em destaque |
| Glass   | `backdrop-filter: blur(20px)`                   | Painéis sobre imagem/dark |

---

## Componentes

### Botões

#### Variantes

| Variante  | Background             | Texto        | Borda                  |
| --------- | ---------------------- | ------------ | ---------------------- |
| Primary   | `#D0F336`              | `#181E00`    | Nenhuma                |
| Secondary | Transparente           | `on-surface` | `outline-variant`      |
| Ghost     | Transparente           | `on-surface` | Nenhuma                |
| Glass     | `rgba(255,255,255,.1)` | `#FFFFFF`    | `rgba(255,255,255,.2)` |

#### Tamanhos

| Tamanho | Padding     | Font Size | Border Radius  |
| ------- | ----------- | --------- | -------------- |
| sm      | `7px 14px`  | 12px      | 8px (md)       |
| md      | `10px 20px` | 14px      | 16px (DEFAULT) |
| lg      | `14px 28px` | 16px      | 16px           |
| xl      | `20px 48px` | 18–20px   | 16–24px        |

#### Estados

| Estado   | Visual                              |
| -------- | ----------------------------------- |
| Default  | Opacidade 100%, escala 1            |
| Hover    | `hover:scale-105`                   |
| Active   | `active:scale-95` ou `scale-90`     |
| Disabled | Opacidade 40%, `cursor-not-allowed` |

#### Código de referência

```html
<!-- Primary -->
<button
  class="bg-primary-container text-on-primary-container px-12 py-6 font-black text-lg
               flex items-center gap-3 hover:scale-105 hover:shadow-[0_0_50px_rgba(208,243,54,0.4)]
               active:scale-95 transition-all duration-300 rounded-2xl"
>
  Iniciar Projeto
  <span class="material-symbols-outlined">arrow_forward</span>
</button>

<!-- Glass (sobre fundo escuro) -->
<button
  class="glass-button text-white px-12 py-6 font-bold text-lg
               hover:bg-white/20 transition-all duration-300 active:scale-95 rounded-2xl"
>
  Ver Portfólio
</button>
```

---

### Badges & Chips

| Variante        | Background          | Texto                | Borda               |
| --------------- | ------------------- | -------------------- | ------------------- |
| Primary         | `#D0F336`           | `#181E00`            | Nenhuma             |
| Secondary       | `#D6E98B`           | `#3F4C00`            | Nenhuma             |
| Tertiary        | `#BCECFF`           | `#1A4D5C`            | Nenhuma             |
| Error           | `#FFDAD6`           | `#93000A`            | Nenhuma             |
| Neutral         | `surface-container` | `on-surface-variant` | `outline-variant`   |
| Outline Primary | Transparente        | `#546500`            | `1px solid #D0F336` |
| Dark Pill       | `#1A1C1C`           | `#D0F336`            | Nenhuma             |

```html
<!-- Chip com ponto animado (hero) -->
<div class="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full">
  <span class="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
  <span
    class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white"
  >
    Lighthouse Score 100/100
  </span>
</div>

<!-- Badge de seção -->
<div
  class="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
>
  <span
    class="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#D0F336]"
  ></span>
  <p class="font-black uppercase tracking-[0.4em] text-[10px]">
    O Diagnóstico Crítico
  </p>
</div>
```

---

### Formulários & Inputs

#### Input padrão

```html
<input
  type="email"
  placeholder="Seu melhor e-mail"
  class="w-full bg-surface border border-outline-variant rounded-2xl px-8 py-5
         text-on-surface placeholder:text-on-surface-variant/40
         focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
/>
```

#### Estados de input

| Estado   | Border                | Ring                     |
| -------- | --------------------- | ------------------------ |
| Default  | `outline-variant`     | Nenhum                   |
| Focus    | `primary` (`#D0F336`) | `ring-2 ring-primary/50` |
| Error    | `error` (`#BA1A1A`)   | `ring-2 ring-error/20`   |
| Disabled | `outline-variant/30`  | Nenhum, `opacity-50`     |

#### Input sobre fundo escuro (Lead Magnet)

```html
<input
  class="w-full bg-white/10 border border-white/10 rounded-2xl px-8 py-5
         text-white placeholder:text-white/30
         focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-md"
  placeholder="Seu melhor e-mail"
  type="email"
/>
```

---

### Cards

#### Card Elevado (padrão)

```html
<div
  class="bg-surface-container-lowest p-12 rounded-xl
            shadow-[0_12px_32px_rgba(26,28,28,0.04)] border border-outline-variant/10"
>
  <!-- conteúdo -->
</div>
```

#### Problem Card (hover interativo)

```css
.problem-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.problem-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.98);
  border-color: #d0f336;
}
```

#### Card Primary Container

```html
<div class="bg-primary-container p-8 rounded-xl flex flex-col justify-end">
  <h3 class="text-xl font-bold text-on-primary-container mb-2">
    Segurança Máxima
  </h3>
  <p
    class="text-xs text-on-primary-container/80 uppercase font-black tracking-widest"
  >
    SSL & Data Privacy
  </p>
</div>
```

#### Stat Card

```html
<div class="glass-panel p-8 rounded-3xl max-w-2xl inline-block">
  <div class="flex gap-16 items-center">
    <div>
      <p
        class="text-[10px] uppercase tracking-[0.25em] font-bold text-white/50 mb-2"
      >
        Performance Real-time
      </p>
      <div class="flex items-baseline gap-1">
        <span class="text-5xl font-black text-white">99.9</span>
        <span class="text-2xl font-black text-primary">%</span>
      </div>
    </div>
  </div>
</div>
```

---

### Navegação

```html
<nav
  class="fixed top-0 w-full z-50 bg-[#f9f9f9]/10 backdrop-blur-xl
            transition-all duration-300 border-b border-white/10"
>
  <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
    <!-- Logo -->
    <span
      class="text-xl font-bold tracking-tighter text-[#1a1c1c] md:text-white"
      >OFS</span
    >

    <!-- Links -->
    <div class="hidden md:flex items-center space-x-12">
      <!-- Ativo -->
      <a
        class="text-sm font-semibold uppercase tracking-tight text-white
                relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2
                after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full"
      >
        Início
      </a>
      <!-- Inativo -->
      <a
        class="text-sm font-semibold uppercase tracking-tight text-white/60
                hover:text-white transition-all duration-300"
      >
        Soluções
      </a>
    </div>

    <!-- CTA -->
    <button
      class="bg-primary-container text-on-primary-container px-6 py-2.5
                   font-bold text-sm tracking-tight rounded-2xl"
    >
      Contato
    </button>
  </div>
</nav>
```

**Indicador de página ativa:** ponto de `1×1` com `bg-primary` centralizado abaixo do link via `after:` pseudo-element.

---

### Alertas & Feedbacks

| Tipo    | Background            | Texto                    | Ícone sugerido |
| ------- | --------------------- | ------------------------ | -------------- |
| Success | `#EEF7DC`             | `#3F4C00`                | `check_circle` |
| Error   | `#FFDAD6`             | `#93000A`                | `error`        |
| Info    | `#E0F5FF`             | `#1A4D5C`                | `info`         |
| Warning | `secondary-container` | `on-secondary-container` | `warning`      |

```html
<div
  class="bg-[#eef7dc] text-[#3f4c00] rounded-xl px-6 py-4 flex items-center gap-3"
>
  <span class="material-symbols-outlined">check_circle</span>
  Projeto entregue com sucesso! Lighthouse Score: 100/100.
</div>
```

---

### Metric Cards

```html
<!-- Grid 2x2 ou 1x4 -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div class="bg-surface-container p-6 rounded-xl">
    <p
      class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60 mb-2"
    >
      Uptime
    </p>
    <div class="flex items-baseline gap-1">
      <span class="text-4xl font-black text-on-surface">99.9</span>
      <span class="text-xl font-black text-primary">%</span>
    </div>
  </div>
</div>
```

**Números benefícios (estilo da seção "01, 02, 03"):**

```html
<span
  class="text-6xl md:text-7xl font-extrabold text-primary mb-8 block leading-none
             tracking-tighter group-hover:scale-110 transition-transform duration-500 origin-left"
>
  01
</span>
```

---

### Process Steps

```html
<div class="relative">
  <!-- Linha vertical -->
  <div
    class="absolute top-0 left-8 md:left-1/2 w-px h-full bg-outline-variant/30"
  ></div>

  <!-- Step -->
  <div class="flex flex-col md:flex-row items-center gap-12">
    <div class="w-full md:w-1/2 md:text-right">
      <h3 class="text-2xl font-bold mb-4">1. Discovery & Estratégia</h3>
      <p class="text-on-surface-variant">Descrição do step...</p>
    </div>
    <!-- Ícone central -->
    <div
      class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center
                shrink-0 z-10 shadow-lg"
    >
      <span class="material-symbols-outlined font-bold">search</span>
    </div>
    <div class="hidden md:block md:w-1/2"></div>
  </div>
</div>
```

---

### Testimonial Card

```html
<div
  class="bg-surface-container-lowest p-12 rounded-xl
            shadow-[0_12px_32px_rgba(26,28,28,0.04)] border border-outline-variant/10"
>
  <span
    class="material-symbols-outlined text-primary-container text-5xl mb-6"
    style='font-variation-settings: "FILL" 1'
    >format_quote</span
  >
  <p class="text-xl italic text-on-surface leading-relaxed mb-8">
    "A entrega superou todas as expectativas..."
  </p>
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-full overflow-hidden">
      <img class="w-full h-full object-cover" src="..." />
    </div>
    <div>
      <p class="font-bold text-on-surface">Ricardo Menezes</p>
      <p
        class="text-xs text-on-surface-variant uppercase tracking-widest font-bold"
      >
        CEO @ TechFlow
      </p>
    </div>
  </div>
</div>
```

---

### FAQ Accordion

```html
<details class="group bg-surface-container-low rounded-xl">
  <summary
    class="list-none p-8 font-bold text-lg cursor-pointer
                  flex justify-between items-center"
  >
    Qual o prazo médio de entrega?
    <span
      class="material-symbols-outlined transition-transform group-open:rotate-180"
    >
      expand_more
    </span>
  </summary>
  <div class="px-8 pb-8 text-on-surface-variant leading-relaxed">
    O prazo varia conforme a complexidade, mas projetos institucionais costumam
    levar entre 4 a 6 semanas.
  </div>
</details>
```

---

### Tech Tags

```html
<span
  class="bg-surface-container px-3 py-1 rounded-full
             text-xs font-bold uppercase tracking-wider"
>
  Next.js 14
</span>
```

**Stack documentada no projeto:** `Next.js 16` · `React 19` · `Tailwind CSS v4` · `TypeScript` · `Drizzle ORM` · `Better Auth` · `PostgreSQL` · `Resend` · `Vercel AI SDK` · `SSL / Data Privacy`

---

## Padrões de Seção

### Hero Section

- **Background:** imagem full-cover + overlay `bg-black/50`
- **Nav:** `fixed`, `backdrop-blur-xl`, `bg-[#f9f9f9]/10`, `border-b border-white/10`
- **Pill indicador:** glass-panel + ponto animado + label uppercase
- **Headline:** Display 800, cor branca, acento com `text-primary`
- **CTAs:** Primary + Glass side-by-side
- **Stats panel:** glass-panel, `rounded-3xl`, inline

### Section com fundo branco (Problem)

- Blobs de cor via `absolute` + `blur-[160px]` + opacidade muito baixa
- Cards com `problem-card` class, `rounded-[3rem]`, hover com `translateY(-12px)`
- Badge de seção com borda `primary/20` e ponto `shadow-[0_0_8px_#D0F336]`

### Section CTA Final

- **Background:** `bg-primary-container`
- **Título:** `text-on-primary-container`, `tracking-tighter`, `text-5xl md:text-7xl`
- **Botão:** `bg-on-primary-container text-surface`
- **Detalhe:** gradiente diagonal decorativo com `opacity-10`

### Footer

```html
<footer class="w-full bg-[#f3f3f3] rounded-t-[2rem] mt-20">
  <div
    class="flex flex-col md:flex-row justify-between items-center
              max-w-7xl mx-auto px-12 py-16 gap-8"
  >
    <span class="text-lg font-black text-[#1a1c1c]">OFS</span>
    <p class="text-xs tracking-widest uppercase text-[#1a1c1c]/40">
      © 2024 Sovereign Architect. Built with precision.
    </p>
  </div>
</footer>
```

---

## Tailwind Config

```js
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D0F336",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#181E00",
        "primary-container": "#D0F336",
        "primary-fixed": "#CEF134",
        "primary-fixed-dim": "#B3D406",
        "on-primary-fixed": "#181E00",
        "on-primary-fixed-variant": "#3F4C00",
        secondary: "#566516",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#D6E98B",
        "on-secondary-container": "#5A691A",
        "secondary-fixed": "#D9EB8E",
        "secondary-fixed-dim": "#BDCF75",
        "on-secondary-fixed": "#181E00",
        "on-secondary-fixed-variant": "#3F4C00",
        tertiary: "#356575",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#BCECFF",
        "on-tertiary-container": "#3D6C7C",
        "tertiary-fixed": "#BAEAFD",
        "tertiary-fixed-dim": "#9ECEE0",
        "on-tertiary-fixed": "#001F28",
        "on-tertiary-fixed-variant": "#1A4D5C",
        error: "#BA1A1A",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#93000A",
        "surface-dim": "#DADADA",
        surface: "#F9F9F9",
        "surface-bright": "#F9F9F9",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F3F3F3",
        "surface-container": "#EEEEEE",
        "surface-container-high": "#E8E8E8",
        "surface-container-highest": "#E2E2E2",
        "surface-variant": "#E2E2E2",
        "surface-tint": "#546500",
        "on-surface": "#1A1C1C",
        "on-surface-variant": "#454934",
        background: "#F9F9F9",
        "on-background": "#1A1C1C",
        outline: "#767962",
        "outline-variant": "#C6C9AE",
        "inverse-surface": "#2F3131",
        "inverse-on-surface": "#F1F1F1",
        "inverse-primary": "#B3D406",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans"],
        body: ["Plus Jakarta Sans"],
        label: ["Plus Jakarta Sans"],
      },
    },
  },
};
```

---

## Glass Morphism

Dois padrões de glass utilizados no projeto:

```css
/* Glass Panel — superfícies de conteúdo */
.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Glass Button — botões sobre fundos escuros/imagem */
.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

**Regra de uso:** glass morphism é reservado exclusivamente para elementos posicionados sobre imagens ou fundos escuros (`#1a1c1c`, fotos, gradientes). Nunca usar sobre fundos brancos ou claros.

---

_OFS Design System · Gerado a partir do projeto Stitch by Google · Sovereign Architect © 2024_
