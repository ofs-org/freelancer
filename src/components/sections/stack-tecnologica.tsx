'use client';

import { Cloud, Plug, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeInUpVariants } from '@/lib/animation-variants';

const stackItems = [
  {
    id: 'fullstack',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    title: 'Full-Stack Moderno',
    description:
      'Especialista em ecossistemas Next.js e React, proporcionando a melhor experiência de desenvolvimento e performance do usuário final.',
    tags: ['Next', 'React', 'Tailwind', 'Node.js'],
    icon: Terminal,
    bg: 'bg-primary/70',
    padding: 'p-16',
    hasIconTop: true,
    hasTags: true,
  },
  {
    id: 'seguranca',
    colSpan: 'md:col-span-1',
    title: 'Segurança Máxima',
    subtitle: 'SSL & Data Privacy',
    icon: null,
    bg: 'bg-surface-container-lowest',
    padding: 'p-8',
    hasIconTop: false,
    hasSubtitle: true,
  },
  {
    id: 'cloud',
    colSpan: 'md:col-span-1',
    title: 'Cloud Edge Deployment',
    description: 'Infraestrutura global de borda para performance máxima.',
    icon: Cloud,
    bg: 'bg-surface-container-lowest',
    padding: 'p-8',
    hasIconTop: true,
    hasDescription: true,
  },
  {
    id: 'apis',
    colSpan: 'md:col-span-2',
    title: 'Integrações API',
    description: 'Express, Fastify, CMS & mais.',
    icon: Plug,
    bg: 'bg-surface-container-lowest',
    padding: 'p-8',
    hasIconTop: true,
    hasDescription: true,
  },
];

export function StackTecnologica() {
  return (
    <section id="tecnologias" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-on-surface flex items-center justify-center gap-3">
            <Terminal className="size-8  text-primary" />
            Stack Tecnológica de Elite
          </h2>
          <p className="text-on-surface-variant">
            Tecnologias de ponta para resultados extraordinários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:min-h-[600px]">
          {stackItems.map((item, index) => {
            const Icon = item.icon;
            const isLarge = item.rowSpan === 'md:row-span-2';
            const isPrimary =
              item.bg === 'bg-primary' || item.bg === 'bg-primary-container';

            return (
              <motion.div
                key={item.id}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                custom={index}
                transition={{ delay: index * 0.1 }}
                className={`${item.colSpan} ${item.rowSpan || ''} ${item.bg} ${item.padding} rounded-xl ${
                  !isPrimary ? 'shadow-sm border border-outline-variant/10' : ''
                } flex ${
                  isLarge
                    ? 'flex-col justify-between'
                    : isPrimary
                      ? 'flex-col justify-end'
                      : 'flex-row items-center justify-between'
                } apple-card group`}
              >
                <div className={isLarge ? 'flex-1' : ''}>
                  {item.hasIconTop && Icon && (
                    <div className="w-16 h-16 bg-primary-container  flex items-center justify-center rounded-lg mb-6">
                      <Icon className="text-4xl text-secondary size-10" />
                    </div>
                  )}

                  {!item.hasIconTop && !isPrimary && Icon && (
                    <Icon className="text3xl  text-primary mb-4" />
                  )}

                  {item.hasSubtitle && (
                    <p className="text-xs font-black tracking-widest uppercase mb-2 text-on-primary/80">
                      {item.subtitle}
                    </p>
                  )}

                  <h3
                    className={`font-bold text-xl md:text-2xl mb-2 ${
                      isPrimary ? 'text-on-primary' : 'text-on-surface'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {item.hasDescription && item.description && (
                    <p className="text-sm text-on-surface-variant">
                      {item.description}
                    </p>
                  )}

                  {!item.hasDescription && !item.hasSubtitle && (
                    <p className="text-md text-on-surface-variant">
                      {item.description}
                    </p>
                  )}
                </div>

                {isLarge && item.hasTags && (
                  <div className="flex flex-wrap gap-2 mt-8">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-on-surface-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
