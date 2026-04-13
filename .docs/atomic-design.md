# Atomic Design

O projeto utiliza [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) metodologia criada por Brad Frost.

## As 5 Etapas

### 1. Atoms (Átomos)

Elementos básicos que não podem ser quebrados further sem perder significação.

- Button, Input, Label, Heading, Icon
- Não existem sozinhos, ganham propósito em contextos maiores

**Local**: `src/components/ui/`

### 2. Molecules (Moléculas)

Grupos simples de átomos que funcionam como unidade.

- SearchForm (Label + Input + Button)
- Card (Title + Content)
- FormField (Label + Input + Error)

**Local**: `src/components/ui/`

### 3. Organisms (Organismos)

Componentes complexos compostos por grupos de molecules e/ou atoms.

- Header (Logo + Nav + SearchForm)
- Hero (Title + Subtitle + CTA)
- Footer (Links + Social)
- ProductGrid (ProductCard repetidos)

**Local**: `src/components/sections/`

### 4. Templates

Page-level objects que colocam componentes em um layout e definem a estrutura de conteúdo subjacente.

- Define onde cada componente fica
- Não contém conteúdo real, apenas placeholder

**Local**: `src/app/[pagina]/page.tsx`

### 5. Pages

Instâncias específicas de templates com conteúdo real代表性.

- Template com dados reais
- É o que o usuário vê e interage

**Local**: `src/app/[pagina]/page.tsx`

---

## Estrutura de Diretórios

```
src/
├── components/
│   ├── ui/           # Atoms + Molecules
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── card.tsx
│   ├── sections/     # Organisms
│   │   ├── hero.tsx
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── forms/        # Molecules (forms)
│   └── icons/        # Atoms
│
└── app/
    └── [pagina]/
        ├── _components/    # Componentes específicos desta página
        ├── page.tsx       # Template → Page
        └── loading.tsx
```

---

## Regras de Organização

| Nível | Critério | Local |
|-------|---------|-------|
| **Atoms** | Elementos básicos (Button, Input, Icon) | `src/components/ui/` |
| **Molecules** | Grupos simples de atoms | `src/components/ui/` |
| **Organisms** | Seções reutilizáveis (Header, Hero) | `src/components/sections/` |
| **Page-specific** | Usado em 1 página apenas | `_components/` |

### Decisão

- Componente usado em **1 página** → `_components/`
- Componente usado em **≥2 páginas** → mover para `src/components/`

---

## Exemplo Prático

```tsx
// Atom: Button
// src/components/ui/button.tsx

// Molecule: Card  
// src/components/ui/card.tsx

// Organism: Hero
// src/components/sections/hero.tsx

// Template: Home page
// src/app/page.tsx

// Page: Home com conteúdo real
// src/app/page.tsx (mesmo arquivo, agora com dados)
```