'use server';
import { asc } from 'drizzle-orm';
import { type FAQ, faqs } from '@/db/schema';
import { db } from '@/lib/db';

export async function getFaqs(): Promise<FAQ[]> {
  return db.select().from(faqs).orderBy(asc(faqs.ordem)) as Promise<FAQ[]>;
}
