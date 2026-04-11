import { z } from 'zod';

export const ASSUNTO_ENUM = [
  'criacao_site',
  'landing_page',
  'analise_site',
] as const;

export type Assunto = (typeof ASSUNTO_ENUM)[number];

export const leadSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z
    .string()
    .max(20, 'Telefone deve ter no máximo 20 caracteres')
    .optional()
    .or(z.literal('')),
  empresa: z
    .string()
    .max(200, 'Empresa deve ter no máximo 200 caracteres')
    .optional()
    .or(z.literal('')),
  mensagem: z.string().optional().or(z.literal('')),
  assunto: z.enum(ASSUNTO_ENUM, {
    message: 'Selecione um assunto',
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export const checklistSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string().email('Email inválido'),
});

export type ChecklistFormData = z.infer<typeof checklistSchema>;

export const contatoSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z
    .string()
    .max(20, 'Telefone deve ter no máximo 20 caracteres')
    .optional()
    .or(z.literal('')),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export type ContatoFormData = z.infer<typeof contatoSchema>;
