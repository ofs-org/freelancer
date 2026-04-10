# Data Model: Landing Page para Captação de Leads

## Entidades

### Lead

Entidade principal para captação de leads através do formulário de orçamento.

| Campo | Tipo | Obrigatório | Validação | Descrição |
|-------|------|--------------|-----------|------------|
| id | uuid | Sim | Auto-generated | Identificador único |
| nome | string | Sim | min 2, max 100 | Nome completo do lead |
| email | string | Sim | Email válido, unique | Email do lead |
| telefone | string | Não | Pattern: phone | Telefone com DDD |
| empresa | string | Não | max 200 | Nome da empresa |
| mensagem | text | Não | max 2000 | Mensagem do lead |
| assunto | enum | Sim | 'criacao_site', 'landing_page', 'analise_site' | Tipo de serviço |
| created_at | timestamp | Sim | Auto-generated | Data de criação |

**Relacionamentos**: N/A

**Estado**: Novo lead → Lead qualificado (via follow-up)

---

### ChecklistLead

Entidade para leads que下载 o checklist gratuito.

| Campo | Tipo | Obrigatório | Validação | Descrição |
|-------|------|--------------|-----------|------------|
| id | uuid | Sim | Auto-generated | Identificador único |
| nome | string | Sim | min 2, max 100 | Nome do usuário |
| email | string | Sim | Email válido, unique | Email do usuário |
| downloaded_at | timestamp | Sim | Auto-generated | Data do download |
| email_sent | boolean | Sim | Default: false | Confirmação de envio do email |

**Relacionamentos**: N/A

**Estado**: Pendente → Email enviado

---

### Projeto

Projetos do portfólio.

| Campo | Tipo | Obrigatório | Validação | Descrição |
|-------|------|--------------|-----------|------------|
| id | uuid | Sim | Auto-generated | Identificador único |
| titulo | string | Sim | min 3, max 200 | Título do projeto |
| descricao | text | Sim | min 10, max 2000 | Descrição detalhada |
| thumbnail | string | Sim | URL válida | Imagem de capa |
| imagens | string[] | Não | Array de URLs | Galeria de imagens |
| link | string | Não | URL válida | Link para o projeto |
| nicho | string | Não | max 100 | Nicho/categoria |
| created_at | timestamp | Sim | Auto-generated | Data de criação |

**Relacionamentos**: N/A

---

### FAQ

Perguntas frequentes para a página.

| Campo | Tipo | Obrigatório | Validação | Descrição |
|-------|------|--------------|-----------|------------|
| id | uuid | Sim | Auto-generated | Identificador único |
| pergunta | string | Sim | min 10, max 500 | Pergunta |
| resposta | text | Sim | min 20, max 2000 | Resposta |
| ordem | integer | Sim | >= 0 | Ordenação |
| created_at | timestamp | Sim | Auto-generated | Data de criação |

**Relacionamentos**: N/A

---

## Índices

- `leads_email_idx` on `leads(email)` - Únicidade e lookup
- `checklist_leads_email_idx` on `checklist_leads(email)` - Únicidade
- `faq_ordem_idx` on `faq(ordem)` - Ordenação

---

## Migrations

```sql
-- Tabela de Leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  telefone VARCHAR(20),
  empresa VARCHAR(200),
  mensagem TEXT,
  assunto VARCHAR(50) NOT NULL CHECK (assunto IN ('criacao_site', 'landing_page', 'analise_site')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Checklist Leads
CREATE TABLE checklist_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_sent BOOLEAN DEFAULT FALSE
);

-- Tabela de Projetos
CREATE TABLE projetos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(200) NOT NULL,
  descricao TEXT NOT NULL,
  thumbnail VARCHAR(500) NOT NULL,
  imagens TEXT[], -- Array de URLs
  link VARCHAR(500),
  nicho VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de FAQ
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pergunta VARCHAR(500) NOT NULL,
  resposta TEXT NOT NULL,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```