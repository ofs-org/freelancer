# Tasks: Landing Page para Captação de Leads

**Input**: Design documents from `/specs/001-landing-page-leads/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md, quickstart.md

**Tests**: N/A - MVP sem testes automáticos conforme especificação

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan in src/
- [ ] T002 Initialize Next.js 16+ project with TypeScript and required dependencies (shadcn-ui, TailwindCSS, Drizzle ORM, Better Auth, Resend, Vercel AI SDK, Lucide React, React Hook Form, Zod)
- [ ] T003 [P] Configure linting and formatting tools (ESLint, Prettier)
- [ ] T004 [P] Configure TailwindCSS v4 with shadcn-ui theme
- [ ] T005 Setup environment configuration (.env.example, .env.local)
- [ ] T006 Configure PostgreSQL connection in src/lib/db.ts using Drizzle ORM

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T007 Create Drizzle schema in src/db/schema.ts (leads, checklist_leads, projetos, faqs tables)
- [ ] T008 [P] Setup database migrations with `pnpm run db:push`
- [ ] T009 [P] Configure Better Auth in src/lib/auth.ts
- [ ] T010 [P] Setup Resend email configuration in src/lib/email.ts
- [ ] T011 [P] Configure Vercel AI SDK in src/lib/ai.ts
- [ ] T012 Setup error handling and logging infrastructure in src/lib/utils.ts
- [ ] T013 Create base UI components using shadcn-ui in src/components/ui/ (Button, Input, Textarea, Select, Card, Sheet, Dialog)
- [ ] T014 [P] Setup React Hook Form with Zod validation schemas in src/lib/schemas.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Visitante acessa a landing page e compreende a proposta de valor (Priority: P1) 🎯 MVP

**Goal**: Landing page com Hero, subtítulo e botões de CTA visíveis acima da dobra

**Independent Test**: Visitante acessa URL da página e em até 5 segundos consegue identificar: quem oferece o serviço, para quem é indicado, e qual ação tomar

### Implementation for User Story 1

- [ ] T015 [P] [US1] Create Hero section component in src/components/sections/hero.tsx
- [ ] T016 [P] [US1] Create Benefits section component in src/components/sections/beneficios.tsx
- [ ] T017 [P] [US1] Create Diferenciais section component in src/components/sections/diferenciais.tsx
- [ ] T018 [P] [US1] Create Processo section component in src/components/sections/processo.tsx
- [ ] T019 [P] [US1] Create Prova Social section component in src/components/sections/prova-social.tsx
- [ ] T020 [P] [US1] Create FAQ section component in src/components/sections/faq.tsx
- [ ] T021 [P] [US1] Create Footer section component in src/components/sections/footer.tsx
- [ ] T022 [US1] Implement main landing page in src/app/(routes)/page.tsx
- [ ] T023 [US1] Add SEO metadata (title, description, Open Graph) in src/app/(routes)/layout.tsx
- [ ] T024 [US1] Add Schema markup for local business in src/app/(routes)/layout.tsx
- [ ] T025 [US1] Implement sticky CTA buttons in src/components/ui/sticky-cta.tsx
- [ ] T026 [US1] Add mobile responsive styles and test viewport under 768px
- [ ] T027 [US1] Implement WhatsApp floating button in src/components/ui/whatsapp-float.tsx
- [ ] T028 [US1] Add Umami analytics tracking script in src/app/(routes)/layout.tsx

**Checkpoint**: User Story 1 fully functional - landing page loads with all sections visible and CTAs working

---

## Phase 4: User Story 2 - Visitante solicita orçamento através do formulário (Priority: P1) 🎯 MVP

**Goal**: Formulário de orçamento com campos: nome, email, telefone, empresa, seleção de assunto e mensagem,salvo no banco de dados

**Independent Test**: Usuário preenche formulário de contato com nome, email, telefone e mensagem, deve conter uma seleção para os assuntos "Criação de site institucional", "Criação de landing page" "Analise de meu Site" e ao clicar em enviar, recebe confirmação de sucesso e seus dados são salvos no banco de dados

### Implementation for User Story 2

- [ ] T029 [P] [US2] Create Zod schema for lead form in src/lib/schemas.ts (leadSchema)
- [ ] T030 [P] [US2] Create orçamento form component in src/components/forms/orcamento-form.tsx
- [ ] T031 [P] [US2] Create dialog/modal component for orçamento form in src/components/ui/orcamento-dialog.tsx
- [ ] T032 [US2] Implement lead submission server action in src/actions/leads.ts (createLead)
- [ ] T033 [US2] Create POST /api/leads endpoint in src/app/api/leads/route.ts
- [ ] T034 [US2] Implement duplicate email validation for leads in src/lib/validation.ts
- [ ] T035 [US2] Add success toast/notification after form submission
- [ ] T036 [US2] Add loading states during form submission
- [ ] T037 [US2] Track CTA click event with Umami in orcamento-form.tsx

**Checkpoint**: User Story 2 fully functional - form submits and saves to database

---

## Phase 5: User Story 3 - Visitante baixa checklist gratuito (Priority: P1) 🎯 MVP

**Goal**: Formulário para download de checklist com campos nome e email, que envia PDF por email

**Independent Test**: Visitante insere email válido no campo designado, clica no botão de receber checklist, recebe email de confirmação com PDF anexado

### Implementation for User Story 3

- [ ] T038 [P] [US3] Create Zod schema for checklist form in src/lib/schemas.ts (checklistSchema)
- [ ] T039 [P] [US3] Create checklist form component in src/components/forms/checklist-form.tsx
- [ ] T040 [P] [US3] Create dialog/modal component for checklist form in src/components/ui/checklist-dialog.tsx
- [ ] T041 [US3] Implement checklist server action in src/actions/checklist.ts (subscribeToChecklist)
- [ ] T042 [US3] Create POST /api/checklist endpoint in src/app/api/checklist/route.ts
- [ ] T043 [US3] Implement email template for checklist in src/lib/email/templates/checklist.ts
- [ ] T044 [US3] Send email with PDF using Resend in src/lib/email/send-checklist.ts
- [ ] T045 [US3] Implement duplicate email check (prevent same email twice)
- [ ] T046 [US3] Add success message after checklist signup
- [ ] T047 [US3] Track checklist download event with Umami in checklist-form.tsx

**Checkpoint**: User Story 3 fully functional - checklist form submits, sends email with PDF

---

## Phase 6: User Story 4 - Visitante utiliza IA para tirar dúvidas (Priority: P2)

**Goal**: Chat com IA acessível via botão flutuante que responde dúvidas sobre criação de sites, SEO e serviços

**Independent Test**: Usuário clica no botão de "Tire suas dúvidas com IA", abre um chat onde pode fazer perguntas sobre criação de sites, SEO ou serviços oferecidos, e recebe respostas relevantes em tempo real

### Implementation for User Story 4

- [ ] T048 [P] [US4] Create AI chat button component in src/components/ui/ai-chat-button.tsx
- [ ] T049 [P] [US4] Create AI chat dialog component in src/components/ui/ai-chat-dialog.tsx
- [ ] T050 [P] [US4] Create chat message components in src/components/chat/chat-message.tsx
- [ ] T051 [US4] Implement chat input component in src/components/chat/chat-input.tsx
- [ ] T052 [US4] Create POST /api/chat endpoint with streaming in src/app/api/chat/route.ts
- [ ] T053 [US4] Configure AI prompt for web development expertise in src/lib/ai/prompts.ts
- [ ] T054 [US4] Implement conversation history management in src/lib/ai/chat-state.ts
- [ ] T055 [US4] Add loading state during AI response generation
- [ ] T056 [US4] Implement fallback message when AI is unavailable in ai-chat-dialog.tsx

**Checkpoint**: User Story 4 fully functional - AI chat opens, responds to questions about web development

---

## Phase 7: User Story 5 - Visitante visualiza portfólio de projetos (Priority: P2)

**Goal**: Página de portfólio com grid de projetos, detalhes ao clicar e links ativos

**Independent Test**: Usuário acessa seção de portfólio e visualiza lista de projetos com imagens, descrições e links ativos

### Implementation for User Story 5

- [ ] T057 [P] [US5] Create portfolio page in src/app/(routes)/portfolio/page.tsx
- [ ] T058 [P] [US5] Create project card component in src/components/sections/portfolio-card.tsx
- [ ] T059 [P] [US5] Create project grid component in src/components/sections/portfolio-grid.tsx
- [ ] T060 [P] [US5] Add seed data for 3-5 demo projects in src/data/portfolio-seed.ts
- [ ] T061 [US5] Implement project detail modal/sheet in src/components/ui/project-detail.tsx
- [ ] T062 [US5] Add external link functionality for projects with links in portfolio-card.tsx

**Checkpoint**: User Story 5 fully functional - portfolio page shows projects with images and links

---

## Phase 8: User Story 6 - Visitante acessa página de contato (Priority: P3)

**Goal**: Página de contato com email, WhatsApp, redes sociais e formulário alternativo

**Independent Test**: Usuário acessa página de contato e encontra: email, WhatsApp, redes sociais e formulário de mensagem

### Implementation for User Story 6

- [ ] T063 [P] [US6] Create contact page in src/app/(routes)/contato/page.tsx
- [ ] T064 [P] [US6] Create contact info component with email and phone in src/components/sections/contato-info.tsx
- [ ] [T065] [P] [US6] Create WhatsApp link with pre-filled message in src/components/ui/whatsapp-link.tsx
- [ ] T066 [US6] Create contact form component in src/components/forms/contato-form.tsx
- [ ] T067 [US6] Implement contact form submission (reuses leads table) in src/actions/contato.ts

**Checkpoint**: User Story 6 fully functional - contact page with all contact options

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T068 [P] Add favicon and manifest.json for PWA capabilities in src/app/
- [ ] T069 [P] Add 404 error page in src/app/not-found.tsx
- [ ] T070 [P] Add loading.tsx skeletons for better UX in src/app/(routes)/
- [ ] T071 Verify all pages pass Lighthouse accessibility audit (WCAG 2.1 AA)
- [ ] T072 Test forms with invalid data and edge cases
- [ ] T073 Test responsive behavior across all breakpoints (mobile, tablet, desktop)
- [ ] T074 Run quickstart.md validation
- [ ] T075 [P] Optimize images using next/image in all sections
- [ ] T076 Verify SEO meta tags and Open Graph on all public pages

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Form dependencies only (schemas, UI components from foundational)
- **User Story 3 (P1)**: Can start after Foundational (Phase 2) - Email setup from foundational
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - AI SDK configured in foundational
- **User Story 5 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 6 (P3)**: Can start after Foundational (Phase 2) - Reuses leads table from US2

### Within Each User Story

- Models (if any) before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T001-T006)
- All Foundational tasks marked [P] can run in parallel (T007-T014)
- T015-T021 (US1 sections) can run in parallel
- T029-T031 (US2 form setup) can run in parallel
- T038-T040 (US3 form setup) can run in parallel
- T048-T050 (US4 chat UI) can run in parallel
- T057-T060 (US5 portfolio) can run in parallel
- T063-T066 (US6 contato) can run in parallel
- Once Foundational phase completes, US1, US2, US3 can start in parallel
- US4, US5, US6 can start in parallel after Foundational

---

## Parallel Example: MVP (User Stories 1, 2, 3)

```bash
# These can run in parallel after Foundational phase (T007-T014):

