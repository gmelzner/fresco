const WHATSAPP_URL =
  "https://wa.me/5493794XXXXXX?text=Hola!%20Me%20interesa%20el%20proyecto%20FRESCO";

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
  },
];

const techStack = [
  {
    icon: "📱",
    title: "Pedidos automatizados",
    desc: "Menú digital con carrito, pagos online y confirmación instantánea. Sin atender mensajes uno por uno.",
  },
  {
    icon: "📊",
    title: "Dashboard operativo",
    desc: "Stock, pedidos del día, métricas de venta y costos en tiempo real. Control total de la operación.",
  },
  {
    icon: "🗺️",
    title: "Logística optimizada",
    desc: "Rutas de delivery coordinadas por zona y horario. Más entregas en menos tiempo y con menos costo.",
  },
  {
    icon: "👥",
    title: "CRM de clientes",
    desc: "Historial de pedidos, preferencias alimentarias, planes semanales automáticos y notificaciones.",
  },
  {
    icon: "📣",
    title: "Marketing automatizado",
    desc: "Avisos de menú nuevo, recordatorios de pedido, programa de referidos. Todo automático.",
  },
  {
    icon: "🔬",
    title: "Data para decisiones",
    desc: "Qué se vende más, qué margen tiene cada producto, cuándo piden, desde dónde. Data para crecer.",
  },
];

const launchPhases = [
  {
    phase: "Fase 0 — Pre-lanzamiento",
    time: "Semana 1-2",
    highlight: true,
    items: [
      "\"Operación FRESCO\": regalar 100 viandas en gimnasios y oficinas",
      "Sampling con branding impecable — que conozcan la marca probándola",
      "Captura de leads: WhatsApp + Instagram de cada persona que prueba",
      "Generar boca a boca real antes de abrir pedidos",
    ],
  },
  {
    phase: "Fase 1 — Lanzamiento",
    time: "Mes 1-2",
    highlight: false,
    items: [
      "Abrir pedidos con la base de leads del sampling",
      "Instagram con fotos reales + testimonios del sampling",
      "Ads geolocalizados en Corrientes (Instagram + Google)",
      "Alianzas con 3-5 gimnasios desde el día 1",
    ],
  },
  {
    phase: "Fase 2 — Crecimiento",
    time: "Mes 3-4",
    highlight: false,
    items: [
      "Planes semanales con descuento automático",
      "Programa de referidos: recomendá y ganá una vianda gratis",
      "Expansión de zona de delivery",
      "Viandas corporativas para oficinas y estudios",
    ],
  },
  {
    phase: "Fase 3 — Escala",
    time: "Mes 5-6",
    highlight: false,
    items: [
      "Sistema de pedidos online completo (Pedisy)",
      "Cocina optimizada para 50+ viandas/día",
      "Menú rotativo con especiales semanales",
      "Evaluación de segundo punto de producción",
    ],
  },
];

const investmentData = {
  initial: [
    { item: "Ingredientes iniciales (stock semana 1-2)", cost: 250000 },
    { item: "Packaging y etiquetas (500 unidades)", cost: 180000 },
    { item: "Contenedores, utensilios y descartables", cost: 150000 },
    { item: "Branding (logo impreso, stickers, tarjetas)", cost: 80000 },
    { item: "Delivery (combustible + bolsa térmica)", cost: 100000 },
    { item: "Marketing inicial (Instagram ads + flyers)", cost: 60000 },
    { item: "Habilitaciones y trámites", cost: 50000 },
    {
      item: "Operación FRESCO — 100 viandas de sampling",
      cost: 220000,
    },
  ],
  phases: [
    {
      name: "Fase 1",
      time: "Mes 1-2",
      ventasDia: 5,
      precioUnit: 4500,
      costoUnit: 2200,
      diasMes: 22,
      otrosGastos: 80000,
    },
    {
      name: "Fase 2",
      time: "Mes 3-4",
      ventasDia: 10,
      precioUnit: 4500,
      costoUnit: 2000,
      diasMes: 22,
      otrosGastos: 120000,
    },
    {
      name: "Fase 3",
      time: "Mes 5-6",
      ventasDia: 30,
      precioUnit: 4500,
      costoUnit: 1800,
      diasMes: 22,
      otrosGastos: 180000,
    },
    {
      name: "Fase 4",
      time: "Mes 7-12",
      ventasDia: 50,
      precioUnit: 4500,
      costoUnit: 1600,
      diasMes: 22,
      otrosGastos: 250000,
    },
  ],
};

