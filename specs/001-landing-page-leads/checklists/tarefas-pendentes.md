# Tasks Pendentes Checklist: Landing Page Leads

**Purpose**: Verificar qualidade e completude das tarefas pendentes do projeto
**Created**: 2026-04-13
**Feature**: [spec.md](../001-landing-page-leads/spec.md)

**Note**: Checklist focado em validar a qualidade das tarefas pendentes, não a implementação.

---

## Tarefas Pendentes - Fase 3 (User Story 1)

- [ ] CHK001 As tarefas T015-T021 (seções da landing page) incluem critérios de aceite mensuráveis? [Clarity, Spec §FR-001]
- [ ] CHK002 As tarefas de implementação Hero section especificam os campos obrigatórios do design? [Completeness, Spec §FR-001]
- [ ] CHK003 T022 (main landing page) define dependências claras entre seções? [Consistency, Tasks §T015-T021]
- [ ] CHK004 As tarefas T023-T024 (SEO metadata) especificam valores exatos para meta tags? [Clarity, Spec §FR-013]
- [ ] CHK005 T025 (sticky CTA) define comportamento em diferentes breakpoints? [Coverage, Spec §FR-016]
- [ ] CHK006 T026 (mobile responsive) inclui critérios de teste específicos para viewports? [Measurability, Spec §FR-012]
- [ ] CHK007 T027 (WhatsApp floating) define estado inicial (visível/oculto) conforme scroll? [Clarity, Spec §FR-014]
- [ ] CHK008 T028 (Umami analytics) especifica eventos exatos a trackear? [Completeness, Spec §FR-015]

---

## Tarefas Pendentes - Fase 4 (User Story 2)

- [ ] CHK009 T029 (leadSchema Zod) especifica mensagens de erro customizadas? [Clarity, Spec §FR-004]
- [ ] CHK010 T030 (orcamento-form) define validação client-side e server-side? [Consistency, Spec §FR-004]
- [ ] CHK011 T031 (orcamento-dialog) especifica dimensões e comportamento responsive? [Coverage, Spec §FR-012]
- [ ] CHK012 T032 (createLead action) define tratamento para BD indisponível? [Edge Case, Spec §Edge-1]
- [ ] CHK013 T033 (POST /api/leads) especifica formato exato da resposta de erro? [Clarity, Spec §Edge-1]
- [ ] CHK014 T034 (duplicate validation) define se validação ocorre antes ou depois do insert? [Consistency, Gap]
- [ ] CHK015 T035 (success toast) especifica mensagem exata e duração? [Clarity, Spec §SC-006]
- [ ] CHK016 T036 (loading states) define estados específicos durante submissão? [Coverage, Spec §SC-006]
- [ ] CHK017 T037 (Umami tracking) especifica parâmetros do evento CTA click? [Completeness, Spec §FR-015]

---

## Tarefas Pendentes - Fase 5 (User Story 3)

- [ ] CHK018 T038 (checklistSchema Zod) especifica validação de email único? [Clarity, Spec §FR-007]
- [ ] CHK019 T039 (checklist-form) define campos mínimos necessários (nome, email)? [Completeness, Spec §FR-005]
- [ ] CHK020 T040 (checklist-dialog) especifica comportamento quando email já cadastrado? [Edge Case, Spec §Edge-2]
- [ ] CHK021 T041 (subscribeToChecklist action) define retry logic para email failure? [Consistency, Spec §Edge-3]
- [ ] CHK022 T042 (POST /api/checklist) especifica resposta em caso deduplicate email? [Clarity, Spec §FR-007]
- [ ] CHK023 T043 (email template) especifica conteúdo exato do email (HTML ou texto)? [Completeness, Spec §FR-006]
- [ ] CHK024 T044 (send-checklist PDF) especifica timeout para envio de email? [Measurability, Spec §SC-007]
- [ ] CHK025 T045 (duplicate check) define se retorna erro ou sucesso mascarado? [Ambiguity, Gap]
- [ ] CHK026 T046 (success message) especifica mensagem exata pós-cadastro checklist? [Clarity, Spec §SC-007]
- [ ] CHK027 T047 (Umami checklist) especifica evento para download ou signup? [Consistency, Spec §FR-015]

---

## Tarefas Pendentes - Fase 6 (User Story 4)

