"use client";

import { MenuIcon } from "@/components/icons/menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MessageCircleMoreIcon } from "../icons/message-circle-more";
import { XIcon } from "../icons/x";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "/projects", label: "Portfolio" },
  { href: "/contacts", label: "Contato" },
];

interface MobileMenuProps {
  isScrolled?: boolean;
}

export function MobileMenu({ isScrolled = false }: MobileMenuProps) {
  const iconColor = isScrolled ? "text-on-surface" : "text-white";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
          type="button"
          className={cn(
            "flex size-10 items-center justify-center rounded-lg transition-colors duration-300",
            "hover:bg-surface-variant/50 active:scale-95",
            "focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
            "md:hidden",
            iconColor,
          )}
          aria-label="Abrir menu de navegação"
        >
          <MenuIcon size={28} />
        </Button>
      </SheetTrigger>

      <SheetContent
        className="p-6 h-screen"
        side="right"
        variant="glass"
        showCloseButton={false}
      >
        <div className="flex flex-row items-center justify-between">
          <Link
            href="/"
            className="font-body text-xl font-bold tracking-wide text-on-surface"
          >
            OFS
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon-lg" className="text-on-surface">
              <XIcon size={26} />
              <span className="sr-only">Fechar menu</span>
            </Button>
          </SheetClose>
        </div>

        <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center px-3 py-3 rounded-lg font-body text-sm font-semibold uppercase tracking-tight",
                  "text-on-surface transition-colors duration-200",
                  "hover:bg-surface-variant/50 active:scale-95",
                )}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <Button asChild variant="primary" size="lg" className="mt-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5511945348146"
            className="flex gap-2"
          >
            <MessageCircleMoreIcon size={20} />
            WhatsApp
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