function formatMoney(n: number) {
  return "$" + n.toLocaleString("es-AR");
}

export default function Home() {
  const totalInversion = investmentData.initial.reduce(
    (acc, i) => acc + i.cost,
    0
  );

  // Calculate cumulative profit to find break-even
  let cumulative = -totalInversion;
  const cumulativeByPhase = investmentData.phases.map((phase) => {
    const ingresosMes = phase.ventasDia * phase.precioUnit * phase.diasMes;
    const costoProducto = phase.ventasDia * phase.costoUnit * phase.diasMes;
    const gastosTotales = costoProducto + phase.otrosGastos;
    const ganancia = ingresosMes - gastosTotales;
    const months = phase.name === "Fase 4" ? 6 : 2;
    cumulative += ganancia * months;
    return { ...phase, ganancia, cumulative };
  });

  return (
    <div className="min-h-screen">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-display text-2xl font-bold tracking-tight text-green-800">
            FRESCO
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-bark-light">
            <a
              href="#problema"
              className="hover:text-green-700 transition-colors"
            >
              Oportunidad
            </a>
            <a
              href="#producto"
              className="hover:text-green-700 transition-colors"
            >
              Producto
            </a>
            <a href="#tech" className="hover:text-green-700 transition-colors">
              Tecnología
            </a>
            <a
              href="#lanzamiento"
              className="hover:text-green-700 transition-colors"
            >
              Lanzamiento
            </a>
            <a
              href="#numeros"
              className="hover:text-green-700 transition-colors"
            >
              Números
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Hablemos
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-cream to-cream-dark" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Corrientes, Argentina · 2026
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-bark leading-tight mb-6">
            La marca de alimentación
            <br />
            saludable que Corrientes
            <br />
            <span className="text-green-700">necesita.</span>
          </h1>
          <p className="text-lg md:text-xl text-bark-light max-w-2xl mx-auto mb-10">
            Viandas frescas, con info nutricional real, delivery en el día y
            tecnología para escalar. Un mercado desatendido, una operación
            lista para arrancar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#problema"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg shadow-green-600/25"
            >
              Conocé el proyecto
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-bark font-semibold text-lg px-8 py-4 rounded-full border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-colors"
            >
              Hablemos
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {[
              "Tech-enabled",
              "Corrientes capital",
              "Inversión baja",
              "Margen alto",
              "Escalable",
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

      {/* ── EL PROBLEMA ── */}
      <section id="problema" className="py-20 md:py-28 bg-bark text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-900/50 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              La oportunidad
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Corrientes no tiene una marca de
              <br />
              viandas saludables con identidad.
            </h2>
            <p className="text-cream-dark/70 max-w-2xl mx-auto">
              La gente que entrena, trabaja o simplemente quiere comer bien no
              tiene opciones prácticas. El delivery que existe es
              ultraprocesado, caro o sin información nutricional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "350K+",
                label: "Habitantes en Corrientes capital",
              },
              {
                num: "20+",
                label: "Gimnasios sin opción de viandas saludables",
              },
              {
                num: "0",
                label: "Marcas de viandas con identidad real",
              },
              {
                num: "$4.500",
                label: "Precio accesible por vianda completa",
              },
            ].map((n) => (
              <div
                key={n.label}
                className="bg-white/5 rounded-2xl border border-white/10 p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  {n.num}
                </div>
                <div className="text-cream-dark/60 text-sm">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL PRODUCTO ── */}
      <section id="producto" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              El producto
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4">
              5 productos definidos, listos para producir.
            </h2>
            <p className="text-bark-light max-w-xl mx-auto">
              Cada vianda con receta cerrada, costos calculados e info
              nutricional verificada. Opciones para todos los perfiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-cream rounded-2xl border border-green-100 overflow-hidden hover:shadow-lg hover:border-green-300 transition-all"
              >
                <div className="h-32 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <span className="text-4xl opacity-60">
                    {p.name.includes("Bowl")
                      ? "🥗"
                      : p.name.includes("Sándwich")
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
                  <p className="text-sm text-bark-light mb-3">
                    {p.description}
                  </p>
                  <div className="grid grid-cols-4 gap-2 bg-white rounded-xl p-2.5 text-center">
                    <div>
                      <div className="text-base font-bold text-green-700">
                        {p.kcal}
                      </div>
                      <div className="text-[9px] text-bark-light uppercase tracking-wider">
                        kcal
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-bark">
                        {p.protein}g
                      </div>
                      <div className="text-[9px] text-bark-light uppercase tracking-wider">
                        Prot
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-bark">
                        {p.carbs}g
                      </div>
                      <div className="text-[9px] text-bark-light uppercase tracking-wider">
                        Carbs
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-bark">
                        {p.fat}g
                      </div>
                      <div className="text-[9px] text-bark-light uppercase tracking-wider">
                        Grasas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Expansión card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-display text-xl font-bold mb-2">
                Menú rotativo
              </h3>
              <p className="text-green-100 text-sm">
                A partir de Fase 2, especiales rotativos cada semana. El menú
                crece con la operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECNOLOGÍA ── */}
      <section id="tech" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Tecnología
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4">
              No es solo comida. Es una operación tech-enabled.
            </h2>
            <p className="text-bark-light max-w-2xl mx-auto">
              Desde el día 1 construimos con sistemas que automatizan la
              operación y generan datos para tomar mejores decisiones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-2xl border border-green-100 p-6 hover:shadow-md hover:border-green-300 transition-all"
              >
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-display font-bold text-bark mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-bark-light">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESTRATEGIA DE LANZAMIENTO ── */}
      <section id="lanzamiento" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Estrategia
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4">
              Un plan de lanzamiento ambicioso y medible.
            </h2>
            <p className="text-bark-light max-w-xl mx-auto">
              No esperamos a que nos encuentren. Salimos a buscar clientes,
              generamos experiencia de marca y construimos una base real antes
              de abrir.
            </p>
          </div>

          <div className="space-y-6">
            {launchPhases.map((r, i) => (
              <div
                key={r.phase}
                className={`rounded-2xl p-6 md:p-8 border ${
                  r.highlight
                    ? "bg-gradient-to-r from-orange-50 to-cream border-orange-200"
                    : "bg-cream border-green-100"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${
                      r.highlight ? "bg-orange-500" : "bg-green-600"
                    }`}
                  >
                    {i}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-bark text-lg">
                      {r.phase}
                    </h3>
                    <span className="text-xs text-bark-light">{r.time}</span>
                  </div>
                  {r.highlight && (
                    <span className="ml-auto bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Clave
                    </span>
                  )}
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {r.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-bark-light"
                    >
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          r.highlight ? "text-orange-500" : "text-green-500"
                        }`}
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

      {/* ── EMPRESAS & GIMNASIOS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-50 to-cream-dark rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  B2B
                </span>
                <h2 className="font-display text-3xl font-bold text-bark mb-4">
                  Gimnasios y empresas como canal de distribución.
                </h2>
                <p className="text-bark-light mb-6">
                  No solo vendemos viandas. Creamos partnerships donde el gym o
                  la oficina ofrece un diferencial a su gente, y nosotros
                  sumamos volumen predecible.
                </p>
                <ul className="space-y-2 text-bark-light text-sm">
                  {[
                    "Precios especiales por volumen",
                    "Delivery coordinado en un solo horario",
                    "Co-branding en packaging",
                    "Sin compromiso mínimo",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
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
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-2xl p-5 border border-green-100">
                  <div className="text-2xl font-bold text-green-700">-15%</div>
                  <div className="text-xs text-bark-light mt-1">Desc. gym</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-green-100">
                  <div className="text-2xl font-bold text-green-700">5+</div>
                  <div className="text-xs text-bark-light mt-1">
                    Viandas/día
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-green-100">
                  <div className="text-2xl font-bold text-green-700">$0</div>
                  <div className="text-xs text-bark-light mt-1">
                    Costo fijo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVERSIÓN Y NÚMEROS ── */}
      <section id="numeros" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Números
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4">
              Inversión baja, margen alto, recupero rápido.
            </h2>
            <p className="text-bark-light max-w-xl mx-auto">
              Todos los valores son estimados en pesos argentinos. Los costos
              unitarios bajan con volumen por compra mayorista.
            </p>
          </div>

          {/* Inversión inicial */}
          <div className="bg-cream rounded-2xl border border-green-100 p-6 md:p-8 mb-8">
            <h3 className="font-display text-xl font-bold text-bark mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                $
              </span>
              Inversión inicial
            </h3>
            <div className="space-y-3">
              {investmentData.initial.map((item) => (
                <div
                  key={item.item}
                  className="flex items-center justify-between py-2 border-b border-green-50 last:border-0"
                >
                  <span className="text-sm text-bark-light">{item.item}</span>
                  <span className="text-sm font-bold text-bark whitespace-nowrap ml-4">
                    {formatMoney(item.cost)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t-2 border-green-200 flex items-center justify-between">
              <span className="font-display font-bold text-bark text-lg">
                Total estimado
              </span>
              <span className="font-display font-bold text-green-700 text-2xl">
                {formatMoney(totalInversion)}
              </span>
            </div>
          </div>

          {/* Proyección por fase */}
          <h3 className="font-display text-xl font-bold text-bark mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              📈
            </span>
            Proyección por fase (12 meses)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {cumulativeByPhase.map((phase) => {
              const ingresosMes =
                phase.ventasDia * phase.precioUnit * phase.diasMes;
              const costoProducto =
                phase.ventasDia * phase.costoUnit * phase.diasMes;
              const gastosTotales = costoProducto + phase.otrosGastos;
              const margen = Math.round(
                (phase.ganancia / ingresosMes) * 100
              );

              return (
                <div
                  key={phase.name}
                  className="bg-cream rounded-2xl border border-green-100 p-5 hover:shadow-md hover:border-green-300 transition-all"
                >
                  <div className="mb-3">
                    <h4 className="font-display font-bold text-bark">
                      {phase.name}
                    </h4>
                    <span className="text-xs text-bark-light">
                      {phase.time}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-bark-light">Ventas/día</span>
                      <span className="font-bold text-bark">
                        {phase.ventasDia}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-bark-light">Ingreso/mes</span>
                      <span className="font-bold text-green-700">
                        {formatMoney(ingresosMes)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-bark-light">Costos/mes</span>
                      <span className="font-bold text-bark">
                        {formatMoney(gastosTotales)}
                      </span>
                    </div>
                    <div className="border-t border-green-100 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-bark">Ganancia</span>
                        <span
                          className={`font-bold ${phase.ganancia >= 0 ? "text-green-700" : "text-red-500"}`}
                        >
                          {formatMoney(phase.ganancia)}
                        </span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-bark-light text-xs">Margen</span>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${margen >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}
                        >
                          {margen}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Break-even indicator */}
          <div className="bg-green-50 rounded-2xl border border-green-200 p-6 text-center">
            <h4 className="font-display font-bold text-bark text-lg mb-2">
              Punto de equilibrio estimado
            </h4>
            <p className="text-bark-light text-sm mb-4">
              Con la proyección conservadora, la inversión se recupera entre el
              mes 3 y 4. A partir de Fase 3, la ganancia mensual supera
              {" "}{formatMoney(cumulativeByPhase[2]?.ganancia || 0)}.
            </p>
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-green-700">
                  ~Mes 4
                </div>
                <div className="text-xs text-bark-light">
                  Recupero inversión
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-700">
                  {formatMoney(cumulativeByPhase[3]?.ganancia || 0)}/mes
                </div>
                <div className="text-xs text-bark-light">
                  Ganancia en escala
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-bark-light mt-6 text-center">
            * Valores estimados. Costos incluyen producto, delivery, packaging,
            marketing y operativos. Días hábiles: 22/mes.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-600 to-green-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            ¿Querés ser parte?
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
            FRESCO está en etapa de definición. Si te interesa el proyecto,
            hablemos. Una charla sin compromiso para ver cómo sumarte.
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
            Hablemos del proyecto
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
            &copy; {new Date().getFullYear()} FRESCO. Documento interno.
          </p>
        </div>
      </footer>
    </div>
  );
}
