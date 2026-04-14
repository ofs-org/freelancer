'use server';
import { faqs } from '@/db/schema';
import { db } from '@/lib/db';

const faqData = [
  {
    pergunta: 'Qual o prazo médio de entrega?',
    resposta:
      'O prazo varia conforme a complexidade, mas projetos institucionais de alto padrão costumam levar entre 4 a 6 semanas, do discovery ao deploy.',
    ordem: 1,
  },
  {
    pergunta: 'Você faz a manutenção do site depois?',
    resposta:
      'Sim, ofereço planos de manutenção mensal para garantir que seu site continue atualizado, seguro e performando no máximo 100% do tempo.',
    ordem: 2,
  },
  {
    pergunta: 'Trabalha com empresas de fora do Brasil?',
    resposta:
      'Com certeza. Atendo clientes globalmente, com fluidez em Inglês e experiência em projetos internacionais de alta exigência.',
    ordem: 3,
  },
];

export async function seedFaqs(): Promise<void> {
  const existing = await db.select().from(faqs).limit(1);
  if (existing.length > 0) {
    return;
  }

  await db.insert(faqs).values(faqData);
}
