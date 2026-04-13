import { DiagnosticoEstrategico } from '@/components/sections/diagnostico-estrategico';
import { EngenhariaValor } from '@/components/sections/engenharia-valor';
import { Hero } from './_components/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <DiagnosticoEstrategico />
      <EngenhariaValor />
    </main>
  );
}
