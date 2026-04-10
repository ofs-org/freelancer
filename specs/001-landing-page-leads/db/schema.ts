import { pgTable, uuid, varchar, text, timestamp, boolean, integer, pgEnum, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const leadAssuntoEnum = pgEnum('lead_assunto', ['criacao_site', 'landing_page', 'analise_site']);

export const leads = pgTable('leads', {
  id: uuid('id').defaultRandom().primaryKey(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  telefone: varchar('telefone', { length: 20 }),
  empresa: varchar('empresa', { length: 200 }),
  mensagem: text('mensagem'),
  assunto: leadAssuntoEnum('assunto').notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
}, (table) => ({
  emailIdx: uniqueIndex('leads_email_idx').on(table.email),
}));

export const checklistLeads = pgTable('checklist_leads', {
  id: uuid('id').defaultRandom().primaryKey(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  downloadedAt: timestamp('downloaded_at', { mode: 'string' }).defaultNow().notNull(),
  emailSent: boolean('email_sent').default(false).notNull(),
}, (table) => ({
  emailIdx: uniqueIndex('checklist_leads_email_idx').on(table.email),
}));

export const projetos = pgTable('projetos', {
  id: uuid('id').defaultRandom().primaryKey(),
  titulo: varchar('titulo', { length: 200 }).notNull(),
  descricao: text('descricao').notNull(),
  thumbnail: varchar('thumbnail', { length: 500 }).notNull(),
  imagens: text('imagens').array(),
  link: varchar('link', { length: 500 }),
  nicho: varchar('nicho', { length: 100 }),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
});

export const faqs = pgTable('faqs', {
  id: uuid('id').defaultRandom().primaryKey(),
  pergunta: varchar('pergunta', { length: 500 }).notNull(),
  resposta: text('resposta').notNull(),
  ordem: integer('ordem').default(0).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
}, (table) => ({
  ordemIdx: index('faq_ordem_idx').on(table.ordem),
}));

export const leadsRelations = relations(leads, ({ many }) => ({}));

export const checklistLeadsRelations = relations(checklistLeads, ({ many }) => ({}));

export const projetosRelations = relations(projetos, ({ many }) => ({}));

export const faqsRelations = relations(faqs, ({ many }) => ({}));

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
export type ChecklistLead = typeof checklistLeads.$inferSelect;
export type NewChecklistLead = typeof checklistLeads.$inferInsert;
export type Projeto = typeof projetos.$inferSelect;
export type NewProjeto = typeof projetos.$inferInsert;
export type Faq = typeof faqs.$inferSelect;
export type NewFaq = typeof faqs.$inferInsert;