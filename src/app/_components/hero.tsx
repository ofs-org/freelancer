"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  buttonHoverVariants,
  fadeInScaleVariants,
  fadeInUpVariants,
  fadeInVariants,
  heroContainerVariants,
} from "@/lib/animation-variants";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { StatsBar } from "./stats-bar";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
      <div className="absolute inset-0 w-full h-full">
        <Image
          alt="Escritório moderno"
          src="https://images.pexels.com/photos/8353783/pexels-photo-8353783.jpeg?auto=compress&cs=tinysrgb&w=2560"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        className="relative z-10 pt-20 px-8 max-w-7xl mx-auto w-full"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl">
          <motion.div variants={fadeInUpVariants}>
            <Badge
              variant="outline-primary"
              className="glass-panel mb-6 gap-4 px-6"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary-container"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="font-body text-xs text-white font-extrabold uppercase tracking-[0.2em]">
                Lighthouse Score 100/100
              </span>
            </Badge>
          </motion.div>

          <motion.p
            variants={fadeInUpVariants}
            className="font-body text-xl md:text-2xl text-white/70 leading-relaxed mb-3 font-medium tracking-tight"
          >
            Seu site não é apenas um custo.
          </motion.p>

          <motion.h1
            variants={fadeInUpVariants}
            className="font-heading font-extrabold tracking-tighter leading-[0.9] mb-10 text-white text-6xl md:text-8xl"
          >
            <span className="block opacity-90 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Transforme em
            </span>
            <span className="text-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
              seu maior vendedor.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUpVariants}
            className="font-body text-lg md:text-2xl text-white/80 leading-[1.6] mb-12 max-w-3xl font-light tracking-wide"
          >
            Convertemos visões complexas em interfaces intuitivas que carregam
            em milissegundos.{" "}
            <span className="font-semibold text-white">
              Performance de elite para resultados reais.
            </span>
          </motion.p>

          <motion.div
            variants={fadeInScaleVariants}
            className="flex flex-wrap gap-6  mb-8"
          >
            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                asChild
                variant="primary"
                size="lg"
                className="font-body bg-primary text-on-primary hover:shadow-primary"
              >
                <Link href="/contacts">
                  Iniciar Projeto
                  <ArrowRightIcon className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                asChild
                variant="glass"
                size="lg"
                className="font-body text-white"
              >
                <Link href="/projects">Ver Portfólio</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUpVariants}>
            <StatsBar />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-1 left-1/2 -translate-x-1/2"
      >
        <div className="flex animate-bounce flex-col items-center gap-2 text-white/30">
          <ChevronDownIcon className="h-8 w-8" />
          <ChevronDownIcon className="-mt-7 h-8 w-8" />
        </div>
      </motion.div>
    </section>
  );
}
