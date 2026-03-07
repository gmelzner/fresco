"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── DATA ─── */

const WHATSAPP_URL =
  "https://wa.me/5493795134721?text=Hola!%20Quiero%20pedir%20viandas%20FRESCO";

const products = [
  {
    name: "Wrap Pollo Clásico",
    tag: "Best seller",
    tagColor: "bg-green-600",
    description:
      "Pechuga grillada, mix de verdes, tomate cherry, queso crema y aderezo de mostaza-miel.",
    kcal: 361,
    protein: 33,
    carbs: 30,
    fat: 12,
    weight: "280g",
    emoji: "🌯",
  },
  {
    name: "Wrap Keto Pollo & Palta",
    tag: "Keto",
    tagColor: "bg-orange-500",
    description:
      "Tortilla low-carb, pechuga, palta, queso cheddar, rúcula y mayo de ajo.",
    kcal: 340,
    protein: 34,
    carbs: 8,
    fat: 20,
    weight: "250g",
    emoji: "🌯",
  },
  {
    name: "Wrap Veggie Hummus",
    tag: "Veggie",
    tagColor: "bg-green-500",
    description:
      "Hummus casero, zanahoria rallada, pepino, mix de hojas verdes y semillas.",
    kcal: 303,
    protein: 13,
    carbs: 38,
    fat: 11,
    weight: "260g",
    emoji: "🥬",
  },
  {
    name: "Sándwich Atún & Palta",
    tag: "Omega-3",
    tagColor: "bg-blue-500",
    description:
      "Pan integral, atún al natural, palta pisada, tomate, rúcula y limón.",
    kcal: 340,
    protein: 24,
    carbs: 28,
    fat: 14,
    weight: "250g",
    emoji: "🥪",
  },
  {
    name: "Bowl Pollo & Arroz",
    tag: "High Protein",
    tagColor: "bg-amber-600",
    description:
      "Arroz yamaní, pechuga grillada, edamame/choclo, zanahoria, aderezo de soja-jengibre.",
    kcal: 430,
    protein: 36,
    carbs: 42,
    fat: 12,
    weight: "350g",
    emoji: "🥗",
  },
];

const features = [
  "Ingredientes frescos",
  "Info nutricional real",
  "Entrega en el día",
  "Sin conservantes",
  "Packaging eco",
  "Recetas balanceadas",
  "Opciones keto & veggie",
  "Hecho en Corrientes",
];

const steps = [
  {
    num: "01",
    title: "Elegí tu vianda",
    description:
      "Mirá nuestro menú y elegí entre wraps, bowls y sándwiches. Cada uno con info nutricional completa.",
    icon: "📋",
  },
  {
    num: "02",
    title: "Pedí por WhatsApp",
    description:
      "Mandanos un mensaje con tu pedido. Sin apps raras, sin registros, simple y directo.",
    icon: "💬",
  },
  {
    num: "03",
    title: "Recibí en tu puerta",
    description:
      "Te lo llevamos fresco al mediodía. Listo para comer, sin necesidad de cocinar.",
    icon: "🚀",
  },
];

const plans = [
  {
    name: "Vianda individual",
    price: "$4.500",
    period: "por vianda",
    description: "Pedí la que quieras, cuando quieras.",
    popular: false,
    features: [
      "Elegís del menú del día",
      "Delivery a tu puerta",
      "Info nutricional completa",
      "Packaging eco-friendly",
    ],
  },
  {
    name: "Plan Semanal",
    price: "$19.900",
    period: "5 viandas",
    description: "Comé bien toda la semana con descuento.",
    popular: true,
    features: [
      "5 viandas de lunes a viernes",
      "Combinás a tu gusto",
      "Delivery incluido",
      "Ahorrás un 12%",
      "Prioridad en el delivery",
    ],
  },
  {
    name: "Empresas & Gyms",
    price: "Consultar",
    period: "precio por volumen",
    description: "Viandas para tu equipo o tus alumnos.",
    popular: false,
    features: [
      "Precio especial por volumen",
      "Entrega coordinada",
      "Facturación mensual",
      "Menú personalizable",
    ],
  },
];

