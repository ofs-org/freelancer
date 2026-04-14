# Feature Specification: Landing Page para Captação de Leads

**Feature Branch**: `002-landing-page-leads`  
**Created**: 2026-04-09  
**Status**: Draft  
**Input**: User description: "Quero construir um landing page com foco em Captação de Leads para a construção de Landing pages e sites institucionais e aplicações web com Foco em SEO acessibilidade e conversão em novos clientes. Divulgação de meus projetos através de uma pagina de portfolio e uma pagina de contato e dúvida com formulários. pontos de sucesso MVP: ele deve conter as seguintes áreas conforme os arquivos de prd.md e copy.md; ele deve conter 02 botões para a captação de Leads, onde um vai ser direcionado para um formulário que ira capturar os dados enviados e salvos no banco de dados e outra com um botão para receber um checklist gratuito onde ela vai se cadastrar inserindo o seu email e recebera um email com um pdf de como fazer um checklist gratuito para verificar o que um site precisa para se converter. Proximo passo: integração de IA como um botão de agente de código que vai ser uma IA integrada a minha landing Page que ira tirar qualquer dúvida dos assuntos abordados na landing page na criação de sites, SEO etc."

## User Scenarios & Testing

### User Story 1 - Visitante acessa a landing page e compreende a proposta de valor (Priority: P1)

Como potencial cliente que busca serviços de criação de sites, ao acessar a landing page, preciso entender rapidamente o serviço oferecido e os benefícios, para que eu possa decidir se quero saber mais.

**Why this priority**: Este é o caminho principal de todos os visitantes. Se não conseguirem entender o valor em segundos, abandonarão a página.

**Independent Test**: Visitante acessa URL da página e em até 5 segundos consegue identificar: quem oferece o serviço, para quem é indicado, e qual ação tomar.

**Acceptance Scenarios**:

1. **Given** usuário acessa a página pela primeira vez, **When** a página carrega completamente, **Then** ele visualiza headline principal, subtítulo e botões de CTA visíveis no viewport de 375px (mobile) sem scroll
2. **Given** usuário visualiza a seção Hero, **When** olha para os botões de CTA, **Then** compreende que há duas opções: solicitar orçamento ou receber auditoria gratuita

---

### User Story 2 - Visitante solicita orçamento através do formulário (Priority: P1)

Como empresário com necessidade de site profissional, ao clicar no botão de solicitar orçamento, preciso preencher um formulário com meus dados para receber um contato, para que eu possa iniciar uma conversa sobre meu projeto.

**Why this priority**: Este é o principal funil de conversão da página. Sem ele, não há captação de leads qualificados.

**Independent Test**: Usuário preenche formulário de contato com nome, email, telefone e mensagem, e deve conter uma seleção para os assuntos "Criação de site institucional", "Criação de landing page" "Analise de meu Site" e ao clicar em enviar, recebe confirmação de sucesso e seus dados são salvos no banco de dados.

**Acceptance Scenarios**:

1. **Given** usuário clica no botão "Solicitar Orçamento", **When** o formulário abre em modal ou página dedicada, **Then** ele vê campos para: nome, email, telefone, empresa um campo de seleção do assunto e mensagem
2. **Given** usuário preenche todos os campos obrigatórios corretamente, **When** clica em enviar, **Then** recebe mensagem de sucesso e os dados são armazenados
3. **Given** usuário tenta enviar formulário com campos obrigatórios vazios, **Then** recebe mensagem de erro indicando quais campos são obrigatórios
4. **Given** usuário insere email inválido, **Then** sistema exibe erro de validação de email

---

### User Story 3 - Visitante baixa checklist gratuito (Priority: P1)

Como empresário que quer avaliar seu site atual, ao clicar no botão de checklist gratuito, preciso inserir apenas meu email para receber um PDF com perguntas que me ajudarão a identificar problemas no meu site, para que eu possa entender o que preciso melhorar.

**Why this priority**: Este lead magnet atrai visitantes com menor intenção de compra mas que podem se tornar clientes no futuro. É uma forma de captação mais leve que o formulário completo.

**Independent Test**: Visitante insere email válido no campo designado, clica no botão de receber checklist, recebe email de confirmação com PDF anexado.

**Acceptance Scenarios**:

