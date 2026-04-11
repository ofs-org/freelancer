import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const ASSUNTO_ENUM = [
  'criacao_site',
  'landing_page',
  'analise_site',
] as const;
export type Assunto = (typeof ASSUNTO_ENUM)[number];

export const leads = pgTable('leads', {
  id: uuid('id').primaryKey().defaultRandom(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  telefone: varchar('telefone', { length: 20 }),
  empresa: varchar('empresa', { length: 200 }),
  mensagem: text('mensagem'),
  assunto: varchar('assunto', { length: 50 }).$type<Assunto>().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const checklistLeads = pgTable('checklist_leads', {
  id: uuid('id').primaryKey().defaultRandom(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  downloadedAt: timestamp('downloaded_at').defaultNow().notNull(),
  emailSent: boolean('email_sent').default(false).notNull(),
});

export const projetos = pgTable('projetos', {
  id: uuid('id').primaryKey().defaultRandom(),
  titulo: varchar('titulo', { length: 200 }).notNull(),
  descricao: text('descricao').notNull(),
  thumbnail: varchar('thumbnail', { length: 500 }).notNull(),
  imagens: text('imagens').array(),
  link: varchar('link', { length: 500 }),
  nicho: varchar('nicho', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const faqs = pgTable(
  'faqs',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    pergunta: varchar('pergunta', { length: 500 }).notNull(),
    resposta: text('resposta').notNull(),
    ordem: integer('ordem').notNull().default(0),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    ordemIdx: uniqueIndex('faq_ordem_idx').on(table.ordem),
  })
);

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
export type ChecklistLead = typeof checklistLeads.$inferSelect;
export type NewChecklistLead = typeof checklistLeads.$inferInsert;
export type Projeto = typeof projetos.$inferSelect;
export type NewProjeto = typeof projetos.$inferInsert;
export type FAQ = typeof faqs.$inferSelect;
export type NewFAQ = typeof faqs.$inferInsert;
