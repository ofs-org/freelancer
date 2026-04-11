# OFS Freelancer Constitution

## Core Principles

### I. Código Limpo
Código legível, modular e manutenível. Nomes significativos para variáveis e funções, funções pequenas com responsabilidade única, sem duplicação de código. Comentários apenas quando justificam o "porquê", não o "o quê".

### II. UX Simples
Interfaces mínimas e intuitivas priorizando a funcionalidade essencial. Complexidade adicionada apenas quando rigorosamente justificada pelo valor ao usuário. Iteração rápida baseada em feedback real.

### III. Design Responsivo
Layouts que se adaptam fluentemente a todos os dispositivos e tamanhos de tela. Abordagem mobile-first: desenvolver primeiro para telas menores, expandir para maiores.

### IV. Dependências Mínimas
Preferir soluções nativas da plataforma/linguagem ou bibliotecas leves e maduras. Cada dependência deve ser avaliada quanto a custo de manutenção, segurança e bundle size. Evitar dependências desnecessárias.

### V. SEO e Acessibilidade
Acessibilidade não é opcional — é requisito fundamental. Compliance com WCAG 2.1 nível AA, semantic HTML, atributos ARIA quando necessário, contraste adequado, navegação por teclado. Performance otimizada para SEO (core web vitals).

### VI. Testes Pós-MVP
Testes unitários e E2E serão implementados apenas após a finalização do MVP. Durante o desenvolvimento do MVP, o foco é em funcionalidade, validação manual e código que permita testes posteriores.

## Restrições Técnicas

- Sem testes automáticos durante desenvolvimento do MVP
- Priorizar simplicidade e manutenibilidade sobre otimização prematura
- Código deve ser testável mesmo sem testes formais durante a fase inicial
- Dependencies must have clear purpose and minimal footprint

## Fluxo de Desenvolvimento

- MVP primeiro: funcionalidade core antes de refinamentos
- Validar manualmente em cada etapa antes de avançar
- Código limpo desde o início para facilitar testes posteriores
- Acessibilidade verificada em cada componente新的 UI

## Referências

Ao criar componentes UI, consulte:
- **Design Tokens**: `.docs/design-tokens.md` - Cores, fontes, shadowss
- **UI Patterns**: `.docs/ui-patterns.md` - Padrões de componentes com CVA
- **Acessibilidade**: `.docs/accessibility.md` - Boas práticas WCAG 2.1 AA

## Governance

A constituição prevalece sobre todas as outras práticas. Emendas requerem justificativa documentada, aprovação via PR, e plano de migração se necessário. Versionamento segue semver: MAJOR para mudanças incompatíveis, MINOR para novos princípios, PATCH para esclarecimentos.

**Version**: 1.0.0 | **Ratified**: 2026-04-09 | **Last Amended**: 2026-04-09
