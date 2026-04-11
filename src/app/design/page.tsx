'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';

function DialogExample() {
  const [open, setOpen] = useState(false);
  const [glassOpen, setGlassOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
          Default
        </h2>
        <div className="max-w-md">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="primary" onClick={() => setOpen(true)}>
                Abrir Dialog
              </Button>
            </DialogTrigger>
            <DialogContent open={open}>
              <DialogHeader>
                <DialogTitle>Título do Dialog</DialogTitle>
                <DialogDescription>
                  Descrição opcional do dialog.
                </DialogDescription>
              </DialogHeader>
              <p className="text-on-surface">
                Conteúdo principal do dialog aqui.
              </p>
              <DialogFooter>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setOpen(false)}
                >
                  Confirmar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
          Glass
        </h2>
        <div className="bg-inverse-surface p-8 rounded-xl max-w-md">
          <Dialog open={glassOpen} onOpenChange={setGlassOpen}>
            <DialogTrigger asChild>
              <Button variant="glass" onClick={() => setGlassOpen(true)}>
                Abrir Glass Dialog
              </Button>
            </DialogTrigger>
            <DialogContent open={glassOpen} variant="glass" size="lg">
              <DialogHeader>
                <DialogTitle className="text-white">Glass Modal</DialogTitle>
                <DialogDescription className="text-white/70">
                  Modal com efeito glass morphism.
                </DialogDescription>
              </DialogHeader>
              <p className="text-white">
                Ideal para fundos escuros e imagens de fundo.
              </p>
              <DialogFooter>
                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => setGlassOpen(false)}
                >
                  Fechar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

