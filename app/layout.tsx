import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FRESCO — Viandas saludables en Corrientes",
  description:
    "La marca de alimentación saludable que Corrientes necesita. Viandas frescas, tech-enabled, con info nutricional real y operación lista para escalar.",
  openGraph: {
    title: "FRESCO — La oportunidad en viandas saludables",
    description:
      "Inversión baja, margen alto, mercado desatendido. Viandas saludables con tecnología y operación escalable en Corrientes.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
