"use client";

import { ArrowRightIcon, LayersIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";

const SCROLL_THRESHOLD = 5200;

export interface StickyCtaProps {
  className?: string;
}

export function StickyCta({ className }: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > SCROLL_THRESHOLD;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed bottom-30 left-1/2 -translate-x-1/2 z-40 ${className ?? ""}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 bg-surface/90 backdrop-blur-md border border-outline-variant rounded-full px-4 py-2 shadow-lg">
            <Button asChild variant="secondary" size="sm">
              <Link href="/contacts">
                <LayersIcon className="size-4" />
                Ver Portfólio
              </Link>
            </Button>
            <Button asChild variant="primary" size="sm">
              <Link href="/contacts">
                Iniciar Projeto
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
