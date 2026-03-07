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
    "Viandas frescas con ingredientes reales, info nutricional verificada y delivery en el día. Wraps, bowls y sándwiches saludables en Corrientes.",
  openGraph: {
    title: "FRESCO — Comé bien, sin complicarte",
    description:
      "Viandas saludables con delivery en el día en Corrientes. Ingredientes frescos, info nutricional real, desde $4.500.",
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