function SheetExample({ glass = false }: { glass?: boolean }) {
  const [open, setOpen] = useState(false);

  const variant = glass ? 'glass' : 'default';

  return (
    <div className="max-w-md">
      <Button
        variant={glass ? 'glass' : 'primary'}
        onClick={() => setOpen(true)}
      >
        Abrir Sheet
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent open={open} title="Menu" variant={variant}>
          <nav className="space-y-2">
            <button
              type="button"
              className={`block w-full text-left py-2 px-3 rounded-lg ${glass ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-on-surface hover:bg-surface-container'}`}
            >
              Início
            </button>
            <button
              type="button"
              className={`block w-full text-left py-2 px-3 rounded-lg ${glass ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-on-surface hover:bg-surface-container'}`}
            >
              Serviços
            </button>
            <button
              type="button"
              className={`block w-full text-left py-2 px-3 rounded-lg ${glass ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-on-surface hover:bg-surface-container'}`}
            >
              Portfolio
            </button>
            <button
              type="button"
              className={`block w-full text-left py-2 px-3 rounded-lg ${glass ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-on-surface hover:bg-surface-container'}`}
            >
              Contato
            </button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-surface p-8 md:p-16">
      <div className="max-w-6xl mx-auto space-y-20">
        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Badge</h1>
          <p className="text-on-surface-variant mb-8">
            Componente para tags, labels e indicadores.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Primary
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary" size="sm">
                  Small
                </Badge>
                <Badge variant="primary" size="md">
                  Medium
                </Badge>
                <Badge variant="primary" size="lg">
                  Large
                </Badge>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Secondary
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" size="sm">
                  Small
                </Badge>
                <Badge variant="secondary" size="md">
                  Medium
                </Badge>
                <Badge variant="secondary" size="lg">
                  Large
                </Badge>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Tertiary
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge variant="tertiary" size="sm">
                  Small
                </Badge>
                <Badge variant="tertiary" size="md">
                  Medium
                </Badge>
                <Badge variant="tertiary" size="lg">
                  Large
                </Badge>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Error
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge variant="error" size="sm">
                  Small
                </Badge>
                <Badge variant="error" size="md">
                  Medium
                </Badge>
                <Badge variant="error" size="lg">
                  Large
                </Badge>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Neutral
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge variant="neutral" size="sm">
                  Small
                </Badge>
                <Badge variant="neutral" size="md">
                  Medium
                </Badge>
                <Badge variant="neutral" size="lg">
                  Large
                </Badge>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Dark Pill
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge variant="dark-pill" size="sm">
                  Small
                </Badge>
                <Badge variant="dark-pill" size="md">
                  Medium
                </Badge>
                <Badge variant="dark-pill" size="lg">
                  Large
                </Badge>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Outline Primary
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline-primary" size="sm">
                  Small
                </Badge>
                <Badge variant="outline-primary" size="md">
                  Medium
                </Badge>
                <Badge variant="outline-primary" size="lg">
                  Large
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Button</h1>
          <p className="text-on-surface-variant mb-8">
            Botões com variantes para diferentes contextos.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Primary
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
                <Button variant="primary" size="xl">
                  Extra Large
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Secondary
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="sm">
                  Small
                </Button>
                <Button variant="secondary" size="md">
                  Medium
                </Button>
                <Button variant="secondary" size="lg">
                  Large
                </Button>
                <Button variant="secondary" size="xl">
                  Extra Large
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Ghost
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" size="sm">
                  Small
                </Button>
                <Button variant="ghost" size="md">
                  Medium
                </Button>
                <Button variant="ghost" size="lg">
                  Large
                </Button>
                <Button variant="ghost" size="xl">
                  Extra Large
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Glass
              </h2>
              <div className="bg-inverse-surface p-8 rounded-xl flex flex-wrap gap-3">
                <Button variant="glass" size="sm">
                  Small
                </Button>
                <Button variant="glass" size="md">
                  Medium
                </Button>
                <Button variant="glass" size="lg">
                  Large
                </Button>
                <Button variant="glass" size="xl">
                  Extra Large
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Input</h1>
          <p className="text-on-surface-variant mb-8">
            Campos de entrada com estados visuais.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Default
              </h2>
              <div className="max-w-md">
                <Input placeholder="Seu melhor e-mail" />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                With Label
              </h2>
              <div className="max-w-md space-y-2">
                <label
                  htmlFor="email-design"
                  className="text-sm font-medium text-on-surface"
                >
                  E-mail
                </label>
                <Input
                  id="email-design"
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Error
              </h2>
              <div className="max-w-md space-y-2">
                <label
                  htmlFor="email-error"
                  className="text-sm font-medium text-on-surface"
                >
                  E-mail
                </label>
                <Input
                  id="email-error"
                  variant="error"
                  defaultValue="email-invalido"
                />
                <p className="text-sm text-error">E-mail inválido</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Disabled
              </h2>
              <div className="max-w-md">
                <Input
                  variant="disabled"
                  placeholder="Campo desabilitado"
                  disabled
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Textarea</h1>
          <p className="text-on-surface-variant mb-8">
            Campo de texto multilinha.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Default
              </h2>
              <div className="max-w-md">
                <Textarea placeholder="Sua mensagem..." />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                With Label
              </h2>
              <div className="max-w-md space-y-2">
                <label
                  htmlFor="mensagem-design"
                  className="text-sm font-medium text-on-surface"
                >
                  Mensagem
                </label>
                <Textarea
                  id="mensagem-design"
                  placeholder="Descreva seu projeto..."
                />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Error
              </h2>
              <div className="max-w-md">
                <Textarea variant="error" defaultValue="Mensagem com erro" />
                <p className="text-sm text-error mt-1">Campo obrigatório</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Card</h1>
          <p className="text-on-surface-variant mb-8">
            Containers para conteúdo.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Default
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle>Título do Card</CardTitle>
                  <CardDescription>Descrição opcional</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-on-surface">Conteúdo principal.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">
                    Ação
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Elevated
              </h2>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Card Elevado</CardTitle>
                  <CardDescription>Com sombra</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-on-surface">Ideal para destacar.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">
                    Ver Mais
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Glass
              </h2>
              <Card variant="glass" className="bg-inverse-surface">
                <CardHeader>
                  <CardTitle className="text-white">Glass Card</CardTitle>
                  <CardDescription className="text-white/70">
                    Para fundos escuros
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">Efeito glass morphism.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="glass" size="sm">
                    Explorar
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Primary Container
              </h2>
              <Card variant="primary-container">
                <CardHeader>
                  <CardTitle variant="primary">Destaque</CardTitle>
                  <CardDescription variant="primary">
                    Background primary
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-on-primary-container">
                    Texto sobre primary.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-on-primary-container"
                  >
                    Saiba Mais
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">
            Typography
          </h1>
          <p className="text-on-surface-variant mb-8">Escala tipográfica.</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Display (64-80px, 800)
              </h2>
              <p className="text-[64px] leading-none font-extrabold tracking-tighter text-on-surface">
                Transformе em <span className="text-primary">vendedor.</span>
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Headline 1 (48-56px, 800)
              </h2>
              <p className="text-5xl font-extrabold tracking-tighter leading-tight text-on-surface">
                Stack de Elite
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Headline 2 (32-40px, 700)
              </h2>
              <p className="text-4xl font-bold tracking-tight leading-snug text-on-surface">
                Por que escolher?
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Title Large (24px, 700)
              </h2>
              <p className="text-2xl font-bold tracking-tight text-on-surface">
                Título de Componente
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Title (20px, 600)
              </h2>
              <p className="text-xl font-semibold text-on-surface">
                Label de Seção
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Body Large (18-20px)
              </h2>
              <p className="text-lg text-on-surface leading-relaxed">
                Texto introdutório.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Body (16px)
              </h2>
              <p className="text-base text-on-surface leading-relaxed">
                Texto corrido.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Body Small (14px)
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Descrições secundárias.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Label (10-12px)
              </h2>
              <div className="flex flex-wrap gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                  Label Small
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Label Large
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Colors</h1>
          <p className="text-on-surface-variant mb-8">Paleta de cores.</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Primary
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#D0F336] flex items-center justify-center">
                    <span className="text-[#181E00] font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    primary #D0F336
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#FFFFFF] flex items-center justify-center">
                    <span className="text-[#181E00] font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    on-primary #FFF
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#D0F336] flex items-center justify-center">
                    <span className="text-[#181E00] font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">container</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#181E00] flex items-center justify-center">
                    <span className="text-[#D0F336] font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    on-container #181E00
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Secondary
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#566516] flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    secondary #566516
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-white flex items-center justify-center">
                    <span className="text-[#566516] font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    on-secondary #FFF
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#D6E98B] flex items-center justify-center">
                    <span className="text-[#5A691A] font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    container #D6E98B
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#5A691A] flex items-center justify-center">
                    <span className="text-[#D6E98B] font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    on-container #5A691A
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Error
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#BA1A1A] flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    error #BA1A1A
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#FFDAD6] flex items-center justify-center">
                    <span className="text-[#93000A] font-bold">A</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    container #FFDAD6
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Spacing</h1>
          <p className="text-on-surface-variant mb-8">
            Sistema de espaçamento (múltiplos de 4px).
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="bg-primary rounded w-4 h-4"></div>
              <p className="text-sm font-medium text-on-surface">xs (4px)</p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary rounded w-8 h-8"></div>
              <p className="text-sm font-medium text-on-surface">sm (8px)</p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary rounded w-16 h-16"></div>
              <p className="text-sm font-medium text-on-surface">md (16px)</p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary rounded w-24 h-24"></div>
              <p className="text-sm font-medium text-on-surface">lg (24px)</p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">
            Border Radius
          </h1>
          <p className="text-on-surface-variant mb-8">
            Valores de raio de borda.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="space-y-2">
              <div className="bg-primary h-16 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-on-primary-container">
                  xs
                </span>
              </div>
              <p className="text-sm text-on-surface-variant text-center">4px</p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary h-16 rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-on-primary-container">
                  sm
                </span>
              </div>
              <p className="text-sm text-on-surface-variant text-center">8px</p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary h-16 rounded-md flex items-center justify-center">
                <span className="text-xs font-bold text-on-primary-container">
                  md
                </span>
              </div>
              <p className="text-sm text-on-surface-variant text-center">
                16px
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary h-16 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-on-primary-container">
                  lg
                </span>
              </div>
              <p className="text-sm text-on-surface-variant text-center">
                32px
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary h-16 rounded-xl flex items-center justify-center">
                <span className="text-xs font-bold text-on-primary-container">
                  xl
                </span>
              </div>
              <p className="text-sm text-on-surface-variant text-center">
                48px
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary h-16 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-on-primary-container">
                  full
                </span>
              </div>
              <p className="text-sm text-on-surface-variant text-center">
                9999px
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Shadows</h1>
          <p className="text-on-surface-variant mb-8">Níveis de elevação.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="h-24 bg-surface-container-lowest rounded-lg"></div>
              <p className="text-sm text-on-surface-variant text-center">
                Flat
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-surface-container-lowest rounded-lg shadow-low"></div>
              <p className="text-sm text-on-surface-variant text-center">Low</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-surface-container-lowest rounded-lg shadow-medium"></div>
              <p className="text-sm text-on-surface-variant text-center">
                Medium
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-surface-container-lowest rounded-lg shadow-high"></div>
              <p className="text-sm text-on-surface-variant text-center">
                High
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Select</h1>
          <p className="text-on-surface-variant mb-8">
            Campo de seleção com opções.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Default
              </h2>
              <div className="max-w-md">
                <Select
                  label="Assunto"
                  placeholder="Selecione uma opção"
                  options={[
                    {
                      value: 'criacao_site',
                      label: 'Criação de site institucional',
                    },
                    { value: 'landing_page', label: 'Criação de landing page' },
                    { value: 'analise_site', label: 'Análise do meu site' },
                  ]}
                />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                With Error
              </h2>
              <div className="max-w-md">
                <Select
                  label="Serviço"
                  variant="error"
                  error="Selecione um serviço"
                  options={[
                    { value: 'site', label: 'Site' },
                    { value: 'app', label: 'App' },
                  ]}
                />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Disabled
              </h2>
              <div className="max-w-md">
                <Select
                  label="Categoria"
                  variant="disabled"
                  options={[{ value: '1', label: 'Opção 1' }]}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Dialog</h1>
          <p className="text-on-surface-variant mb-8">
            Modal para diálogos e formulários.
          </p>

          <DialogExample />
        </section>

        <section>
          <h1 className="text-4xl font-black text-on-surface mb-2">Sheet</h1>
          <p className="text-on-surface-variant mb-8">
            Painel lateral para menus e conteúdo complementar.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Default (Right)
              </h2>
              <SheetExample />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-on-surface-variant mb-4">
                Glass
              </h2>
              <div className="bg-inverse-surface p-8 rounded-xl max-w-md">
                <SheetExample glass />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
