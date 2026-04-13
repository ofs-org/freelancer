"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageCircleMoreIcon } from "../icons/message-circle-more";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "/projects", label: "Portfolio" },
  { href: "/contacts", label: "Contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        isScrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "font-body text-2xl font-bold tracking-wide transition-colors duration-300",
            isScrolled ? "text-on-surface" : "text-white",
          )}
        >
          OFS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-12 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-sm font-semibold uppercase tracking-tight transition-colors duration-300",
                isScrolled
                  ? "text-on-surface hover:text-on-surface/80"
                  : "text-white/60 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild variant="primary" size="md" className="">
            <Link
              target="_blank "
              className="flex gap-2 justify-content"
              href="https://wa.me/5511945348146"
            >
              <MessageCircleMoreIcon size={22} />
              WhatsApp
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isScrolled={isScrolled} />
      </nav>
    </header>
  );
}
