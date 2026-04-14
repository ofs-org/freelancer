'use client';

import { Code, Search, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from '@/lib/animation-variants';

const processos = [
  {
    id: 1,
    title: 'Discovery & Estratégia',
    description:
      'Entendemos seu negócio, seus KPIs e onde você quer chegar. Planejamos a jornada do usuário perfeita.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Arquitetura & UX Design',
    description:
      'Criamos protótipos de alta fidelidade focados em usabilidade e estética premium, garantindo aprovação total.',
    icon: Settings,
  },
  {
    id: 3,
    title: 'Desenvolvimento de Elite',
    description:
      'Transformamos design em código de alta performance, utilizando a stack mais moderna do mercado global.',
    icon: Code,
  },
];

interface ProcessoCardProps {
  processo: (typeof processos)[number];
  index: number;
  isLeft: boolean;
}

function ProcessoCard({ processo, index, isLeft }: ProcessoCardProps) {
  const Icon = processo.icon;

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      custom={index}
      transition={{ delay: index * 0.2 }}
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
        isLeft ? '' : 'md:flex-row-reverse'
      }`}
    >
      <div
        className={`w-full md:w-1/2 text-center md:text-left ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-on-surface">
          {processo.title}
        </h3>
        <p className="text-sm md:text-base text-on-surface-variant">
          {processo.description}
        </p>
      </div>

      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container flex items-center justify-center shrink-0 z-10 shadow-lg">
        <Icon className="size-5 md:size-6 font-bold text-on-primary-container" />
      </div>

      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  );
}

export function Processo() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-4 md:gap-8"
        >
          <div className="max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 md:mb-4 text-on-surface">
              Como trabalhamos juntos
            </h2>
            <p className="text-on-surface-variant">
              Um processo transparente e focado na entrega de valor contínuo.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 w-px h-full bg-outline-variant/30 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24 relative">
            {processos.map((processo, index) => (
              <ProcessoCard
                key={processo.id}
                processo={processo}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
