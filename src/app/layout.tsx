import type { Metadata } from 'next';
import { Noto_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import Footer from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { cn } from '@/lib/utils';
import './globals.css';

const notoSerif = Noto_Serif({
  variable: '--font-heading-next',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-body-next',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OFS - Sovereign Architect',
  description:
    'Criação de sites, landing pages e aplicações web com foco em SEO e conversão',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        'h-full',
        'antialiased',
        plusJakartaSans.variable,
        notoSerif.variable
      )}
    >
      <body className="min-h-full flex flex-col font-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
