# FRESCO — Viandas Saludables en Corrientes

Landing page y plan de negocio para marca de viandas saludables en Corrientes, Argentina.

**Live**: https://fresco-rust.vercel.app
**Repo**: https://github.com/gmelzner/fresco

---

## Estado actual

### Lo que ya está hecho

- **Landing completa** con branding FRESCO (verde + crema, Inter + Playfair Display)
- **5 productos definidos** con recetas, pesos e info nutricional:
  - Wrap Pollo Clásico (361 kcal, 33g prot)
  - Wrap Keto Pollo & Palta (340 kcal, 34g prot, 8g carbs)
  - Wrap Veggie Hummus (303 kcal, 13g prot)
  - Sándwich Atún & Palta (340 kcal, 24g prot)
  - Bowl Pollo & Arroz (430 kcal, 36g prot)
- **Sección de inversión y números** con desglose de inversión inicial ($870K) y proyección de costos/beneficios por fase
- **Roadmap de 3 fases** (Lanzamiento → Crecimiento → Escala)
- **Sección empresas/gimnasios** para partnerships
- **CTA de WhatsApp** en todo el sitio (falta poner número real)
- **Deploy en Vercel** con GitHub auto-deploy

### Secciones de la landing

1. Hero con propuesta de valor
2. Menú con 5 productos + info nutricional
3. Cómo funciona (3 pasos)
4. Empresas & Gimnasios (partnerships)
5. Por qué FRESCO (valores)
6. La oportunidad (números de mercado)
7. Inversión y números (desglose + proyección por fase)
8. Roadmap (próximos pasos)
9. CTA final + Footer

### Números clave

| | Fase 1 (Mes 1-2) | Fase 2 (Mes 3-4) | Fase 3 (Mes 5-6) |
|---|---|---|---|
| Ventas/día | 5 | 10 | 30 |
| Precio unitario | $4.500 | $4.500 | $4.500 |
| Costo unitario | $2.200 | $2.000 | $1.800 |
| Ganancia mensual | $173.000 | $430.000 | $1.602.000 |
| Margen | 35% | 43% | 54% |

**Inversión inicial estimada**: $870.000

---

## Pendientes / Próximos pasos

### Inmediatos
- [ ] Cambiar número de WhatsApp placeholder (`5493794XXXXXX`) por el real
- [ ] Confirmar aprobación del socio
- [ ] Definir nombre de dominio (ej: `frescocorrientes.com`)

### Fase 1 — Pre-lanzamiento
- [ ] Contratar Pedisy ($30K/mes) para sistema de pedidos, carrito y pagos
- [ ] Configurar Facebook Pixel + Google Analytics en Pedisy para ads
- [ ] Crear cuenta de Instagram @fresco.ctes (o similar)
- [ ] Diseñar packaging con branding FRESCO
- [ ] Sacar habilitaciones/bromatología
- [ ] Hacer sesión de fotos reales de los productos
- [ ] Actualizar landing con fotos reales en vez de emojis placeholder

### Fase 2 — Lanzamiento
- [ ] Vincular botón "Pedí ahora" de la landing al menú de Pedisy
- [ ] Lanzar campaña de Instagram con ads geolocalizados en Corrientes
- [ ] Contactar 3-5 gimnasios para partnership
- [ ] Arrancar con delivery en zona Las Mil Viviendas + centro

### Análisis competitivo
- **Liviano** (web.pedisy.com/tiendas/liviano): Competidor directo, usa Pedisy, tiene 3 locales. Referencia de UX simple e intuitiva para el flujo de pedidos.

---

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Estilos**: TailwindCSS 4 con tema custom
- **Fuentes**: Inter (body) + Playfair Display (headings)
- **Deploy**: Vercel (auto-deploy desde GitHub)
- **Pedidos** (futuro): Pedisy — menú digital + carrito + píxeles + pagos

## Desarrollo local

```bash
npm install
npm run dev
# Abrir http://localhost:3000
```