- [ ] CHK028 T048 (AI chat button) especifica posição fixa na tela? [Clarity, Spec §FR-008]
- [ ] CHK029 T049 (AI chat dialog) especifica dimensões e comportamento mobile? [Coverage, Spec §FR-012]
- [ ] CHK030 T050 (chat-message) define tipos de mensagem (user, assistant, system)? [Completeness, Spec §FR-009]
- [ ] CHK031 T051 (chat-input) especifica placeholder e limites de caracteres? [Clarity, Spec §FR-009]
- [ ] CHK032 T052 (POST /api/chat) especifica formato de streaming response? [Consistency, Spec §SC-008]
- [ ] CHK033 T053 (AI prompt) define contexto e limites de conhecimento? [Completeness, Spec §FR-009]
- [ ] CHK034 T054 (chat history) especifica limite de histórico e persistência? [Clarity, Gap]
- [ ] CHK035 T055 (AI loading) especifica indicador durante geração de resposta? [Coverage, Spec §SC-008]
- [ ] CHK036 T056 (AI fallback) especifica mensagem quando IA indisponível? [Edge Case, Spec §Edge-3]

---

## Tarefas Pendentes - Fase 7 (User Story 5)

- [ ] CHK037 T057 (portfolio page) especifica estrutura de URL e rota? [Clarity, Spec §FR-010]
- [ ] CHK038 T058 (project card) especifica campos obrigatórios (thumbnail, título, descrição)? [Completeness, Spec §FR-010]
- [ ] CHK039 T059 (project grid) especifica número de colunas por breakpoint? [Measurability, Spec §FR-012]
- [ ] CHK040 T060 (seed data) define critérios para projetos demonstrativos? [Consistency, Spec §Assumption-4]
- [ ] CHK041 T061 (project detail) especifica campos completos (desafio, solução, resultados)? [Clarity, Spec §FR-010]
- [ ] CHK042 T062 (external link) especifica comportamento para links externos (noopener)? [Security, Gap]

---

## Tarefas Pendentes - Fase 8 (User Story 6)

- [ ] CHK043 T063 (contato page) define rota e estrutura da página? [Clarity, Spec §FR-011]
- [ ] CHK044 T064 (contato info) especifica canais de contato exatos (email, WhatsApp)? [Completeness, Spec §FR-011]
- [ ] CHK045 T065 (WhatsApp link) especifica mensagem pré-preenchida? [Clarity, Spec §FR-011]
- [ ] CHK046 T066 (contato form) define campos específicos do formulário? [Consistency, Spec §FR-002]
- [ ] CHK047 T067 (contato submission) especifica se reutiliza leads table? [Consistency, Spec §FR-011]

---

## Tarefas Pendentes - Fase 9 (Polish)

- [ ] CHK048 T068 (favicon/manifest) especifica ícones e configurações PWA? [Completeness, Gap]
- [ ] CHK049 T069 (404 page) define estrutura da página de erro? [Coverage, Edge Case]
- [ ] CHK050 T070 (loading skeletons) especifica componentes com skeleton states? [Clarity, Gap]
- [ ] CHK051 T071 (Lighthouse accessibility) especifica critérios exatos de WCAG? [Measurability, Spec §FR-013]
- [ ] CHK052 T072 (forms edge cases) lista casos de teste específicos? [Coverage, Edge Case]
- [ ] CHK053 T073 (responsive testing) define breakpoints específicos para teste? [Measurability, Spec §FR-012]
- [ ] CHK054 T074 (quickstart validation) especifica steps de verificação? [Consistency, Spec §Quickstart]
- [ ] CHK055 T075 (next/image optimization) especifica formatos (webp, avif) e sizes? [Clarity, Spec §FR-013]
- [ ] CHK056 T076 (SEO meta tags) especifica Open Graph e Twitter cards? [Completeness, Spec §FR-013]

---

## Dependências e Gaps Identificados

- [ ] CHK057 As fases 3-8 podem executar em paralelo após Fase 2? [Consistency, Tasks §Parallel]
- [ ] Tarefas com dependências circulares entre User Stories estão identificadas? [Ambiguity, Gap]
- [ ] Critérios de aceite das tarefas permitem teste independente? [Measurability, Gap]

---

## Notes

- Check items off as completed: `[x]`
- Itens focados em validar a QUALIDADE das tarefas, não a implementação
- Identificar gaps de clareza, completude e mensurabilidade nas tarefas