const testimonials = [
  {
    name: "Lucía M.",
    role: "Entrena en CrossFit Corrientes",
    text: "Por fin algo saludable que me llega al gym sin tener que cocinar. El wrap de pollo es increíble.",
    avatar: "LM",
  },
  {
    name: "Martín R.",
    role: "Programador, home office",
    text: "Antes pedía cualquier cosa por delivery. Ahora como bien todos los días sin perder tiempo cocinando.",
    avatar: "MR",
  },
  {
    name: "Carolina D.",
    role: "Profesora de pilates",
    text: "Les recomiendo FRESCO a todas mis alumnas. Saber las calorías y macros de cada vianda cambia todo.",
    avatar: "CD",
  },
  {
    name: "Diego S.",
    role: "Oficina centro",
    text: "Pedimos plan semanal para la oficina. Nos sale más barato que el delivery normal y comemos mil veces mejor.",
    avatar: "DS",
  },
  {
    name: "Valentina G.",
    role: "Nutricionista",
    text: "Es lo que faltaba en Corrientes. Viandas con info nutricional real, no inventada. Los recomiendo a mis pacientes.",
    avatar: "VG",
  },
  {
    name: "Facundo L.",
    role: "Estudiante de medicina",
    text: "El wrap keto es mi salvación. Llego de la facu, tengo la vianda lista y no tengo que pensar qué cocinar.",
    avatar: "FL",
  },
];

/* ─── COMPONENTS ─── */

function FeatureTicker() {
  return (
    <section className="py-8 overflow-hidden bg-white/50">
      <div
        className="flex"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.div
          className="flex gap-6 flex-none"
          animate={{ translateX: "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...features, ...features].map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-cream rounded-full px-5 py-2.5 border border-green-100 whitespace-nowrap"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-bark">{f}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl border border-green-100 overflow-hidden hover:shadow-xl hover:border-green-300 transition-all duration-300 group"
    >
      <div className="h-36 bg-gradient-to-br from-green-50 to-green-100/50 flex items-center justify-center relative overflow-hidden">
        <span className="text-5xl group-hover:scale-110 transition-transform duration-500">
          {product.emoji}
        </span>
        <div className="absolute top-3 right-3">
          <span
            className={`${product.tagColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full`}
          >
            {product.tag}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg font-bold text-bark">
            {product.name}
          </h3>
          <span className="text-xs text-bark-light font-medium">
            {product.weight}
          </span>
        </div>
        <p className="text-sm text-bark-light mb-4">{product.description}</p>
        <div className="grid grid-cols-4 gap-2 bg-cream rounded-xl p-3 text-center">
          {[
            { val: product.kcal, label: "kcal", color: "text-green-700" },
            { val: `${product.protein}g`, label: "Prot", color: "text-bark" },
            { val: `${product.carbs}g`, label: "Carbs", color: "text-bark" },
            { val: `${product.fat}g`, label: "Grasas", color: "text-bark" },
          ].map((n) => (
            <div key={n.label}>
              <div className={`text-base font-bold ${n.color}`}>{n.val}</div>
              <div className="text-[9px] text-bark-light uppercase tracking-wider">
                {n.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PricingCard({ plan }: { plan: (typeof plans)[0] }) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col ${
        plan.popular
          ? "bg-bark text-white border-2 border-bark relative"
          : "bg-white border border-green-100"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <motion.span
            className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white"
            animate={{ backgroundPositionX: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ backgroundSize: "200%" }}
          >
            Más elegido
          </motion.span>
        </div>
      )}
      <h3
        className={`font-display text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-bark"}`}
      >
        {plan.name}
      </h3>
      <p
        className={`text-sm mb-4 ${plan.popular ? "text-white/70" : "text-bark-light"}`}
      >
        {plan.description}
      </p>
      <div className="mb-6">
        <span
          className={`text-4xl font-bold ${plan.popular ? "text-green-400" : "text-green-700"}`}
        >
          {plan.price}
        </span>
        <span
          className={`text-sm ml-2 ${plan.popular ? "text-white/60" : "text-bark-light"}`}
        >
          {plan.period}
        </span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-green-400" : "text-green-600"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={plan.popular ? "text-white/80" : "text-bark-light"}>
              {f}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center font-bold py-3.5 rounded-full transition-colors ${
          plan.popular
            ? "bg-green-500 hover:bg-green-400 text-white"
            : "bg-cream hover:bg-green-50 text-bark border border-green-200"
        }`}
      >
        {plan.price === "Consultar" ? "Contactanos" : "Pedí ahora"}
      </a>
    </div>
  );
}

function TestimonialColumn({
  testimonials: items,
  duration,
  className = "",
}: {
  testimonials: typeof testimonials;
  duration: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {[...items, ...items].map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-green-100 p-6 mb-5 shadow-sm"
          >
            <p className="text-sm text-bark-light mb-4 leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-bold">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-bark">{t.name}</div>
                <div className="text-xs text-bark-light">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── PAGE ─── */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: productsScroll } = useScroll({
    target: productsRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  const heroFloat1 = useTransform(heroScroll, [0, 1], [80, -80]);
  const heroFloat2 = useTransform(heroScroll, [0, 1], [-60, 60]);
  const productsFloat1 = useTransform(productsScroll, [0, 1], [100, -100]);
  const productsFloat2 = useTransform(productsScroll, [0, 1], [-80, 80]);
  const ctaFloat1 = useTransform(ctaScroll, [0, 1], [60, -60]);
  const ctaFloat2 = useTransform(ctaScroll, [0, 1], [-40, 40]);

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-green-800">
            FRESCO
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-bark-light">
            <a
              href="#menu"
              className="hover:text-green-700 transition-colors"
            >
              Menú
            </a>
            <a
              href="#como-funciona"
              className="hover:text-green-700 transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#planes"
              className="hover:text-green-700 transition-colors"
            >
              Planes
            </a>
            <a
              href="#testimonios"
              className="hover:text-green-700 transition-colors"
            >
              Opiniones
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Pedí ahora
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 100%, #dcfce7 0%, #FFF8F0 60%)",
          }}
        />
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-[5%] text-6xl md:text-8xl select-none pointer-events-none hidden md:block"
          style={{ y: heroFloat1 }}
          animate={{ rotate: [0, 10, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          🥬
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-[8%] text-5xl md:text-7xl select-none pointer-events-none hidden md:block"
          style={{ y: heroFloat2 }}
          animate={{ rotate: [0, -8, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          🥑
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-[15%] text-4xl select-none pointer-events-none opacity-40 hidden lg:block"
          style={{ y: heroFloat1 }}
        >
          🍋
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 lg:py-44 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag bg-green-100 text-green-800 mb-6">
              Corrientes, Argentina
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Comé bien,
            <br />
            <span className="text-green-700">sin complicarte.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-bark-light max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Viandas saludables con ingredientes frescos, info nutricional real y
            delivery en el día. Elegí, pedí y listo.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg shadow-green-600/25"
            >
              Ver el menú
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-bark font-semibold text-lg px-8 py-4 rounded-full border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-colors"
            >
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedí por WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { num: "300-430", unit: "kcal", label: "por vianda" },
              { num: "100%", unit: "", label: "ingredientes reales" },
              { num: "5", unit: "", label: "opciones de menú" },
              { num: "$4.500", unit: "", label: "desde" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/60 backdrop-blur rounded-2xl border border-green-100 p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-green-700">
                  {s.num}
                  <span className="text-base font-normal text-bark-light ml-0.5">
                    {s.unit}
                  </span>
                </div>
                <div className="text-xs text-bark-light mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURE TICKER ── */}
      <FeatureTicker />

      {/* ── MENÚ / PRODUCTOS ── */}
      <section id="menu" ref={productsRef} className="py-20 md:py-28 relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #FFF8F0, #f0fdf4 30%, #f0fdf4 70%, #FFF8F0)",
          }}
        />
        {/* Floating decorations */}
        <motion.div
          className="absolute top-16 right-[5%] text-6xl select-none pointer-events-none opacity-30 hidden lg:block"
          style={{ y: productsFloat1 }}
        >
          🫑
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-[3%] text-5xl select-none pointer-events-none opacity-30 hidden lg:block"
          style={{ y: productsFloat2 }}
        >
          🥕
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="tag bg-green-100 text-green-800 mb-6">
              Nuestro menú
            </span>
            <h2 className="section-title text-bark mb-4">
              Comida real, datos reales.
            </h2>
            <p className="section-description">
              Cada vianda tiene receta cerrada, info nutricional verificada y
              está lista para comer. Sin sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}

            {/* Menú rotativo card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center text-white"
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                🔄
              </motion.div>
              <h3 className="font-display text-xl font-bold mb-2">
                Menú rotativo
              </h3>
              <p className="text-green-100 text-sm">
                Especiales cada semana para que nunca te aburras. El menú crece
                con vos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section id="como-funciona" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="tag bg-orange-100 text-orange-600 mb-6">
              Así de simple
            </span>
            <h2 className="section-title text-bark mb-4">
              3 pasos y comés bien.
            </h2>
            <p className="section-description">
              Sin apps, sin registros, sin complicaciones. Como tiene que ser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-green-100">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div className="text-xs font-bold text-green-600 tracking-widest uppercase mb-2">
                  Paso {step.num}
                </div>
                <h3 className="font-display text-xl font-bold text-bark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-bark-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANES ── */}
      <section id="planes" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="tag bg-green-100 text-green-800 mb-6">
              Planes
            </span>
            <h2 className="section-title text-bark mb-4">
              Elegí cómo querés comer.
            </h2>
            <p className="section-description">
              Individual, semanal o para tu empresa. Siempre fresco, siempre
              saludable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section id="testimonios" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="tag bg-green-100 text-green-800 mb-6">
              Opiniones
            </span>
            <h2 className="section-title text-bark mb-4">
              Lo que dicen nuestros clientes.
            </h2>
            <p className="section-description">
              Gente real de Corrientes que ya come con FRESCO.
            </p>
          </div>

          <div className="h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <TestimonialColumn
              testimonials={testimonials.slice(0, 3)}
              duration={18}
            />
            <TestimonialColumn
              testimonials={testimonials.slice(1, 4)}
              duration={22}
              className="hidden md:block"
            />
            <TestimonialColumn
              testimonials={testimonials.slice(2, 5)}
              duration={16}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* ── PARA GYMS & EMPRESAS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 via-cream to-cream-dark rounded-3xl p-8 md:p-12 border border-green-100"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="tag bg-orange-100 text-orange-600 mb-4">
                  B2B
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4 tracking-tight">
                  Viandas para tu gym, oficina o equipo.
                </h2>
                <p className="text-bark-light mb-6">
                  Ofrecé un diferencial a tus alumnos o empleados. Precios por
                  volumen, delivery coordinado y facturación mensual.
                </p>
                <ul className="space-y-3 text-bark-light text-sm mb-6">
                  {[
                    "Precios especiales desde 5 viandas/día",
                    "Entrega en un solo horario coordinado",
                    "Menú adaptable a tu grupo",
                    "Sin compromiso mínimo de tiempo",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
                >
                  Consultanos
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "-15%", label: "Descuento gym" },
                  { num: "5+", label: "Viandas/día" },
                  { num: "$0", label: "Costo de adhesión" },
                  { num: "A1", label: "Facturación" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-2xl p-5 border border-green-100 text-center"
                  >
                    <div className="text-2xl font-bold text-green-700">
                      {s.num}
                    </div>
                    <div className="text-xs text-bark-light mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        ref={ctaRef}
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #14532d 100%)",
        }}
      >
        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-[10%] text-6xl select-none pointer-events-none opacity-20 hidden md:block"
          style={{ y: ctaFloat1 }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-[10%] text-5xl select-none pointer-events-none opacity-20 hidden md:block"
          style={{ y: ctaFloat2 }}
        >
          🌿
        </motion.div>

        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Tu próxima vianda está a un mensaje.
            </h2>
            <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
              Dejá de pensar qué cocinar. Elegí del menú, mandá un WhatsApp y
              comé fresco hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold text-lg px-10 py-4 rounded-full hover:bg-green-50 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedí tu vianda
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center text-white font-semibold text-lg px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-colors"
              >
                Ver el menú
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 bg-bark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="relative inline-block">
                <div
                  className="absolute -inset-3 rounded-full opacity-50 blur-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #4ade80, #22c55e, #16a34a, #15803d)",
                  }}
                />
                <span className="relative font-display text-2xl font-bold text-white">
                  FRESCO
                </span>
              </div>
              <p className="text-cream-dark/60 text-sm mt-2">
                Viandas saludables en Corrientes
              </p>
            </div>

            <div className="flex items-center gap-6 text-cream-dark/60 text-sm">
              <a
                href="#menu"
                className="hover:text-white transition-colors"
              >
                Menú
              </a>
              <a
                href="#como-funciona"
                className="hover:text-white transition-colors"
              >
                Cómo funciona
              </a>
              <a
                href="#planes"
                className="hover:text-white transition-colors"
              >
                Planes
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/fresco.ctes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-6 text-center text-cream-dark/40 text-xs">
            &copy; {new Date().getFullYear()} FRESCO. Hecho con ingredientes
            reales en Corrientes.
          </div>
        </div>
      </footer>
    </div>
  );
}
