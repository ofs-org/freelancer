"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageSquareMoreIcon } from "../icons/message-square-more";
import { Button } from "./button";

interface WhatsAppFloatProps {
  phoneNumber?: string;
  defaultMessage?: string;
  className?: string;
}

const DEFAULT_PHONE = "5511968336094";
const DEFAULT_MESSAGE =
  "Olá! Gostaria de saber mais sobre os serviços de criação de sites.";

export function WhatsAppFloat({
  phoneNumber = DEFAULT_PHONE,
  defaultMessage = DEFAULT_MESSAGE,
  className,
}: WhatsAppFloatProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed bottom-50 right-6 z-50 ${className ?? ""}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            asChild
            variant="primary"
            className="size-16 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] [&_svg]:size-10!"
          >
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
            >
              <MessageSquareMoreIcon />
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
