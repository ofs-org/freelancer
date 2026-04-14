import { seedFaqs } from './faq-seed.js';

async function main() {
  await seedFaqs();
  console.log('FAQ seed completed');
}

main();
