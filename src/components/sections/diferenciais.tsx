"use client";

import { fadeInUpVariants } from "@/lib/animation-variants";
import { motion } from "motion/react";

const diferenciais = [
  {
    id: "design-exclusivo",
    numero: "01",
    titulo: "Design Exclusivo",
    descricao:
      "Nada de templates prontos. Sua marca merece uma identidade única e autêntica.",
  },
  {
    id: "seo-estrutural",
    numero: "02",
    titulo: "SEO Estrutural",
    descricao:
      "Seu site é construído para ser lido e amado pelo Google desde o primeiro código.",
  },
  {
    id: "suporte-premium",
    numero: "03",
    titulo: "Suporte Premium",
    descricao:
      "Acompanhamento próximo e direto, sem camadas de burocracia ou atendimento robotizado.",
  },
  {
    id: "escalabilidade",
    numero: "04",
    titulo: "Escalabilidade",
    descricao:
      "Sistemas preparados para aguentar picos de tráfego sem queda de performance.",
  },
];

export function Diferenciais() {
  return (
    <section className="py-40 bg-surface-container border-y border-outline-variant/5">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-20 max-w-2xl text-on-surface">
          Ao trabalhar comigo você terá...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {diferenciais.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <span className="text-6xl md:text-7xl font-extrabold text-tertiary mb-8 block leading-none tracking-tighter  group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.numero}
              </span>
              <h4 className="font-extrabold text-2xl mb-4 tracking-tight text-on-surface">
                {item.titulo}
              </h4>
              <p className="text-on-surface-variant text-base leading-relaxed font-medium">
                {item.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
