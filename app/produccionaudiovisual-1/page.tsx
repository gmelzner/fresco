import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRESCO QUIZ — Guía de Producción",
  robots: "noindex, nofollow",
};

/* ─── DATA ─── */

const combos = [
  {
    id: "A",
    name: "Mundial 2026",
    emoji: "⚽",
    color: "green",
    preguntas: [
      {
        tipo: "V / F",
        pregunta: "Messi es celíaco.",
        respuesta: "VERDADERO",
        detalle: "Cambió su dieta en 2014. Dejó harinas refinadas, azúcar y más.",
        remate: "Sin gluten y con 8 Balones de Oro.",
      },
      {
        tipo: "Número",
        pregunta: "¿Cuántas calorías quema un jugador en un partido completo?",
        respuesta: "~1.500 kcal",
        detalle:
          "Entre correr 10-13 km y el esfuerzo anaeróbico, queman el equivalente a 3–4 comidas.",
        remate: "Básicamente 4 viandas FRESCO. O una pizza y media.",
      },
      {
        tipo: "V / F",
        pregunta:
          "¿Una selección llevó su propia comida al Mundial de Qatar porque no confiaba en la local?",
        respuesta: "VERDADERO — México",
        detalle: "Llevaron 2 toneladas de tortillas, chiles, frijoles y salsas.",
        remate: "Dos toneladas de tortillas. Prioridades claras.",
      },
    ],
  },
  {
    id: "B",
    name: "Mitos nutricionales",
    emoji: "🧠",
    color: "orange",
    preguntas: [
      {
        tipo: "V / F",
        pregunta: "El huevo sube el colesterol.",
        respuesta: "FALSO",
        detalle:
          "Mito desmentido. El colesterol dietario del huevo no impacta significativamente el colesterol en sangre.",
        remate: "Tu abuela te mintió.",
      },
      {
        tipo: "V / F",
        pregunta: "La banana engorda.",
        respuesta: "FALSO",
        detalle: "Tiene ~90 kcal. Es fruta, tiene fibra, potasio y te sacia.",
        remate: "Lo que engorda es la banana split.",
      },
      {
        tipo: "V / F",
        pregunta:
          "Un vaso de jugo de naranja de caja tiene más azúcar que una Coca-Cola.",
        respuesta: "VERDADERO",
        detalle:
          "Un vaso de jugo envasado puede tener ~26g de azúcar vs ~25g de la Coca-Cola.",
        remate: "Bienvenido a la Matrix.",
      },
    ],
  },
  {
    id: "C",
    name: "¿Cuántas calorías tiene?",
    emoji: "🔥",
    color: "red",
    preguntas: [
      {
        tipo: "Número",
        pregunta: "¿Cuántas kcal tiene una empanada de carne?",
        respuesta: "~300 kcal",
        detalle: "Una sola. Y nadie come una sola.",
        remate: "Ahora multiplicá por las 4 que te comés.",
      },
      {
        tipo: "Número",
        pregunta: "¿Cuántas kcal tiene un alfajor triple?",
        respuesta: "~400 kcal",
        detalle:
          "Lo mismo que un almuerzo FRESCO completo. Pero sin proteína, sin vitaminas, sin nada útil.",
        remate: "Un alfajor = un almuerzo. Solo que peor.",
      },
      {
        tipo: "Versus",
        pregunta:
          "¿Qué tiene más calorías: un Big Mac o un plato de ravioles con tuco?",
        respuesta: "Los ravioles (~700 vs ~550)",
        detalle:
          "La pasta casera con salsa y queso rallado es una bomba calórica silenciosa.",
        remate: "La nona intensificó.",
      },
    ],
  },
  {
    id: "D",
    name: "Deportistas locos",
    emoji: "💪",
    color: "blue",
    preguntas: [
      {
        tipo: "Número",
        pregunta: "¿Cuántos huevos por día come Cristiano Ronaldo?",
        respuesta: "6 huevos",
        detalle:
          "Parte de su dieta hiper-proteica. Come 6 comidas al día, todas medidas al gramo.",
        remate: "Come más huevos que gallina.",
      },
      {
        tipo: "Número",
        pregunta: "¿Cuántas calorías come Michael Phelps cuando entrena?",
        respuesta: "12.000 kcal/día",
        detalle:
          "Desayuno: 3 sándwiches de huevo, panqueques, omelette de 5 huevos, tostadas, y un bowl de avena.",
        remate: "Eso son 27 viandas FRESCO. Solo el desayuno.",
      },
      {
        tipo: "V / F",
        pregunta:
          "Haaland come hígado y corazón de vaca como parte de su dieta.",
        respuesta: "VERDADERO",
        detalle:
          "Erling Haaland sigue una dieta basada en órganos y carne de animales criados cerca de su casa.",
        remate: "El noruego come como puma.",
      },
    ],
  },
  {
    id: "E",
    name: "Mix sorpresa",
    emoji: "🎲",
    color: "purple",
    preguntas: [
      {
        tipo: "V / F",
        pregunta: "La palta tiene más potasio que la banana.",
        respuesta: "VERDADERO",
        detalle: "Palta: ~485mg por 100g. Banana: ~358mg por 100g.",
        remate: "La palta es la banana con mejor prensa.",
      },
      {
        tipo: "Número",
        pregunta: "¿Cuántos kg de pollo come The Rock por día?",
        respuesta: "~1 kg",
        detalle:
          "Dwayne Johnson come 7 comidas diarias. El pollo es la base de al menos 4.",
        remate: "Come un pollo entero. Por día.",
      },
      {
        tipo: "V / F",
        pregunta:
          "Comer de noche engorda más que comer de día.",
        respuesta: "FALSO",
        detalle:
          "Lo que importa es el total calórico del día, no el horario. Tu cuerpo no tiene reloj de calorías.",
        remate: "Lo que engorda es comer 3 empanadas a las 2am.",
      },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; tag: string; badge: string; accent: string }> = {
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    tag: "bg-green-100 text-green-800",
    badge: "bg-green-600 text-white",
    accent: "text-green-700",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    tag: "bg-orange-100 text-orange-700",
    badge: "bg-orange-500 text-white",
    accent: "text-orange-600",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    tag: "bg-red-100 text-red-700",
    badge: "bg-red-500 text-white",
    accent: "text-red-600",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    tag: "bg-blue-100 text-blue-700",
    badge: "bg-blue-600 text-white",
    accent: "text-blue-600",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    tag: "bg-purple-100 text-purple-700",
    badge: "bg-purple-600 text-white",
    accent: "text-purple-600",
  },
};

/* ─── PAGE ─── */

export default function ProduccionAudiovisual1() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ── HEADER ── */}
      <header className="bg-bark text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
              Produccion #1
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            FRESCO QUIZ
          </h1>
          <p className="text-cream-dark/70 text-lg max-w-2xl">
            Trivia nutricional callejera. Formato entrevista corta para Reels e historias.
            3 preguntas, si acertás las 3, ganás un premio.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-cream-dark/50">
            <div>
              <span className="block text-cream-dark/30 text-xs uppercase tracking-wider mb-1">Formato</span>
              Reels / TikTok / Historias
            </div>
            <div>
              <span className="block text-cream-dark/30 text-xs uppercase tracking-wider mb-1">Duracion</span>
              30–60 seg por clip
            </div>
            <div>
              <span className="block text-cream-dark/30 text-xs uppercase tracking-wider mb-1">Claim</span>
              <span className="text-green-400 font-semibold">Come sano, come FRESCO.</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* ── PREGUNTA DE APERTURA ── */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-bark mb-3 tracking-tight">
            Pregunta de apertura
          </h2>
          <p className="text-bark-light mb-6">
            Antes de arrancar el quiz, se hace esta pregunta a cada persona. Se filma desde atras de camara
            (solo se ve al entrevistado). Sirve como intro del video y conecta con el problema que FRESCO resuelve.
          </p>
          <div className="bg-white rounded-2xl border-2 border-green-200 p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Intro — antes del quiz
              </span>
            </div>
            <p className="font-display text-xl md:text-2xl font-bold text-bark mb-6">
              &ldquo;¿Que es lo que menos te gusta de la vida fit o saludable?&rdquo;
            </p>
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-bark-light">Respuestas tipicas que van a salir:</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: "🤯", text: "Pensar siempre en que comer" },
                { icon: "😩", text: "Siempre como igual, ya me aburre" },
                { icon: "⏰", text: "Planificar las comidas todos los dias" },
              ].map((r, i) => (
                <div key={i} className="bg-cream rounded-xl px-4 py-3 text-center">
                  <span className="text-2xl block mb-1">{r.icon}</span>
                  <span className="text-sm font-medium text-bark">{r.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-green-50 rounded-xl px-5 py-4">
              <p className="text-sm text-bark-light">
                <span className="font-bold text-green-700">¿Por que esta pregunta?</span> Todas las respuestas apuntan al mismo dolor:
                pensar, planificar y cocinar sano es un embole. Eso es exactamente lo que FRESCO resuelve.
                No hace falta decirlo — el espectador lo conecta solo.
              </p>
            </div>
          </div>
        </section>

        {/* ── MECANICA ── */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-bark mb-8 tracking-tight">
            Mecanica del juego
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "1",
                title: "Paras a alguien",
                desc: "En la calle, puerta de gym, facultad, plaza. Le decis que son 3 preguntas rapidas.",
              },
              {
                step: "2",
                title: "3 preguntas",
                desc: "Mix de nutricion, futbol, cultura pop. Respuestas cortas. Ritmo rapido.",
              },
              {
                step: "3",
                title: "Si acierta las 3, gana",
                desc: "Se lleva un premio de FRESCO. Se filma la reaccion. Si pierde, remate comico y chau.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl border border-green-100 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-bark text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-bark-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ESTRUCTURA DEL VIDEO ── */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-bark mb-8 tracking-tight">
            Estructura de cada video
          </h2>
          <div className="bg-white rounded-2xl border border-green-100 overflow-hidden">
            {[
              { time: "0–5 seg", label: "APERTURA", desc: "\"¿Que es lo que menos te gusta de la vida fit?\" — respuesta del entrevistado (detras de camara).", highlight: true },
              { time: "5–8 seg", label: "INTRO QUIZ", desc: "\"3 preguntas, 3 bien, te ganas un premio\"", highlight: false },
              { time: "8–18 seg", label: "PREGUNTA 1", desc: "La mas facil. Para enganchar y generar confianza.", highlight: false },
              { time: "18–30 seg", label: "PREGUNTA 2", desc: "Nivel medio. Aca empiezan las sorpresas.", highlight: false },
              { time: "30–45 seg", label: "PREGUNTA 3", desc: "La trampa o el dato WTF. El momento clave del video.", highlight: false },
              { time: "45–55 seg", label: "RESULTADO", desc: "Gana: entrega del premio + reaccion. Pierde: remate comico.", highlight: true },
              { time: "55–60 seg", label: "CIERRE", desc: "\"Come sano, come FRESCO\" + logo.", highlight: true },
            ].map((row, i) => (
              <div
                key={i}
                className={`flex items-start gap-5 px-6 py-4 ${i > 0 ? "border-t border-green-50" : ""} ${row.highlight ? "bg-green-50/50" : ""}`}
              >
                <span className="text-xs font-mono text-bark-light whitespace-nowrap pt-0.5 w-20 flex-shrink-0">
                  {row.time}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                    {row.label}
                  </span>
                  <p className="text-sm text-bark-light mt-0.5">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMBOS DE PREGUNTAS ── */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-bark mb-3 tracking-tight">
            Combos de preguntas
          </h2>
          <p className="text-bark-light mb-8">
            Cada combo tiene 3 preguntas listas para usar. Elegí el que quieras segun el publico o el dia.
            Podes mezclar preguntas entre combos.
          </p>

          <div className="space-y-8">
            {combos.map((combo) => {
              const c = colorMap[combo.color];
              return (
                <div key={combo.id} className={`rounded-2xl border ${c.border} overflow-hidden`}>
                  {/* Combo header */}
                  <div className={`${c.bg} px-6 py-4 flex items-center gap-3`}>
                    <span className="text-2xl">{combo.emoji}</span>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${c.accent}`}>
                        Combo {combo.id}
                      </span>
                      <h3 className="font-display text-xl font-bold text-bark">
                        {combo.name}
                      </h3>
                    </div>
                  </div>

                  {/* Preguntas */}
                  <div className="bg-white divide-y divide-gray-100">
                    {combo.preguntas.map((p, i) => (
                      <div key={i} className="px-6 py-5">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-0.5">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${c.tag}`}>
                              {p.tipo}
                            </span>
                            <span className="text-xs text-bark-light font-mono">P{i + 1}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-bark text-base mb-2">
                              &ldquo;{p.pregunta}&rdquo;
                            </p>
                            <div className="flex items-start gap-2 mb-2">
                              <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${c.badge}`}>
                                R
                              </span>
                              <span className="text-sm font-bold text-bark">
                                {p.respuesta}
                              </span>
                            </div>
                            <p className="text-sm text-bark-light mb-2">
                              {p.detalle}
                            </p>
                            <div className="bg-cream rounded-lg px-3 py-2 inline-block">
                              <span className="text-xs text-bark-light">Remate: </span>
                              <span className="text-sm font-semibold text-bark italic">
                                &ldquo;{p.remate}&rdquo;
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── PREGUNTAS SUELTAS ── */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-bark mb-3 tracking-tight">
            Preguntas sueltas (para mezclar)
          </h2>
          <p className="text-bark-light mb-8">
            Extras por si queres armar combos custom o reemplazar alguna que ya usaste.
          </p>
          <div className="bg-white rounded-2xl border border-green-100 divide-y divide-green-50">
            {[
              {
                q: "¿Cuantos litros de agua toma Mbappe por dia?",
                a: "3–4 litros",
                remate: "Vos tomas 3 mates y un cafe y decis que estas hidratado.",
              },
              {
                q: "¿Cuantas kcal tiene un plato de milanesa con pure?",
                a: "~800–900 kcal",
                remate: "Tu almuerzo de oficina son dos almuerzos.",
              },
              {
                q: "¿V o F? El arroz integral tiene casi las mismas calorias que el blanco.",
                a: "VERDADERO",
                remate: "La diferencia es la fibra, no la magia.",
              },
              {
                q: "¿Que deportistas famosos son veganos? A) Mike Tyson B) Lewis Hamilton C) Los dos",
                a: "C) Los dos",
                remate: "Uno boxeaba y el otro corre a 300 km/h. Sin asado.",
              },
              {
                q: "¿Que seleccion del mundial prohibe sushi y pizza el dia antes del partido?",
                a: "Casi todas",
                remate: "O sea, lo que vos comes todos los viernes.",
              },
            ].map((item, i) => (
              <div key={i} className="px-6 py-4 flex items-start gap-4">
                <span className="text-xs font-mono text-bark-light pt-1 w-6 flex-shrink-0">
                  {i + 1}.
                </span>
                <div>
                  <p className="text-sm font-semibold text-bark mb-1">&ldquo;{item.q}&rdquo;</p>
                  <p className="text-sm text-bark-light">
                    <span className="font-bold text-green-700">{item.a}</span>
                    {" — "}
                    <span className="italic">&ldquo;{item.remate}&rdquo;</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GUIA DE PRODUCCION ── */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-bark mb-8 tracking-tight">
            Guia de produccion
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-green-100 p-6">
              <h3 className="font-bold text-bark text-lg mb-4 flex items-center gap-2">
                <span className="text-xl">🎬</span> Filmacion
              </h3>
              <ul className="space-y-3 text-sm text-bark-light">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Celular en vertical (9:16), calidad maxima
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Microfono corbatero o cerca. El audio es clave
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Luz natural siempre que se pueda. Evitar contraluz
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Filmar mas entrevistas de las que necesitas (x2 minimo)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Grabar las reacciones de cerca (zoom a la cara)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-green-100 p-6">
              <h3 className="font-bold text-bark text-lg mb-4 flex items-center gap-2">
                <span className="text-xl">🎤</span> El host
              </h3>
              <ul className="space-y-3 text-sm text-bark-light">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Energia alta pero no forzada. Onda natural
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Memorizar las preguntas y respuestas del combo elegido
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Soltar los remates con timing, no leerlos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Si la persona dice algo gracioso, seguirle el juego
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Remera o gorra FRESCO visible pero no invasiva
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-green-100 p-6">
              <h3 className="font-bold text-bark text-lg mb-4 flex items-center gap-2">
                <span className="text-xl">📍</span> Locaciones
              </h3>
              <ul className="space-y-3 text-sm text-bark-light">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Puerta de gyms y boxes de CrossFit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Facultades (UNNE, UTN) — horario de almuerzo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Peatonal Junin / centro
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Costanera / plazas al mediodia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Variar locacion entre videos para no repetir fondo
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-green-100 p-6">
              <h3 className="font-bold text-bark text-lg mb-4 flex items-center gap-2">
                <span className="text-xl">✂️</span> Edicion
              </h3>
              <ul className="space-y-3 text-sm text-bark-light">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Cortes rapidos. Cero tiempos muertos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Texto grande en pantalla con cada pregunta
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Sonido de correcto (ding) / incorrecto (buzzer)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Zoom a la cara en los momentos de sorpresa
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  Cierre siempre igual: claim + logo FRESCO
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── PROPS / MATERIALES ── */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-bark mb-8 tracking-tight">
            Materiales para llevar
          </h2>
          <div className="bg-white rounded-2xl border border-green-100 p-6">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-bark-light">
              {[
                "Celular cargado + almacenamiento libre",
                "Microfono corbatero (o auriculares con mic)",
                "Pizarrita o carton con \"FRESCO QUIZ\"",
                "Premios FRESCO (cantidad segun sesion)",
                "Remera / gorra FRESCO para el host",
                "Tripode o segunda persona que filme",
                "Esta pagina abierta en el celular (preguntas)",
                "Agua y buena onda",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <span className="w-5 h-5 rounded border border-green-200 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIPS CLAVE ── */}
        <section>
          <div className="bg-bark rounded-2xl p-8 text-white">
            <h2 className="font-display text-2xl font-bold mb-6 tracking-tight">
              Tips clave
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-green-400 mb-2">Hacer</h4>
                <ul className="space-y-2 text-cream-dark/70">
                  <li>+ Filmar a muchas personas. Solo se publican las mejores</li>
                  <li>+ Las reacciones genuinas valen oro. No cortar rapido</li>
                  <li>+ Ser amable. Que se note que es un juego, no un examen</li>
                  <li>+ Pedir permiso verbal para publicar en redes</li>
                  <li>+ Usar el claim &ldquo;Come sano, come FRESCO&rdquo; en cada cierre</li>
                  <li>+ Numerar los videos: FRESCO QUIZ #1, #2, etc.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-orange-400 mb-2">No hacer</h4>
                <ul className="space-y-2 text-cream-dark/70">
                  <li>- Hacer sentir mal a la persona que pierde</li>
                  <li>- Repetir el mismo combo dos videos seguidos</li>
                  <li>- Forzar a alguien que no quiere participar</li>
                  <li>- Videos de mas de 60 seg (perdes atencion)</li>
                  <li>- Hablar de FRESCO antes del final (la marca cierra, no abre)</li>
                  <li>- Publicar sin subtitulos (mucha gente ve sin audio)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERIE ── */}
        <section>
          <div className="bg-green-50 rounded-2xl border border-green-200 p-8 text-center">
            <p className="text-sm text-green-700 font-semibold uppercase tracking-wider mb-2">
              Recordatorio
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-bark mb-3 tracking-tight">
              Esto no es un video, es una serie.
            </h3>
            <p className="text-bark-light max-w-lg mx-auto">
              Cada sesion de filmacion deberia producir 3–5 clips publicables. La clave es la
              consistencia: 2–3 videos por semana construyen audiencia. El formato se repite,
              el contenido cambia.
            </p>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-green-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-bark-light">
          FRESCO — Come sano, come FRESCO.
        </div>
      </footer>
    </div>
  );
}
