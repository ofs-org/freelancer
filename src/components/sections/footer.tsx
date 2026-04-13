"use client";
import { Check, Mail, Share2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";

import {
  buttonHoverVariants,
  fadeInScaleVariants,
  fadeInUpVariants,
  fadeInVariants,
} from "@/lib/animation-variants";
import { useEffect, useState } from "react";

const Footer = () => {
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
    <footer>
      <motion.footer
        className="relative z-10 w-full border-t border-outline-variant/30 bg-surface-container-low/90 backdrop-blur-sm"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <motion.div
            className="flex flex-col gap-2"
            variants={fadeInUpVariants}
          >
            <span className="text-2xl font-black text-on-surface">OFS</span>
            <p className="font-body text-xs tracking-widest uppercase text-on-surface/40">
              © 2026 Oliveira FullStack Development System.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-6 md:gap-8"
            variants={fadeInUpVariants}
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest uppercase text-on-surface/40 transition-colors duration-200 hover:text-primary-container"
            >
              Github
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest uppercase text-on-surface/40 transition-colors duration-200 hover:text-primary-container"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="font-body text-xs tracking-widest uppercase text-on-surface/40 transition-colors duration-200 hover:text-primary-container"
            >
              Source Code
            </Link>
            <Link
              href="#"
              className="font-body text-xs tracking-widest uppercase text-on-surface/40 transition-colors duration-200 hover:text-primary-container"
            >
              Privacy Policy
            </Link>
          </motion.div>
          <motion.div className="flex gap-3" variants={fadeInScaleVariants}>
            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                asChild
                variant="primary"
                size="icon"
                className="rounded-full"
              >
                <Link
                  href="mailto:oliverirafullstack@gmail.com"
                  aria-label="Enviar e-mail para Oliveira FullStack"
                >
                  <Mail />
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
                type="button"
                variant="primary"
                size="icon"
                className="rounded-full"
                aria-label={
                  shareState === "copied"
                    ? "Link copiado para a area de transferencia"
                    : "Compartilhar esta pagina"
                }
                onClick={handleShare}
              >
                {shareState === "copied" ? <Check /> : <Share2 />}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </footer>
  );
};

export default Footer;