1. **Given** usuário acessa seção de lead magnet, **When** visualiza a proposta do checklist gratuito, **Then** vê campos para nome e email
2. **Given** usuário preenche nome e email válidos, **When** clica em "Quero receber o material", **Then** recebe mensagem de sucesso e email com PDF é enviado
3. **Given** usuário tenta acessar checklist sem preencher email, **Then** recebe mensagem de erro indicando campo obrigatório
4. **Given** usuário insere email que já foi cadastrado anteriormente, **Then** sistema informa que email já está cadastrado

---

### User Story 4 - Visitante utiliza IA para tirar dúvidas (Priority: P2)

Como potencial cliente interested in web development services, ao ter dúvidas sobre criação de sites, SEO ou relevância dos serviços, preciso acessar um assistente de IA diretamente na página, para que eu possa obter respostas imediatas sem precisar esperar por contato humano.

**Why this priority**: Este recurso diferencia a página e demonstra expertise técnica. Pode acelerar a decisão de compra ou qualificar melhor o lead.

**Independent Test**: Usuário clica no botão de "Tire suas dúvidas com IA",(Botão no final da pagina com um ícone de agente de IA) abre um chat onde pode fazer perguntas sobre criação de sites, SEO ou serviços oferecidos, e recebe respostas relevantes em tempo real.

**Acceptance Scenarios**:

1. **Given** usuário clica no botão de chat com IA, **When** interface de chat abre, **Then** ele pode digitar perguntas sobre os tópicos abordados na página
2. **Given** usuário faz uma pergunta sobre SEO, **When** envia a pergunta, **Then** recebe resposta relevante sobre o tema em segundos
3. **Given** usuário faz pergunta fora do escopo de serviços web, **Then** IA responde de forma educada indicando que só pode ajudar com dúvidas relacionadas a serviços oferecidos
4. **Given** usuário fecha o chat, **When** minimiza ou fecha a janela, **Then** pode reabrir a qualquer momento através do botão flutuante

---

### User Story 5 - Visitante visualiza portfólio de projetos (Priority: P2)

Como potencial cliente que quer avaliar a qualidade do trabalho, ao navegar até a seção de portfólio, preciso visualizar os projetos desenvolvidos com resultados obtidos, para que eu possa decidir se o profissional atende minhas expectativas.

**Why this priority**: A prova social é fundamental para construir credibilidade. Empresas locais precisam ver casos similares ao seu.

**Independent Test**: Usuário acessa seção de portfólio e visualiza lista de projetos com imagens, descrições e links ativos.

**Acceptance Scenarios**:

1. **Given** usuário acessa página de portfólio, **When** a página carrega, **Then** visualiza grid de projetos com thumbnails, nomes e descrições resumidas
2. **Given** usuário clica em um projeto específico, **Then** abre detalhes completos com imagens, desafio, solução e resultados
3. **Given** projeto possui link ativo, **When** usuário clica no link, **Then** abre o site em nova aba

---

### User Story 6 - Visitante acessa página de contato (Priority: P3)

Como potencial cliente que prefere outras formas de contato, ao navegar até a página de contato, preciso encontrar informações de contato e formulário alternativo, para que eu possa entrar em contato da forma que for mais conveniente.

**Why this priority**: Alguns visitantes preferem não usar formulários. Disponibilizar múltiplos canais de contato aumenta a chance de conversão.

**Independent Test**: Usuário acessa página de contato e encontra: email, WhatsApp, redes sociais e formulário de mensagem.

**Acceptance Scenarios**:

1. **Given** usuário acessa página de contato, **When** a página carrega, **Then** visualiza informações de contato (email, WhatsApp) e formulário de mensagem
2. **Given** usuário clica no botão do WhatsApp, **Then** abre conversa no WhatsApp com mensagem pré-definida
3. **Given** usuário preenche formulário de contato, **When** envia mensagem, **Then** recebe confirmação de envio

---

### Edge Cases

- O que acontece quando o banco de dados está indisponível ao salvar lead?
- Como o sistema lida com múltiplos envios do mesmo email para checklist?
- O que acontece se o servidor de email estiver indisponível ao enviar checklist?
- Como a IA lida com perguntas em idiomas diferente do português?
- O que acontece se as imagens do portfólio falharem ao carregar?

### Edge Case Handling

| Edge Case | Handling |
|------------|----------|
| BD indisponível ao salvar lead | Queue request, retry up to 3 times, show friendly error |
| Múltiplos envios mesmo email (checklist) | Mostrar "email já cadastrado" - não permitir re-download |
| Servidor de email indisponível | Mostrar erro, permitir retry manual |
| Perguntas em outros idiomas | IA responde em português indicando limitação |
| Imagens portfólio falham | Mostrar placeholder com ícone de imagem |

