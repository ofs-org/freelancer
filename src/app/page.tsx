import { DiagnosticoEstrategico } from "@/components/sections/diagnostico-estrategico";
import { EngenhariaValor } from "@/components/sections/engenharia-valor";
import { Processo } from "@/components/sections/processo";
import { StackTecnologica } from "@/components/sections/stack-tecnologica";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <DiagnosticoEstrategico />
      <EngenhariaValor />
      <StackTecnologica />
      <Processo />
    </main>
  );
}
