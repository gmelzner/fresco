import { Suspense } from "react";
import { createSupabaseAdmin } from "@/lib/supabase";
import { fmtCurrency, fmtDate, fmtMonth, resolveRange, monthFromDate } from "@/lib/formatters";
import { DataTable } from "@/components/data-table";
import { StatCard } from "@/components/stat-card";
import { DateFilter } from "@/components/date-filter";

export const dynamic = "force-dynamic";

export default async function VentasPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>;
}) {
  const params = await searchParams;
  const { start, end, isFiltered } = resolveRange(params);
  const sb = createSupabaseAdmin();

  const { data: sales } = await sb
    .from("fresco_daily_sales")
    .select("*")
    .gte("date", start)
    .lte("date", end)
    .order("date", { ascending: false });

  const rows = sales || [];
  const total = rows.reduce((s, r) => s + (Number(r.total) || 0), 0);

  const byProduct: Record<string, number> = {};
  rows.forEach((r) => {
    byProduct[r.product] = (byProduct[r.product] || 0) + Number(r.quantity || 0);
  });

  const topProduct = Object.entries(byProduct).sort((a, b) => b[1] - a[1])[0];

  const rangeLabel = isFiltered
    ? `${fmtDate(start)} — ${fmtDate(end)}`
    : fmtMonth(monthFromDate(start));

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-bark">
          Ventas
        </h1>
        <p className="text-sm text-bark-light mt-1">{rangeLabel}</p>
      </div>

      <Suspense fallback={null}>
        <DateFilter />
      </Suspense>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total vendido" value={fmtCurrency(total)} icon="💰" accent />
        <StatCard title="Pedidos" value={String(rows.length)} icon="📦" />
        {topProduct && (
          <StatCard
            title="Mas vendido"
            value={topProduct[0]}
            subtitle={`${topProduct[1]} unidades`}
            icon="🏆"
          />
        )}
      </div>

      <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
        <DataTable
          columns={[
            { key: "date", label: "Fecha" },
            { key: "product", label: "Producto" },
            { key: "quantity", label: "Cant.", align: "right" },
            { key: "unit_price", label: "Precio", align: "right" },
            { key: "total", label: "Total", align: "right" },
            { key: "channel", label: "Canal" },
            { key: "payment_method", label: "Pago" },
          ]}
          data={rows}
          emptyMessage="Sin ventas"
          emptyDescription="Carga ventas en el Google Sheet para verlas aca."
          renderCell={(key, value) => {
            if (key === "date") return fmtDate(value as string);
            if (key === "unit_price" || key === "total")
              return fmtCurrency(value as number);
            if (key === "channel") {
              const labels: Record<string, string> = {
                local: "Local",
                delivery: "Delivery",
                pedisy: "Pedisy",
                whatsapp: "WhatsApp",
              };
              return labels[value as string] || String(value);
            }
            if (key === "payment_method") {
              const labels: Record<string, string> = {
                efectivo: "Efectivo",
                mercadopago: "MercadoPago",
                transferencia: "Transferencia",
                tarjeta: "Tarjeta",
              };
              return labels[value as string] || String(value);
            }
            return String(value ?? "—");
          }}
        />
      </div>
    </div>
  );
}