## Requirements

### Functional Requirements

- **FR-001**: A página deve exibir as seguintes seções: Hero, Problema, Solução, Benefícios, Diferenciais, Processo, Prova Social/Portfólio, Lead Magnet, FAQ, Footer
- **FR-002**: O botão de "Solicitar Orçamento" deve abrir um formulário com campos: nome, email, telefone, empresa (opcional), seleção de assunto e mensagem
- **FR-003**: Os dados do formulário de orçamento devem ser salvos em banco de dados com timestamp
- **FR-004**: O formulário de orçamento deve validar todos os campos obrigatórios antes do envio
- **FR-005**: O botão de "Checklist Gratuito" deve abrir formulário com campos: nome, email
- **FR-006**: Após preenchimento do formulário de checklist, deve ser enviado email com PDF anexado
- **FR-007**: O sistema deve evitar duplicate entries para o checklist (mesmo email não pode receber o mesmo material duas vezes)
- **FR-008**: Deve existir um botão flutuante de IA que abre chat para tirar dúvidas
- **FR-009**: O chat com IA deve responder perguntas sobre: criação de sites, landing pages, sites institucionais, SEO, performance web, usabilidade
- **FR-010**: A página de portfólio deve exibir projetos com thumbnail, título, descrição e link quando aplicável
- **FR-011**: A página de contato deve exibir: email, WhatsApp, formulário alternativo
- **FR-012**: O site deve ser otimizado para mobile (mobile first)
- **FR-013**: O site deve ter SEO técnico implementado (meta tags, schema markup, Open Graph)
- **FR-014**: O site deve ter botões de WhatsApp acessíveis
- **FR-015**: Deve haver tracking de eventos: click em CTA, submit formulário, scroll 50%, click WhatsApp, download lead magnet
- **FR-016**: A página deve ter CTA sticky visível durante navegação

### Key Entities

- **Lead**: Dados do potencial cliente captado através de formulário (nome, email, telefone, empresa, mensagem, data_criacao, origem)
- **ChecklistLead**: Dados do lead que baixou o checklist (nome, email, data_download)
- **Projeto**: Projeto do portfólio (titulo, descricao, thumbnail, imagens, link, nicho)
- **FAQ**: Pergunta frequente com resposta (pergunta, resposta, ordem)

## Success Criteria

### Technical Requirements (Buildable)

- **SC-005**: O site deve ter Lighthouse score superior a 90 em performance, accessibility, best practices e SEO
- **SC-006**: O formulário de orçamento deve confirmar envio em menos de 3 segundos após submissão
- **SC-007**: O email com checklist deve ser enviado em até 5 minutos após cadastro
- **SC-008**: A IA deve responder dúvidas em menos de 10 segundos

### Business KPIs (Post-MVP Tracking)

> ⚠️ Estas métricas são resultados de negócio que devem ser rastreadas **após o lançamento** via analytics, não como tasks de desenvolvimento MVP.

- **SC-001**: Taxa de conversão da página deve ser superior a 3% (relação visitantes que preenchem formulário / visitantes únicos)
- **SC-002**: Tempo médio na página deve ser superior a 1 minuto
- **SC-003**: Taxa de clique nos botões de CTA deve ser superior a 5%
- **SC-004**: A página deve gerar mais de 5 leads por semana

## Assumptions

- Os leads serão armazenados em PostgreSQL com tabela de leads e checklist_leads
- O envio de emails será feito via Resend API
- A IA será integrada via Vercel AI SDK ou solução similar
- O projeto usará Next.js 16+ com App Router
- O design será minimalista, corporativo e profissional conforme especificado no PRD
- O portfólio inicialmente terá 3-5 projetos demonstrativos que podem ser substituídos posteriormente
- O WhatsApp usará API direta com link wa.me
- O tracking será implementado com Google Analytics ou ferramenta similar

## Clarifications

### Session 2026-04-09

- Q: Data protection framework → A: LGPD (Lei Geral de Proteção de Dados)
- Q: External services failure modes → A: Database unavailable - queue requests (retry up to 3 times); Email unavailable - show error but allow retry; IA unavailable - show friendly fallback message
- Q: Scalability targets (monthly visitors) → A: 10,000 unique visitors/month (MVP scope)
- Q: Uptime SLA target → A: 99% availability (monthly basis)
