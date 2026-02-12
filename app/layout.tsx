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
    "Wraps, sándwiches y bowls frescos, hechos en el día con ingredientes reales. Delivery en Corrientes. Opciones keto, veggie y high-protein.",
  openGraph: {
    title: "FRESCO — Comé bien, comé fresco",
    description:
      "Viandas saludables hechas en el día. Wraps, sándwiches y bowls con info nutricional. Delivery en Corrientes.",
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
