import { createSupabaseAdmin } from "@/lib/supabase";
import { fmtCurrency, fmtDate, currentMonthRange, fmtMonth, currentMonth } from "@/lib/formatters";
import { DataTable } from "@/components/data-table";
import { StatCard } from "@/components/stat-card";

export const dynamic = "force-dynamic";

export default async function VentasPage() {
  const sb = createSupabaseAdmin();
  const { start, end } = currentMonthRange();

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

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-bark">
          Ventas
        </h1>
        <p className="text-sm text-bark-light mt-1">{fmtMonth(currentMonth())}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total vendido" value={fmtCurrency(total)} icon="💰" accent />
        <StatCard title="Pedidos" value={String(rows.length)} icon="📦" />
        {topProduct && (
          <StatCard
            title="Más vendido"
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
          emptyDescription="Cargá ventas en el Google Sheet para verlas acá."
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
