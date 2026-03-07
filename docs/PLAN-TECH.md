# FRESCO — Plan Tech

> Última actualización: 2026-03-07

## Arquitectura

```
VPS (195.200.2.184)
├── FRESCO
│   ├── Landing pública (fresco.com.ar)
│   ├── Dashboard socios (/socios)
│   └── APIs internas
│
├── Nginx → reverse proxy por dominio
└── n8n (compartido, carpeta FRESCO separada)

Supabase (proyecto independiente, sa-east-1)
├── fresco_daily_sales
├── fresco_variable_costs
├── fresco_fixed_costs
├── fresco_stock
└── fresco_recipes

Google Sheet → n8n → Supabase (sync)

Pedisy Esencial ($30K/mes) → Tienda / pedidos / pagos
```

## Decisiones de stack

| Decisión | Elegido | Descartado | Por qué |
|----------|---------|------------|---------|
| Hosting | VPS propio | Vercel | $0 extra, control total, suficiente para el volumen |
| Base de datos | Supabase (proyecto nuevo) | Compartir con NGRO | Aislamiento de datos, backups independientes |
| Tienda online | Pedisy Esencial | Desarrollo propio | Ya resuelto, $30K/mes, MercadoPago incluido |
| Control financiero | Google Sheet + Supabase + Dashboard | Solo Sheet | Automatización, alertas, bot access |
| Automatización | n8n (compartido con NGRO, carpetas separadas) | n8n independiente | Un solo servicio, separación por carpetas |
| Publicidad | Facebook Ads + Google Ads | — | Geo-targeteo Corrientes |
| Bot Telegram | PENDIENTE | — | Definir si queda en SB o se independiza |

## Flujo de datos

```
Socios cargan en Google Sheet
        │
        ▼
   n8n (sync periódico)
        │
        ▼
   Supabase (fresco_*)
        │
        ├──► Dashboard web (/socios)
        ├──► Bot Telegram ("¿cómo vamos hoy?")
        └──► Alertas automáticas
```

## Costos mensuales

| Item | Costo |
|------|-------|
| VPS | $0 (ya pagado) |
| Supabase | $0 (free tier) |
| Pedisy | $30.000 ARS/mes |
| Dominio | ~$5.000 ARS/año |
| n8n | $0 (self-hosted) |
| **Total** | **~$30.000 ARS/mes** |
