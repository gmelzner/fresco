import { createSupabaseAdmin } from "@/lib/supabase";
import { fmtCurrency, fmtDate } from "@/lib/formatters";
import { DataTable } from "@/components/data-table";
import { StatCard } from "@/components/stat-card";

export const dynamic = "force-dynamic";

export default async function StockPage() {
  const sb = createSupabaseAdmin();

  const { data: stock } = await sb
    .from("fresco_stock")
    .select("*")
    .order("item");

  const rows = stock || [];
  const total = rows.length;
  const lowStock = rows.filter(
    (s) => Number(s.current_stock) < Number(s.min_stock)
  );
  const totalValue = rows.reduce(
    (s, r) => s + (Number(r.current_stock) || 0) * (Number(r.cost_per_unit) || 0),
    0
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-bark">
          Stock
        </h1>
        <p className="text-sm text-bark-light mt-1">Inventario actual</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard title="Items totales" value={String(total)} icon="🏪" />
        <StatCard
          title="Stock bajo"
          value={String(lowStock.length)}
          subtitle={lowStock.length > 0 ? "Necesitan reposición" : "Todo OK"}
          icon={lowStock.length > 0 ? "⚠️" : "✅"}
        />
        <StatCard
          title="Valor total stock"
          value={fmtCurrency(totalValue)}
          icon="💵"
          accent
        />
      </div>

      <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
        <DataTable
          columns={[
            { key: "item", label: "Insumo" },
            { key: "unit", label: "Unidad" },
            { key: "current_stock", label: "Stock", align: "right" },
            { key: "min_stock", label: "Mínimo", align: "right" },
            { key: "cost_per_unit", label: "Costo/U", align: "right" },
            { key: "supplier", label: "Proveedor" },
            { key: "last_purchase", label: "Últ. compra" },
          ]}
          data={rows}
          emptyMessage="Sin stock cargado"
          emptyDescription="Cargá el inventario en la hoja STOCK del Sheet."
          renderCell={(key, value, row) => {
            if (key === "cost_per_unit") return fmtCurrency(value as number);
            if (key === "last_purchase") return fmtDate(value as string);
            if (key === "current_stock") {
              const current = Number(value || 0);
              const min = Number(row.min_stock || 0);
              const isLow = current < min;
              return (
                <span className={isLow ? "text-red-600 font-bold" : ""}>
                  {current}
                </span>
              );
            }
            return String(value ?? "—");
          }}
        />
      </div>
    </div>
  );
}
