'use client';

import { Building2, MousePointerClick, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from '@/lib/animation-variants';

const beneficios = [
  {
    id: 'velocidade',
    icon: Zap,
    titulo: 'Foco em Velocidade',
    descricao:
      'Utilizo frameworks modernos que priorizam a entrega de conteúdo instantânea.',
  },
  {
    id: 'arquitetura',
    icon: Building2,
    titulo: 'Arquitetura Limpa',
    descricao:
      'Código escalável e fácil de manter, garantindo que seu site cresça com seu negócio.',
  },
  {
    id: 'cro',
    icon: MousePointerClick,
    titulo: 'Otimização de Conversão (CRO)',
    descricao: 'Cada pixel é pensado para guiar o usuário até a ação desejada.',
  },
];

const imagens = [
  {
    src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Team meeting tech',
  },
  {
    src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Technology coding',
  },
  {
    src: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mobile app design',
  },
  {
    src: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Modern office',
  },
];

export function EngenhariaValor() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-3 md:space-y-4 pt-6 md:pt-12">
              <motion.div
                variants={fadeInUpVariants}
                className="relative h-40 md:h-64 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0">
                  <Image
                    src={imagens[0].src}
                    alt={imagens[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUpVariants}>
                <Card variant="primary-container">
                  <CardContent className="text-center p-0">
                    <p className="font-heading font-black  text-xl leading-tight text-on-primary-container">
                      Engenharia de Valor
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div variants={fadeInUpVariants}>
                <Card>
                  <CardContent className="text-center p-0">
                    <p className="font-heading font-black text-xl leading-tight text-on-surface-variant">
                      Design que Converte
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                variants={fadeInUpVariants}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0">
                  <Image
                    src={imagens[1].src}
                    alt={imagens[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="order-1 lg:order-2"
        >
          <motion.div variants={fadeInUpVariants}>
            <Badge
              variant="primary"
              className="font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              A Solução
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUpVariants}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-6 md:mb-8 leading-tight text-tertiary"
          >
            Eu desenvolvo experiências digitais que geram resultado.
          </motion.h2>

          <div className="space-y-8">
            {beneficios.map((beneficio, _index) => {
              const Icon = beneficio.icon;

              return (
                <motion.div
                  key={beneficio.id}
                  variants={fadeInUpVariants}
                  className="flex gap-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-12 h-12 shrink-0 rounded-full  flex items-center justify-center"
                  >
                    <Icon className="size-10 text-primary" />
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }}>
                    <h4 className="font-heading font-bold text-lg mb-2 text">
                      {beneficio.titulo}
                    </h4>
                    <p className="text-sm">{beneficio.descricao}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
