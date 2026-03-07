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
- **Hosting**: VPS (195.200.2.184) — Traefik (reverse proxy) + pm2 (`fresco-web`, puerto 3006)
  - **SSL**: Cloudflare proxy (client-facing) + Let's Encrypt via Traefik (origin)
  - **Traefik config**: `/etc/easypanel/traefik/config/fresco.yaml`
  - **UFW rule**: `3006 ALLOW 172.18.0.0/16` (Traefik → Fresco)
- **Pedidos**: Pedisy Esencial (externo, $30K/mes)
- **Google Sheet**: [Centro de control - Fresco Finanzas](https://docs.google.com/spreadsheets/d/1_lrDJDvw_7OlpYfX1MKDW4GRnO-BK63GG5KFXveL8k0/edit) — 7 hojas (Ventas, Costos, Gastos Fijos, Stock, Recetas, Cashflow, Resumen)
- **Automatización**: n8n (compartido en VPS, carpeta FRESCO)
- **Bot Telegram**: Existe en secondbrain-engine/bots/fresco/ — PENDIENTE definir si se mueve

## Estructura

```
app/
├── page.tsx              → Landing pública (framer-motion)
├── layout.tsx            → Root layout (Inter + Playfair Display)
├── globals.css           → Colores: verde, crema, marrón
├── login/page.tsx        → Login form (client component)
├── socios/page.tsx       → Redirect a /admin
├── admin/
│   ├── layout.tsx        → Shell: sidebar + main content
│   ├── page.tsx          → Overview: 4 KPIs + stock alerts + resumen mensual
│   ├── ventas/page.tsx   → Ventas diarias
│   ├── costos/page.tsx   → Costos variables + gastos fijos
│   ├── stock/page.tsx    → Inventario con alertas
│   ├── cashflow/page.tsx → Flujo de caja
│   └── recetas/page.tsx  → Recetas agrupadas por producto
└── api/auth/
    ├── login/route.ts    → POST: valida creds, setea JWT cookie
    └── logout/route.ts   → POST: borra cookie

lib/
├── supabase.ts           → Cliente server-only (service role key)
├── auth.ts               → JWT sign/verify con jose, cookie helpers
└── formatters.ts         → Formateo es-AR (moneda, fechas, %)

components/
├── admin-sidebar.tsx     → Sidebar dark, nav links, hamburger mobile
├── stat-card.tsx         → Card de KPI
├── data-table.tsx        → Tabla genérica reutilizable
├── empty-state.tsx       → "Todavía no hay datos"
└── logout-button.tsx     → Client component

middleware.ts             → Protege /admin/*, redirige a /login
```

## Deploy

**NO usar Vercel.** Deploy en VPS vía SSH.

```bash
ssh root@195.200.2.184 "cd /root/fresco/app && git pull && npm ci --production && npm run build && pm2 restart fresco-web"
```

**VPS paths:**
- App: `/root/fresco/app/`
- Env: `/root/fresco/app/.env.local`
- Scripts: `/root/fresco/deploy.sh`
- Traefik: `/etc/easypanel/traefik/config/fresco.yaml`
- Nginx: `/etc/nginx/sites-enabled/fresco` (legacy, no se usa — Traefik es el reverse proxy real)
- PM2: `fresco-web` (puerto 3006)

**IMPORTANTE — Arquitectura VPS:**
Traefik (Docker/Easypanel) controla puertos 80/443, NO nginx.
Nginx escucha en 8098 (solo para atlas-demos). Para agregar un nuevo servicio:
1. Crear config en `/etc/easypanel/traefik/config/`
2. Apuntar service a `http://172.18.0.1:PUERTO`
3. Agregar regla UFW: `ufw allow from 172.18.0.0/16 to any port PUERTO`

## Auth

- JWT en cookie HttpOnly (`fresco-auth`, 7 días, jose)
- Middleware protege `/admin/*` → redirige a `/login`
- Credenciales: `ADMIN_USER` / `ADMIN_PASSWORD` en `.env.local`
- Login: `fresco` / `Fresco2026!`

## n8n Workflows

6 workflows FRESCO en n8n (tag "FRESCO"), cada 30min:
- FRESCO: Sync Ventas → `fresco_daily_sales`
- FRESCO: Sync Costos Variables → `fresco_variable_costs`
- FRESCO: Sync Gastos Fijos → `fresco_fixed_costs`
- FRESCO: Sync Stock → `fresco_stock` (UPSERT on item)
- FRESCO: Sync Recetas → `fresco_recipes`
- FRESCO: Sync Cashflow → `fresco_cashflow`

Patrón: Schedule → Read Sheet tab → Normalize (mapear columnas) → Delete all → Insert
Google Sheet compartido con `n8n-ngro@n8ngigot.iam.gserviceaccount.com`

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
- [x] Configurar Traefik en VPS para el dominio (fresco.yaml + UFW)
- [x] Deploy en VPS con pm2 (puerto 3006)
- [x] Dashboard admin (auth + 6 páginas)
- [x] 6 workflows n8n para sync Sheet → Supabase
- [x] WhatsApp: 5493795134721 (business account)
- [x] Organizar workflows n8n en carpetas (NGRO + FRESCO)
- [x] SSL activo (Cloudflare proxy + Let's Encrypt via Traefik)
- [ ] Activar workflows n8n cuando haya datos en el Sheet (desde UI n8n, toggle cada workflow)
- [ ] Definir si bot Telegram queda en SB o se mueve
- [ ] Contratar Pedisy
