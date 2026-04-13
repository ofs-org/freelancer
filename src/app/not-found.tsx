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
import { ArrowRight, Building2Icon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound(): React.JSX.Element {
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");

  useEffect(() => {
    if (shareState !== "copied") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setShareState("idle");
    }, 2000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [shareState]);

  async function handleShare(): Promise<void> {
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "OFS Freelancer",
          text: "Confira esta pagina da OFS Freelancer.",
          url: shareUrl,
        });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareState("copied");
    } catch {
      window.prompt("Copie o link desta pagina:", shareUrl);
    }
  }

  return (
    <div className="relative grid min-h-dvh grid-rows-[minmax(0,1fr)_auto] overflow-x-hidden bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <motion.main
        className="relative flex items-center justify-center overflow-x-hidden px-6 py-6 sm:px-8 lg:px-10"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          variants={fadeInVariants}
        >
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-surface-container-highest/50 rounded-full blur-[100px]" />
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
            height="100%"
            width="100%"
            role="img"
            aria-label="Grid pattern background"
          >
            <title>Grid Pattern</title>
            <defs>
              <pattern
                height="40"
                id="grid"
                patternUnits="userSpaceOnUse"
                width="40"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%" />
          </svg>
        </motion.div>
        <div className="relative z-10 grid h-full w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <section className="flex min-w-0 flex-col justify-center py-8 lg:py-12">
            <div className="w-full space-y-8 lg:max-w-144">
              <motion.div
                className="w-full space-y-4"
                variants={fadeInUpVariants}
              >
                <Badge size="md" variant="secondary">
                  Status Code: 404
                </Badge>
                <h1 className="text-[96px] font-extrabold leading-none text-on-surface sm:text-[128px] lg:text-[180px] editorial-letter-spacing">
                  404
                </h1>
                <p className="w-full max-w-[16ch] text-2xl font-medium leading-[1.15] text-on-surface/80 md:text-3xl">
                  Esta coordenada nao existe no nosso mapa de excelencia.
                </p>
              </motion.div>
              <motion.p
                className="w-full max-w-120 text-base leading-relaxed text-on-surface-variant/70 md:text-lg"
                variants={fadeInUpVariants}
              >
                O recurso que voce procura foi movido, removido ou nunca existiu
                nesta blueprint digital. Vamos redirecionar sua trajetoria.
              </motion.p>
              <motion.div
                className="flex w-full flex-col gap-4 sm:flex-row"
                variants={fadeInScaleVariants}
              >
                <motion.div
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button asChild variant="primary" size="lg">
                    <Link href="/">
                      <span>Voltar para a Home</span>
                      <ArrowRight />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/contato">
                      <span>Portfolio</span>
                      <ArrowRight />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <motion.section
            className="relative hidden h-full min-w-0 items-center justify-center overflow-hidden lg:flex"
            variants={fadeInScaleVariants}
          >
            <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-outline-variant/40 to-transparent" />
            <div className="relative z-10 flex h-full w-full items-center justify-center py-12">
              <div className="relative aspect-4/5 h-full max-h-[820px] w-full max-w-[560px]">
                <div className="absolute inset-0 overflow-hidden rounded-lg border border-outline-variant/15 glass-card shadow-[0_32px_64px_rgba(0,0,0,0.08)]">
                  <Image
                    alt="Architectural Blueprint"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABVMxEROcj3r-VtMlNdQJqMTjig4Cm_KdbWCLHDLD1KJdn2eHwZCzsyXRlyf9C6sIjGSZ2cPpfUbtC5xrX-b06psIIa_7ZECXPK15yYo9JL8BPu4OcSuUVFYfnR0RJxfq3pcrYu9nLGRzdS-XRGylh0jRgbogP525STMTK2gT754TiTETOPKL1P-WLmWJCakxzfgcaE4FdOCgHhnDVKqAMoNRfVXzLoWc4RXVszfkx_lQfSUkox8RIeZbiPm961o1ydqCTeicsssI"
                    fill
                    priority
                    sizes="50vw"
                    className="object-cover opacity-45"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/40 via-transparent to-transparent" />
                  <div className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary-container/30">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-primary-container/50 animate-pulse">
                      <div className="h-2 w-2 rounded-full bg-primary-container" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 flex flex-col gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/45">
                    <span>Coord: 51.5074° N, 0.1278° W</span>
                    <span>Elevation: 14m</span>
                    <span>System Status: Null Reference</span>
                  </div>
                </div>
                <div className="absolute -right-4 top-6 z-20 flex h-24 w-24 rotate-6 items-center justify-center rounded-lg bg-primary-container shadow-lg">
                  <Building2Icon className="h-10 w-10 text-on-primary-container" />
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.main>
    </div>
  );
}
