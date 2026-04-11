'use client';

import { Shield, TrendingUp, Zap } from 'lucide-react';
import { Badge } from '@/app/design/badge';
import { Button } from '@/app/design/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/app/design/card';
import { FAQItem } from '@/app/design/faq-item';
import { FeatureCard } from '@/app/design/feature-card';
import { HeroPill } from '@/app/design/hero-pill';
import { SectionBadge } from '@/app/design/section-badge';
import { StatCard } from '@/app/design/stat-card';
import { TestimonialCard } from '@/app/design/testimonial';
import { ActivityIcon } from '@/components/icons/activity';
import { ArchiveIcon } from '@/components/icons/archive';
import { BotMessageSquareIcon } from '@/components/icons/bot-message-square';
import { MenuIcon } from '@/components/icons/menu';
import { MessageCircleMoreIcon } from '@/components/icons/message-circle-more';

export default function DesignPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 space-y-16">
      <header className="space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">
          Design System
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Showcase dos componentes OFS baseados no design tokens e na Landing
          Page Apple Style Premium.
        </p>
      </header>

      {/* BUTTONS */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="glass">Glass</Button>
          <Button variant="solid">Solid</Button>
        </div>

        <h3 className="font-heading text-lg font-medium mt-6 mb-3">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="md">MD</Button>
          <Button size="lg">LG</Button>
          <Button size="xl">XL</Button>
          <Button size="2xl">2XL</Button>
        </div>

        <h3 className="font-heading text-lg font-medium mt-6 mb-3">Loading</h3>
        <div className="flex items-center gap-4">
          <Button loading>Loading</Button>
          <Button loading variant="secondary">
            Loading
          </Button>
        </div>
      </section>

      {/* HERO PILL */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">Hero Pill</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <HeroPill label="Lighthouse Score 100/100" variant="glass" />
          <HeroPill
            label="Performance de Elite"
            variant="glass"
            animation="pulse"
          />
          <HeroPill label="Novo" variant="primary" size="sm" />
          <HeroPill label="Beta" variant="dark" />
          <HeroPill label="Em breve" variant="subtle" size="lg" />
        </div>
      </section>

      {/* SECTION BADGE */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">
          Section Badge
        </h2>
        <div className="flex flex-wrap gap-4">
          <SectionBadge>Design Exclusivo</SectionBadge>
          <SectionBadge variant="primary">SEO Estrutural</SectionBadge>
          <SectionBadge variant="secondary">Suporte Premium</SectionBadge>
          <SectionBadge variant="tertiary">Escalabilidade</SectionBadge>
          <SectionBadge variant="neutral">Em Desenvolvimento</SectionBadge>
          <SectionBadge variant="dark">Modo Escuro</SectionBadge>
          <SectionBadge variant="glass">Glass Effect</SectionBadge>
          <SectionBadge variant="outline">Bordas</SectionBadge>
        </div>

        <h3 className="font-heading text-lg font-medium mt-6 mb-3">With Dot</h3>
        <div className="flex flex-wrap gap-4">
          <SectionBadge dot>Status Online</SectionBadge>
          <SectionBadge dot variant="success">
            Concluído
          </SectionBadge>
          <SectionBadge dot variant="warning">
            Em Progresso
          </SectionBadge>
          <SectionBadge dot variant="destructive">
            Erro
          </SectionBadge>
        </div>
      </section>

      {/* STAT CARD */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">Stat Card</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Performance" value="99.9" suffix="%" trend="up" />
          <StatCard label="Uptime" value="100" suffix="%" trend="up" />
          <StatCard
            label="Conversion"
            value="3.2"
            suffix="x"
            variant="primary"
          />
          <StatCard label="Speed" value="0.8" suffix="s" trend="down" />
        </div>

        <h3 className="font-heading text-lg font-medium mt-6 mb-3">Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Default" value="99.9" suffix="%" variant="default" />
          <StatCard label="Glass" value="99.9" suffix="%" variant="glass" />
          <StatCard label="Primary" value="99.9" suffix="%" variant="primary" />
        </div>
      </section>

      {/* FEATURE CARD */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">
          Feature Card
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Zap}
            title="Foco em Velocidade"
            description="Utilizo frameworks modernos que priorizam a entrega de conteúdo instantânea."
          />
          <FeatureCard
            icon={Shield}
            title="Arquitetura Limpa"
            description="Código escalável e fácil de manter, garantindo que seu site cresça com seu negócio."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Otimização de Conversão"
            description="Cada pixel é pensado para guiar o usuário até a ação desejada."
          />
        </div>

        <h3 className="font-heading text-lg font-medium mt-6 mb-3">Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            variant="glass"
            icon={Zap}
            title="Glass Variant"
            description="Glassmorphism effect para fundos escuros."
          />
          <FeatureCard
            variant="problem"
            icon={Shield}
            title="Problem Card"
            description="Cards interativos com hover effect."
          />
        </div>
      </section>

      {/* TESTIMONIAL CARD */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">
          Testimonial Card
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="A entrega superou todas as expectativas. Não apenas o site ficou lindo, mas a velocidade de carregamento triplicou nossas conversões em menos de um mês."
            author="Ricardo Menezes"
            role="CEO"
            company="TechFlow"
          />
          <TestimonialCard
            quote="Trabalhar com o Sovereign Architect foi a melhor decisão para nossa marca. O entendimento de UX e business é diferenciado."
            author="Ana Luísa"
            role="Fundadora"
            company="Lume Studio"
            variant="glass"
          />
        </div>

        <h3 className="font-heading text-lg font-medium mt-6 mb-3">
          More Variants
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            variant="dark"
            quote="Design excelente e muito profissional."
            author="João Silva"
            role="Director"
            company="Digital Corp"
          />
          <TestimonialCard
            variant="primary"
            quote="Projeto entregue com excelência."
            author="Maria Santos"
            role="CTO"
            company="StartUp Brasil"
          />
        </div>
      </section>

      {/* CARDS */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>
              This is a default card with shadow
            </CardDescription>
            <CardContent>
              <p className="text-sm">Card content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card variant="solid">
            <CardTitle>Solid Card</CardTitle>
            <CardDescription>Solid background variant</CardDescription>
            <CardContent>
              <p className="text-sm">Card content goes here.</p>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardTitle>Glass Card</CardTitle>
            <CardDescription>Glassmorphism effect</CardDescription>
            <CardContent>
              <p className="text-sm">Card content goes here.</p>
            </CardContent>
          </Card>

          <Card variant="outline">
            <CardTitle>Outline Card</CardTitle>
            <CardDescription>Border only variant</CardDescription>
            <CardContent>
              <p className="text-sm">Card content goes here.</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardTitle>Elevated Card</CardTitle>
            <CardDescription>Higher elevation shadow</CardDescription>
            <CardContent>
              <p className="text-sm">Card content goes here.</p>
            </CardContent>
          </Card>

          <Card variant="filled">
            <CardTitle>Filled Card</CardTitle>
            <CardDescription>Filled with surface color</CardDescription>
            <CardContent>
              <p className="text-sm">Card content goes here.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BADGES */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="tertiary">Tertiary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="subtle">Subtle</Badge>
          <Badge variant="solid">Solid</Badge>
          <Badge variant="glass">Glass</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>

        <h3 className="font-heading text-lg font-medium mt-6 mb-3">With Dot</h3>
        <div className="flex flex-wrap gap-4">
          <Badge dot>Default</Badge>
          <Badge dot variant="success">
            Success
          </Badge>
          <Badge dot variant="warning">
            Warning
          </Badge>
          <Badge dot variant="destructive">
            Error
          </Badge>
        </div>
      </section>

      {/* FAQ ITEM */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">FAQ Item</h2>
        <div className="max-w-2xl space-y-4">
          <FAQItem
            question="Qual o prazo médio de entrega?"
            answer="O prazo varia conforme a complexidade, mas projetos institucionais de alto padrão costumam levar entre 4 a 6 semanas, do discovery ao deploy."
          />
          <FAQItem
            question="Você faz a manutenção do site depois?"
            answer="Sim, ofereço planos de manutenção mensal para garantir que seu site continue atualizado, seguro e performando no máximo 100% do tempo."
          />
          <FAQItem
            question="Trabalha com empresas de fora do Brasil?"
            answer="Com certeza. Atendo clientes globalmente, com fluidez em Inglês e experiência em projetos internacionais de alta exigência."
          />
        </div>

        <h3 className="font-heading text-lg font-medium mt-6 mb-3">Variants</h3>
        <div className="max-w-2xl space-y-4">
          <FAQItem
            variant="default"
            question="FAQ Default (border)"
            answer="Resposta com borda inferior."
          />
          <FAQItem
            variant="card"
            question="FAQ Card (rounded)"
            answer="Resposta em card com sombra."
          />
          <FAQItem
            variant="dark"
            question="FAQ Dark (dark mode)"
            answer="Resposta para modo escuro."
          />
        </div>
      </section>

      {/* ICONS */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">Icons</h2>
        <Card>
          <CardTitle>Animated Icons</CardTitle>
          <CardContent className="flex gap-4 flex-wrap">
            <ArchiveIcon />
            <MenuIcon />
            <ActivityIcon />
            <BotMessageSquareIcon />
            <MessageCircleMoreIcon />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
