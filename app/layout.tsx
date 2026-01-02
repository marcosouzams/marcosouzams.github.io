import type { Metadata } from "next";
import "./globals.css";
import FooterBar from "@/components/FooterBar";
import LanguageSelector from "@/components/LanguageSelector";
import I18nProvider from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "Marco Antônio - Fullstack Developer",
  description: "Portfólio de Marco Antônio - Desenvolvedor Fullstack especializado em React, Next.js, Node.js e mais",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-dark antialiased">
        <I18nProvider>
          <LanguageSelector />
          {children}
          <FooterBar />
        </I18nProvider>
      </body>
    </html>
  );
}
