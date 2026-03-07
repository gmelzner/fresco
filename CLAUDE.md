# FRESCO — Instrucciones para Claude Code

## Proyecto

Startup de viandas saludables en Corrientes, Argentina. 3 socios: Gus (tech), Alex y Mateo (operaciones).

## Stack

- **Framework**: Next.js 16.1.6, React 19, TypeScript, TailwindCSS 4
- **Base de datos**: Supabase (proyecto independiente)
  - **Ref**: `hstyfmcbqtxnnegabgwz`
  - **URL**: `https://hstyfmcbqtxnnegabgwz.supabase.co`
  - **Región**: East US (North Virginia) — Americas
  - **Tablas**: fresco_daily_sales, fresco_variable_costs, fresco_fixed_costs, fresco_stock, fresco_recipes, fresco_cashflow
  - **Vista**: fresco_monthly_summary
  - **Keys**: en `.env.local` (no commitear)
- **Dominio**: `comamosfresco.ar`
  - **DNS**: Cloudflare (zone ID: `c65aedf6ec20b4123f0c6ac9dd705dc7`)
  - **Nameservers**: `magdalena.ns.cloudflare.com`, `sergi.ns.cloudflare.com`
  - **Registros**: A `@` → 195.200.2.184 (proxied), A `www` → 195.200.2.184 (proxied)
- **Hosting**: VPS (195.200.2.184) — TODO: configurar nginx
- **Pedidos**: Pedisy Esencial (externo, $30K/mes)
- **Google Sheet**: [Centro de control - Fresco Finanzas](https://docs.google.com/spreadsheets/d/1_lrDJDvw_7OlpYfX1MKDW4GRnO-BK63GG5KFXveL8k0/edit) — 7 hojas (Ventas, Costos, Gastos Fijos, Stock, Recetas, Cashflow, Resumen)
- **Automatización**: n8n (compartido en VPS, carpeta FRESCO)
- **Bot Telegram**: Existe en secondbrain-engine/bots/fresco/ — PENDIENTE definir si se mueve

## Estructura

```
app/
├── page.tsx          → Landing pública
├── layout.tsx        → Root layout (Inter + Playfair Display)
├── globals.css       → Colores: verde #10b981, crema #faf8f3, marrón #2d2520
└── socios/page.tsx   → Dashboard de socios (en desarrollo)

docs/
├── PLAN-TECH.md           → Arquitectura y costos
├── DECISIONES.md          → Registro de decisiones
├── supabase-schema.sql    → Schema de BD (ejecutar en Supabase)
├── google-sheet-estructura.md → Estructura del Sheet financiero (7 hojas)
└── fresco-finanzas-template.xlsx → Template xlsx con headers, fórmulas y dropdowns
```

## Deploy

**NO usar Vercel.** Deploy en VPS vía SSH.

```bash
# TODO: completar cuando haya dominio y nginx configurado
ssh root@195.200.2.184 "cd /root/fresco && git pull && npm run build && pm2 restart fresco"
```

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Reglas

- Colores de marca: verde (#10b981/#059669), crema (#faf8f3), marrón (#2d2520)
- Fuentes: Playfair Display (títulos), Inter (body)
- Idioma: español argentino
- No mezclar con SecondBrain/NGRO — proyecto independiente
- Supabase: proyecto separado (no compartir con NGRO)
- Tablas con prefijo `fresco_` por claridad

## Pendientes clave

- [x] Crear proyecto Supabase y agregar credenciales acá (hstyfmcbqtxnnegabgwz)
- [x] Definir dominio con socios (comamosfresco.ar)
- [ ] Configurar nginx en VPS para el dominio
- [ ] Definir si bot Telegram queda en SB o se mueve
- [ ] Contratar Pedisy
- [ ] WhatsApp: reemplazar placeholder 5493794XXXXXX por número real
