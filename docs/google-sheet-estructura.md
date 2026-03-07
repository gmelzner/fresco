# Google Sheet: "FRESCO — Control Financiero"

> Crear en Google Drive y compartir con Alex y Mateo (edit access).
> n8n sincronizará estos datos a Supabase automáticamente.

---

## Hoja 1: VENTAS DIARIAS

| Columna | Tipo | Ejemplo | Notas |
|---------|------|---------|-------|
| Fecha | Fecha | 2026-03-07 | |
| Producto | Texto | Wrap Pollo Clásico | Usar nombres exactos del menú |
| Cantidad | Número | 3 | |
| Precio Unitario | Moneda | $4.500 | |
| Total | Fórmula | =C2*D2 | Auto-calculado |
| Canal | Dropdown | local / delivery | |
| Medio de Pago | Dropdown | efectivo / mercadopago / transferencia | |
| Notas | Texto | — | Opcional |

## Hoja 2: COSTOS VARIABLES

| Columna | Tipo | Ejemplo | Notas |
|---------|------|---------|-------|
| Fecha | Fecha | 2026-03-07 | Fecha de compra |
| Insumo | Texto | Pechuga de pollo | |
| Proveedor | Texto | Granja Don Pedro | |
| Cantidad | Número | 5 | |
| Unidad | Dropdown | kg / unidad / litro / paquete / docena | |
| Costo | Moneda | $12.500 | Costo total de la compra |
| Categoría | Dropdown | proteina / verdura / envase / condimento / lacteo / panificado / otro | |

## Hoja 3: GASTOS FIJOS

| Columna | Tipo | Ejemplo | Notas |
|---------|------|---------|-------|
| Mes | Texto | 2026-03 | Formato YYYY-MM |
| Concepto | Texto | Alquiler local | |
| Monto | Moneda | $150.000 | |
| Categoría | Dropdown | alquiler / servicios / pedisy / marketing / sueldos / impuestos / otro | |

## Hoja 4: STOCK

| Columna | Tipo | Ejemplo | Notas |
|---------|------|---------|-------|
| Insumo | Texto | Pechuga de pollo | Único, no repetir |
| Unidad | Texto | kg | |
| Stock Actual | Número | 8.5 | Actualizar manualmente |
| Stock Mínimo | Número | 3 | Alerta si baja de este valor |
| Costo x Unidad | Moneda | $2.500 | Último precio pagado |
| Proveedor | Texto | Granja Don Pedro | |
| Última Compra | Fecha | 2026-03-05 | |

## Hoja 5: RECETAS

| Columna | Tipo | Ejemplo | Notas |
|---------|------|---------|-------|
| Producto | Texto | Wrap Pollo Clásico | Nombre del menú |
| Insumo | Texto | Pechuga de pollo | Debe coincidir con Hoja 4 |
| Cantidad | Número | 0.150 | Por porción |
| Unidad | Texto | kg | |
| Costo Insumo | Fórmula | =VLOOKUP(B2,STOCK!A:E,5,0)*C2 | Auto desde Stock |
| Costo Total Receta | Fórmula | =SUMIF(A:A,A2,E:E) | Suma todos los insumos del producto |
| Precio Venta | Moneda | $4.500 | |
| Margen % | Fórmula | =(G2-F2)/G2*100 | Auto-calculado |

## Hoja 6: CASHFLOW

| Columna | Tipo | Ejemplo | Notas |
|---------|------|---------|-------|
| Fecha | Fecha | 2026-03-07 | |
| Tipo | Dropdown | Ingreso / Egreso | |
| Concepto | Texto | Venta del día / Compra insumos | Descripción libre |
| Monto | Moneda | $45.000 | Siempre positivo, el tipo define el signo |
| Medio de Pago | Dropdown | efectivo / mercadopago / transferencia / tarjeta | |
| Categoría | Dropdown | venta / inversion / prestamo / costo_insumo / gasto_fijo / retiro_socios / impuesto / otro | |
| Saldo Acumulado | Fórmula | =G(n-1)+/-D(n) | Se calcula solo |
| Notas | Texto | — | Opcional |

## Hoja 7: RESUMEN MENSUAL

| Columna | Tipo | Fórmula |
|---------|------|---------|
| Mes | Texto | Manual (2026-03) |
| Ventas Totales | Fórmula | =SUMIFS(VENTAS!E:E, VENTAS!A:A, ">="&DATE(...)) |
| Costo Variable | Fórmula | =SUMIFS(COSTOS!F:F, ...) |
| Gasto Fijo | Fórmula | =SUMIFS(FIJOS!C:C, FIJOS!A:A, A2) |
| Resultado Neto | Fórmula | =B2-C2-D2 |
| Margen % | Fórmula | =E2/B2*100 |
| Ticket Promedio | Fórmula | =B2/COUNTIFS(VENTAS!A:A, ...) |
| Ventas/Día | Fórmula | =COUNTIFS(...)/días_hábiles |

---

## Tips para los socios

- Cargar ventas al final del día (o en tiempo real si pueden)
- Stock: actualizar después de cada compra de insumos
- Gastos fijos: cargar una vez al mes
- Cashflow: registrar TODO movimiento de plata (ingresos Y egresos)
- Las fórmulas de RESUMEN y CASHFLOW se calculan solas, no tocar