# User Story 1 - Landing Page Sections:
Task: "Create Hero section component in src/components/sections/hero.tsx"
Task: "Create Benefits section component in src/components/sections/beneficios.tsx"
Task: "Create Diferenciais section component in src/components/sections/diferenciais.tsx"
Task: "Create Processo section component in src/components/sections/processo.tsx"
Task: "Create Prova Social section component in src/components/sections/prova-social.tsx"
Task: "Create FAQ section component in src/components/sections/faq.tsx"
Task: "Create Footer section component in src/components/sections/footer.tsx"

# User Story 2 - Orçamento Form:
Task: "Create Zod schema for lead form in src/lib/schemas.ts"
Task: "Create orçamento form component in src/components/forms/orcamento-form.tsx"
Task: "Create dialog/modal component for orçamento form"

# User Story 3 - Checklist:
Task: "Create Zod schema for checklist form in src/lib/schemas.ts"
Task: "Create checklist form component in src/components/forms/checklist-form.tsx"
Task: "Create dialog/modal component for checklist form"
```

---

## Implementation Strategy

### MVP First (User Stories 1-3 Only)

1. Complete Phase 1: Setup (T001-T006)
2. Complete Phase 2: Foundational (T007-T014) - CRITICAL blocks all stories
3. Complete Phase 3: User Story 1 (T015-T028) - Landing page with all sections
4. Complete Phase 4: User Story 2 (T029-T037) - Orçamento form with DB save
5. Complete Phase 5: User Story 3 (T038-T047) - Checklist form with email
6. **STOP and VALIDATE**: Test MVP independently
7. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 4 → Test independently → Deploy/Demo
4. Add User Story 5 → Test independently → Deploy/Demo
5. Add User Story 6 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Landing Page)
   - Developer B: User Story 2 (Orçamento Form)
   - Developer C: User Story 3 (Checklist)
3. Stories complete and integrate independently
4. Continue with US4, US5, US6 in parallel

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence