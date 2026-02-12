const WHATSAPP_URL =
  "https://wa.me/5493794XXXXXX?text=Hola!%20Quiero%20pedir%20viandas%20FRESCO";

const products = [
  {
    name: "Wrap Pollo Clasico",
    tag: "Best seller",
    tagColor: "bg-green-600",
    description:
      "Pechuga grillada, mix de verdes, tomate cherry, queso crema y aderezo de mostaza-miel.",
    kcal: 361,
    protein: 33,
    carbs: 30,
    fat: 12,
    weight: "280g",
  },
  {
    name: "Wrap Keto Pollo & Palta",
    tag: "Keto",
    tagColor: "bg-orange-500",
    description:
      "Tortilla low-carb, pechuga, palta, queso cheddar, rucula y mayo de ajo.",
    kcal: 340,
    protein: 34,
    carbs: 8,
    fat: 20,
    weight: "250g",
  },
  {
    name: "Wrap Veggie Hummus",
    tag: "100% Vegano",
    tagColor: "bg-green-500",
    description:
      "Hummus casero, zanahoria rallada, pepino, mix de hojas verdes y semillas.",
    kcal: 303,
    protein: 13,
    carbs: 38,
    fat: 11,
    weight: "260g",
  },
  {
    name: "Sandwich Atun & Palta",
    tag: "Omega-3",
    tagColor: "bg-blue-500",
    description:
      "Pan integral, atun al natural, palta pisada, tomate, rucula y limon.",
    kcal: 340,
    protein: 24,
    carbs: 28,
    fat: 14,
    weight: "250g",
  },
  {
    name: "Bowl Pollo & Arroz",
    tag: "High Protein",
    tagColor: "bg-amber-600",
    description:
      "Arroz yamani, pechuga grillada, edamame/choclo, zanahoria, aderezo de soja-jengibre.",
    kcal: 430,
    protein: 36,
    carbs: 42,
    fat: 12,
    weight: "350g",
  },
];

const steps = [
  {
    emoji: "1",
    title: "Elegis",
    desc: "Mirá el menu del día y elegí tu vianda por WhatsApp.",
  },
  {
    emoji: "2",
    title: "Preparamos",
    desc: "Todo se arma en el día con ingredientes frescos, sin conservantes.",
  },
  {
    emoji: "3",
    title: "Recibís",
    desc: "Te llega a tu casa, oficina o gimnasio. Listo para comer.",
  },
];

const roadmap = [
  {
    phase: "Fase 1 — Lanzamiento",
    time: "Mes 1-2",
    items: [
      "Menu fijo de 5 productos",
      "Delivery en zona Las Mil Viviendas + centro",
      "Pedidos por WhatsApp",
      "Packaging eco con branding",
    ],
  },
  {
    phase: "Fase 2 — Crecimiento",
    time: "Mes 3-4",
    items: [
      "Alianzas con 3-5 gimnasios",
      "Plan semanal con descuento",
      "Rotacion de 2 especiales por semana",
      "Presencia en Instagram con fotos reales",
    ],
  },
  {
    phase: "Fase 3 — Escala",
    time: "Mes 5-6",
    items: [
      "Viandas corporativas para empresas",
      "Sistema de pedidos online",
      "Expansion de zona de delivery",
      "Programa de referidos",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-display text-2xl font-bold tracking-tight text-green-800">
            FRESCO
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-bark-light">
            <a href="#menu" className="hover:text-green-700 transition-colors">
              Menu
            </a>
            <a
              href="#como-funciona"
              className="hover:text-green-700 transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#empresas"
              className="hover:text-green-700 transition-colors"
            >
              Empresas
            </a>
            <a
              href="#roadmap"
              className="hover:text-green-700 transition-colors"
            >
              Plan
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-cream to-cream-dark" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Viandas saludables en Corrientes
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-bark leading-tight mb-6">
            Come bien,
            <br />
            <span className="text-green-700">come fresco.</span>
          </h1>
          <p className="text-lg md:text-xl text-bark-light max-w-2xl mx-auto mb-10">
            Wraps, sandwiches y bowls hechos en el dia con ingredientes reales.
            Con info nutricional, sin vueltas. Delivery en Corrientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg shadow-green-600/25"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir por WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center text-bark font-semibold text-lg px-8 py-4 rounded-full border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-colors"
            >
              Ver menu
            </a>
          </div>
          {/* Quick nutrition badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {[
              "Opciones Keto",
              "100% Vegano",
              "High Protein",
              "Sin conservantes",
              "Hecho en el dia",
            ].map((b) => (
              <span
                key={b}
                className="bg-white/70 backdrop-blur text-bark-light text-xs font-medium px-3 py-1.5 rounded-full border border-green-100"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU / PRODUCTOS ── */}
      <section id="menu" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4">
              Nuestro menu
            </h2>
            <p className="text-bark-light max-w-xl mx-auto">
              5 opciones pensadas para que comas rico, sano y sin complicarte.
              Cada vianda tiene su info nutricional para que sepas exactamente
              que estas comiendo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-cream rounded-2xl border border-green-100 overflow-hidden hover:shadow-lg hover:border-green-300 transition-all group"
              >
                {/* Placeholder visual */}
                <div className="h-40 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform">
                    {p.name.includes("Bowl")
                      ? "🥗"
                      : p.name.includes("Sandwich")
                        ? "🥪"
                        : "🌯"}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`${p.tagColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full`}
                    >
                      {p.tag}
                    </span>
                    <span className="text-xs text-bark-light">{p.weight}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-bark mb-1">
                    {p.name}
                  </h3>
                  <p className="text-sm text-bark-light mb-4">
                    {p.description}
                  </p>

                  {/* Nutrition bar */}
                  <div className="grid grid-cols-4 gap-2 bg-white rounded-xl p-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-700">
                        {p.kcal}
                      </div>
                      <div className="text-[10px] text-bark-light uppercase tracking-wider">
                        kcal
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-bark">
                        {p.protein}g
                      </div>
                      <div className="text-[10px] text-bark-light uppercase tracking-wider">
                        Prot
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-bark">
                        {p.carbs}g
                      </div>
                      <div className="text-[10px] text-bark-light uppercase tracking-wider">
                        Carbs
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-bark">
                        {p.fat}g
                      </div>
                      <div className="text-[10px] text-bark-light uppercase tracking-wider">
                        Grasas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-display text-xl font-bold mb-2">
                Proximamente
              </h3>
              <p className="text-green-100 text-sm mb-6">
                Especiales rotativos cada semana. Nuevas opciones, misma calidad
                y frescura.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-green-50 transition-colors"
              >
                Quiero probar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bark text-center mb-14">
            Como funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.title} className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  {s.emoji}
                </div>
                <h3 className="font-display text-xl font-bold text-bark mb-2">
                  {s.title}
                </h3>
                <p className="text-bark-light text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPRESAS & GIMNASIOS ── */}
      <section id="empresas" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Para empresas y gimnasios
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-6">
                Viandas para tu equipo o tus alumnos
              </h2>
              <p className="text-bark-light mb-6">
                Ofrecemos planes semanales con descuento para gimnasios,
                oficinas, estudios y cualquier espacio que quiera sumar una
                opcion saludable para su gente.
              </p>
              <ul className="space-y-3 text-bark-light mb-8">
                {[
                  "Precios especiales por volumen",
                  "Delivery coordinado en un solo horario",
                  "Menu adaptable a necesidades del grupo",
                  "Packaging con tu marca (co-branding)",
                  "Sin compromiso minimo de duracion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                Consultar plan corporativo
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-cream-dark rounded-3xl p-10 text-center">
              <div className="text-6xl mb-6">🏋️</div>
              <h3 className="font-display text-2xl font-bold text-bark mb-3">
                Partnership Gym
              </h3>
              <p className="text-bark-light text-sm mb-6">
                Tus alumnos comen bien, vos ofreces un diferencial. Nosotros nos
                encargamos de todo.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-700">-15%</div>
                  <div className="text-xs text-bark-light">Desc. gym</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700">5+</div>
                  <div className="text-xs text-bark-light">Viandas/dia</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700">0</div>
                  <div className="text-xs text-bark-light">Costo fijo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE FRESCO ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bark text-center mb-14">
            Por que FRESCO
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🥬",
                title: "Ingredientes reales",
                desc: "Nada ultraprocesado. Todo fresco, todo del dia.",
              },
              {
                icon: "📊",
                title: "Info nutricional",
                desc: "Cada vianda con sus macros. Transparencia total.",
              },
              {
                icon: "⚡",
                title: "Practico",
                desc: "Pedis, te llega, comes. Sin cocinar, sin lavar.",
              },
              {
                icon: "💰",
                title: "Precio justo",
                desc: "Comer sano no tiene que ser caro. Opciones accesibles.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-green-100 p-6 text-center hover:shadow-md hover:border-green-300 transition-all"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-bark mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-bark-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUMEROS ── */}
      <section className="py-20 md:py-28 bg-bark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            La oportunidad
          </h2>
          <p className="text-cream-dark/80 mb-14 max-w-xl mx-auto">
            Corrientes no tiene una marca de viandas saludables con identidad.
            Ese lugar esta vacante.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                num: "350K+",
                label: "Habitantes en Corrientes capital",
              },
              {
                num: "20+",
                label: "Gimnasios sin opcion de viandas",
              },
              {
                num: "$3.500",
                label: "Precio promedio por vianda",
              },
            ].map((n) => (
              <div key={n.label}>
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {n.num}
                </div>
                <div className="text-cream-dark/60 text-sm">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section id="roadmap" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bark text-center mb-14">
            Proximos pasos
          </h2>
          <div className="space-y-8">
            {roadmap.map((r, i) => (
              <div
                key={r.phase}
                className="bg-white rounded-2xl border border-green-100 p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-bark text-lg">
                      {r.phase}
                    </h3>
                    <span className="text-xs text-bark-light">{r.time}</span>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {r.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-bark-light"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-600 to-green-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Empeza a comer mejor hoy
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
            Hacé tu pedido por WhatsApp y recibí tu vianda fresca en el dia.
            Corrientes ya tiene su marca de viandas saludables.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold text-lg px-10 py-4 rounded-full hover:bg-green-50 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir por WhatsApp
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 bg-bark text-cream-dark/60 text-center text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <span className="font-display text-lg font-bold text-white">
            FRESCO
          </span>
          <p className="mt-2">
            Viandas saludables en Corrientes &middot; Hecho con ingredientes
            reales
          </p>
          <p className="mt-4 text-xs">
            &copy; {new Date().getFullYear()} FRESCO. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
