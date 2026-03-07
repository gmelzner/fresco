# FRESCO — Registro de decisiones

## 2026-03-07 — Definición de infraestructura

### Contexto
Somos 3 socios. Gus (tech), Alex y Mateo (operaciones/local/menú). Necesitamos infra tech para lanzamiento.

### Decisiones tomadas

1. **VPS en vez de Vercel** — Todo el proyecto corre en el VPS existente (195.200.2.184). Vercel es innecesario para el volumen esperado y tiene costo ($20 USD/mes para uso comercial). El VPS ya está pagado.

2. **Supabase proyecto nuevo** — No compartir base con NGRO/SecondBrain. Aislamiento total de datos, backups independientes, sin riesgo de cruce.

3. **Pedisy Esencial ($30K/mes)** — Para tienda online, pedidos, pagos con MercadoPago. No desarrollar sistema propio de pedidos. Evaluar upgrade a Avanzado cuando haya 30+ ventas/día.

4. **n8n compartido** — Mismo n8n del VPS pero con carpetas separadas para FRESCO. No levantar instancia nueva.

5. **Google Sheet como input** — Los socios cargan datos en Sheet (familiar, simple). n8n sincroniza a Supabase. Dashboard lee de Supabase.

6. **Dominio propio** — Pendiente definir con socios (fresco.com.ar, frescoctes.com.ar, etc).

7. **Bot Telegram** — PENDIENTE. Ya existe en secondbrain-engine/bots/fresco/ pero falta definir si se queda ahí o se independiza.

### Descartados

- **Vercel** — Costo innecesario, menos control, hobby plan no permite uso comercial.
- **Compartir Supabase con NGRO** — Riesgo de cruce de datos, migraciones compartidas.
- **Pedisy Avanzado ($65K/mes)** — Excesivo para arrancar. Muchas features (stock avanzado, recetas, proveedores) las hacemos mejor con herramientas propias.
- **Sistema de pedidos propio** — Reinventar la rueda. Pedisy ya lo resuelve.
