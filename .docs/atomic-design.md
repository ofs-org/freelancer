# Atomic Design

O projeto utiliza Atomic Design para organização de componentes.

## Estrutura de Diretórios

```
src/app/projets/
├── page.tsx
├── _components/          # ComponentesOnly usados nesta página
│   ├── hero.tsx
│   ├── project-card.tsx
│   └── project-form.tsx
└── loading.tsx

src/components/           # Componentes globais (reutilizáveis)
├── ui/                   # Base UI (Button, Input, Card...)
├── icons/                # Ícones globais
├── sections/             # Seções compartilhadas
├── forms/                # Forms globais
└── chat/                 # Chat AI
```

## Regras

1. **Use `_components/`** para componentes exclusivos de uma página
2. **Use `src/components/`** para componentes reutilizáveis entre páginas
3. **Pasta com underscore `_`** indica que é privado daquela página
4. **Decisão**:
   - Se o componente é usado em →1 página → `_components/`
   - Se o componente é usado em ≥2 páginas → `src/components/`

## Migração de Componentes Existentes

Ao migrar componentes existentes:

1. Identificar onde o componente é usado (1 ou mais páginas)
2. Se usado em apenas 1 página → mover para `_components/` dessa página
3. Se usado em ≥2 páginas → manter em `src/components/`
4. Atualizar imports após a migração