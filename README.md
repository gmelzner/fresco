# FRESCO — Viandas Saludables en Corrientes

Startup de comida saludable preparada (viandas) para Corrientes, Argentina.

**Socios**: Gus (tech/innovación), Alex y Mateo (operaciones/local/menú)

---

## Stack

| Componente | Tecnología |
|------------|-----------|
| Framework | Next.js 16.1.6 (App Router), React 19, TypeScript |
| Estilos | TailwindCSS 4 |
| Base de datos | Supabase (proyecto independiente, sa-east-1) |
| Hosting | VPS (195.200.2.184) vía SSH |
| Pedidos | Pedisy Esencial ($30K/mes) |
| Automatización | n8n (self-hosted, compartido) |
| Bot | Telegram (pendiente definir ubicación) |

## Estructura

```
fresco/
├── app/
│   ├── page.tsx          → Landing pública
│   ├── layout.tsx        → Root layout
│   ├── globals.css       → Estilos custom
│   └── socios/           → Dashboard de socios (en desarrollo)
├── docs/
│   ├── PLAN-TECH.md      → Arquitectura y decisiones de stack
│   ├── DECISIONES.md     → Registro de decisiones
│   └── supabase-schema.sql → Schema de base de datos
├── public/
├── CLAUDE.md             → Instrucciones para Claude Code
└── package.json
```

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy

VPS vía SSH (no Vercel). Ver CLAUDE.md para instrucciones.

## Documentación

- [Plan Tech](docs/PLAN-TECH.md) — Arquitectura, flujo de datos, costos
- [Decisiones](docs/DECISIONES.md) — Por qué elegimos cada herramienta
- [Schema SQL](docs/supabase-schema.sql) — Tablas de Supabase
