'use client';

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Testimonial {
  id: string;
  nome: string;
  cargo: string;
  empresa: string;
  imagem: string;
  depoimento: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    nome: 'Ricardo Menezes',
    cargo: 'CEO',
    empresa: 'TechFlow',
    imagem:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    depoimento:
      'A entrega superou todas as expectativas. Não apenas o site ficou lindo, mas a velocidade de carregamento triplicou nossas conversões em menos de um mês.',
  },
  {
    id: '2',
    nome: 'Ana Luísa',
    cargo: 'Fundadora',
    empresa: 'Lume Studio',
    imagem:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    depoimento:
      'Trabalhar com o Sovereign Architect foi a melhor decisão para nossa marca. O entendimento de UX e business é diferenciado.',
  },
  {
    id: '3',
    nome: 'Marco Silva',
    cargo: 'CTO',
    empresa: 'Inova Digital',
    imagem:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    depoimento:
      'A performance do site é impressionante. Conseguimos lidar com 10x mais tráfego sem degradar a experiência do usuário.',
  },
  {
    id: '4',
    nome: 'Sofia Oliveira',
    cargo: 'CMO',
    empresa: 'Vertex Brand',
    imagem:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
    depoimento:
      'Nosso site sempre foi um problema até trabalhar com eles. Agora somos encontrados no Google e convertemos mais que o dobro.',
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="h-full py-24"
    >
      <Card
        variant="elevated"
        className="h-full p-4 md:p-8 min-h-[200px] md:min-h-[320px]"
      >
        <CardContent className="p-0">
          <Quote
            className="text-primary text-4xl md:text-5xl mb-4 md:mb-6"
            aria-hidden="true"
          />
          <p className="text-base md:text-xl italic text-on-surface leading-relaxed mb-4 md:mb-8 font-light line-clamp-4 md:line-clamp-4">
            &ldquo;{testimonial.depoimento}&rdquo;
          </p>
        </CardContent>
        <CardFooter className="pt-2 md:pt-4 mt-auto border-t border-outline-variant/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-surface-container shrink-0">
              <Image
                src={testimonial.imagem}
                alt={`Foto de ${testimonial.nome}`}
                width={48}
                height={48}
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-on-surface text-sm md:text-base">
                {testimonial.nome}
              </p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">
                {testimonial.cargo} @ {testimonial.empresa}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  const scrollTo = useCallback((direction: 'prev' | 'next') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  const handleScrollPrev = useCallback(() => {
    scrollTo('prev');
  }, [scrollTo]);

  const handleScrollNext = useCallback(() => {
    scrollTo('next');
  }, [scrollTo]);

  return (
    <section
      className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto"
      aria-labelledby="testimonials-title"
    >
      <div className="text-center mb-8 md:mb-16">
        <h2
          id="testimonials-title"
          className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-3 md:mb-4 text-on-surface"
        >
          O que nossos parceiros dizem
        </h2>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={handleScrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary-container hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Ver depoimento anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 px-8 md:px-12 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-none w-[85%] md:w-1/2 snap-center"
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleScrollNext}
          disabled={!canScrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary-container hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Ver próximo depoimento"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
