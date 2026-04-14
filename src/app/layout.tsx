import Footer from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-heading-next",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body-next",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OFS - Application Development",
    template: "%s | OFS - Application Development",
  },
  description:
    "Criação de sites, landing pages e aplicações web com foco em SEO e conversão",
  keywords: [
    "criação de sites",
    "landing page",
    "site institucional",
    "SEO",
    "desenvolvimento web",
    "conversão",
  ],
  authors: [{ name: "OFS - Application Development" }],
  creator: "OFS",
  publisher: "OFS",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ofs.dev.br",
    siteName: "OFS - Application Development",
    title: "OFS - Application Development",
    description:
      "Criação de sites, landing pages e aplicações web com foco em SEO e conversão",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OFS - Application Development - Criação de Sites e Landing Pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OFS - Application Development",
    description:
      "Criação de sites, landing pages e aplicações web com foco em SEO e conversão",
    images: ["/og-image.png"],
    creator: "@ofs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        "h-full",
        "antialiased",
        plusJakartaSans.variable,
        notoSerif.variable,
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
