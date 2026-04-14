import { getFaqs } from '@/actions/faqs';
import { DiagnosticoEstrategico } from '@/components/sections/diagnostico-estrategico';
import { Diferenciais } from '@/components/sections/diferenciais';
import { EngenhariaValor } from '@/components/sections/engenharia-valor';
import { FAQSection } from '@/components/sections/faq';
import { Processo } from '@/components/sections/processo';
import { StackTecnologica } from '@/components/sections/stack-tecnologica';
import { Testimonials } from '@/components/sections/testimonials';
import { Hero } from './_components/hero';

export default async function Home() {
  const faqs = await getFaqs();

  return (
    <main>
      <Hero />
      <DiagnosticoEstrategico />
      <EngenhariaValor />
      <StackTecnologica />
      <Diferenciais />
      <Processo />
      <Testimonials />
      <FAQSection faqs={faqs} />
    </main>
  );
}
