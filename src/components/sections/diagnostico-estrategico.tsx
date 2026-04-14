"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/animation-variants";
import { ChevronRight, Gauge, Palette, Target } from "lucide-react";
import { motion } from "motion/react";

const problemas = [
  {
    id: "lentidao",
    icon: Gauge,
    titulo: "Lentidão",
    tituloDestaque: "Fatal",
    descricao:
      "O luxo é instantâneo. Cada milissegundo de espera reduz sua credibilidade e afasta leads qualificados.",
    solucao: "Análise de Performance",
  },
  {
    id: "layout",
    icon: Palette,
    titulo: "Layout",
    tituloDestaque: "Genérico",
    descricao:
      "Templates matam a exclusividade. Sua marca precisa de uma interface que exala autoridade e sofisticação técnica.",
    solucao: "Design Personalizado",
  },
  {
    id: "conversao",
    icon: Target,
    titulo: "Abismo de",
    tituloDestaque: "Conversão",
    descricao:
      "Tráfego sem conversão é desperdício. Sem um funil intuitivo, você está deixando dinheiro sobre a mesa.",
    solucao: "Estratégia de CRO",
  },
];

export function DiagnosticoEstrategico() {
  return (
    <section
      id="solucoes"
      className="relative py-16 md:py-32 lg:py-48 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#F0F4E0_0%,transparent_50%)] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32"
        >
          <motion.div variants={fadeInUpVariants}>
            <Badge
              variant="secondary"
              className="mb-8 font-bold uppercase tracking-[0.2em] text-[10px]"
            >
              Diagnóstico Estratégico
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]"
          >
            Por que seu site
            <br className="hidden md:block" />
            <span className="text-ring"> não está trazendo clientes?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            className="text-base text-balance md:text-xl lg:text-2xl leading-relaxed font-light max-w-3xl md:max-w-3xl"
          >
            No mercado de alto padrão, a excelência não é opcional. Pequenas
            falhas técnicas tornam-se grandes abismos de faturamento.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problemas.map((problema, _index) => {
            const Icon = problema.icon;

            return (
              <motion.div key={problema.id} variants={fadeInUpVariants}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Card
                    variant="glass"
                    className="group border-black/20! p-6 md:p-12 rounded-lg h-full md:h-136 hover:border-primary/20 transition-all duration-300"
                  >
                    <CardContent className="flex flex-col items-start h-full p-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.96 }}
                        className="mb-6 md:mb-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary-subtle flex items-center justify-center group-hover:bg-primary transition-colors duration-500"
                      >
                        <Icon className="size-10 text-on-secondary-fixed-variant group-hover:text-on-primary-container transition-colors duration-500" />
                      </motion.div>

                      <motion.h3
                        whileHover={{ x: 3 }}
                        className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight text-secondary"
                      >
                        {problema.titulo}
                        <br />
                        <span className="text-primary">
                          {problema.tituloDestaque}
                        </span>
                      </motion.h3>

                      <motion.p
                        whileHover={{ x: 3 }}
                        className=" text-on-primary text-lg leading-relaxed font-medium mb-8"
                      >
                        {problema.descricao}
                      </motion.p>

                      <motion.div className="mt-auto flex items-center gap-2 text-secondary font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        <span>{problema.solucao}</span>
                        <motion.div whileHover={{ x: 2 }} whileTap={{ x: 1 }}>
                          <ChevronRight className="size-4" />
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
