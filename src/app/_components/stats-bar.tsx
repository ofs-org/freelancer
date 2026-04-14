'use client';

import * as React from 'react';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCounterAnimation } from '@/utils/counter';

interface StatItem {
  label: string;
  target: number;
  decimals?: number;
  suffix: string;
}

function StatCounter({
  target,
  decimals = 0,
}: {
  target: number;
  decimals?: number;
}) {
  const { displayValue } = useCounterAnimation({
    target,
    decimals,
  });

  return <span>{displayValue.toFixed(decimals)}</span>;
}

export function StatsBar() {
  const stats: StatItem[] = [
    { label: 'Performance Real-time', target: 99.9, decimals: 1, suffix: '%' },
    { label: 'Uptime Garantido', target: 98, decimals: 0, suffix: '%' },
  ];

  return (
    <Card variant="glass" className="rounded-3xl max-w-3xl inline-block">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="text-center sm:text-left">
              <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/50 mb-1 md:mb-3">
                {stat.label}
              </p>
              <div className="flex items-baseline justify-center sm:justify-start gap-0.5 md:gap-1">
                <span className="font-body text-3xl md:text-5xl lg:text-6xl font-black text-white">
                  <StatCounter target={stat.target} decimals={stat.decimals} />
                </span>
                <span className="font-body text-xl md:text-2xl lg:text-3xl font-black text-primary">
                  {stat.suffix}
                </span>
              </div>
            </div>
            {index < stats.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden sm:block mx-4 md:mx-6 self-stretch w-px bg-white/20"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
}
