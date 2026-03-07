import { createSupabaseAdmin } from "@/lib/supabase";
import { fmtCurrency, fmtNumber, fmtMonth, currentMonthRange, currentMonth } from "@/lib/formatters";
import { StatCard } from "@/components/stat-card";
import { DataTable } from "@/components/data-table";
import { EmptyState } from "@/components/empty-state";

export const dynamic = "force-dynamic";

export default async function AdminOverview() {
  const sb = createSupabaseAdmin();
  const { start, end } = currentMonthRange();
  const month = currentMonth();

  // Fetch KPIs in parallel
  const [salesRes, cashflowRes, summaryRes, stockRes] = await Promise.all([
    sb
      .from("fresco_daily_sales")
      .select("total")
      .gte("date", start)
      .lte("date", end),
    sb
      .from("fresco_cashflow")
      .select("type, amount")
      .gte("date", start)
      .lte("date", end),
    sb
      .from("fresco_monthly_summary")
      .select("*")
      .order("month", { ascending: false })
      .limit(6),
    sb
      .from("fresco_stock")
      .select("*")
      .order("item"),
  ]);

  const sales = salesRes.data || [];
  const cashflows = cashflowRes.data || [];
  const summary = summaryRes.data || [];
  const stock = stockRes.data || [];

  const totalSales = sales.reduce((sum, s) => sum + (Number(s.total) || 0), 0);
  const totalOrders = sales.length;
  const avgTicket = totalOrders > 0 ? totalSales / totalOrders : 0;

  const ingresos = cashflows
    .filter((c) => c.type === "ingreso")
    .reduce((sum, c) => sum + (Number(c.amount) || 0), 0);
  const egresos = cashflows
    .filter((c) => c.type === "egreso")
    .reduce((sum, c) => sum + (Number(c.amount) || 0), 0);
  const saldo = ingresos - egresos;

  const lowStock = stock.filter(
    (s) => Number(s.current_stock) < Number(s.min_stock)
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-bark">
          Resumen
        </h1>
        <p className="text-sm text-bark-light mt-1">
          {fmtMonth(month)} — datos en tiempo real desde Supabase
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Ventas del mes"
          value={fmtCurrency(totalSales)}
          icon="💰"
          accent
        />
        <StatCard
          title="Pedidos"
          value={fmtNumber(totalOrders)}
          icon="📦"
        />
        <StatCard
          title="Ticket promedio"
          value={fmtCurrency(avgTicket)}
          icon="🎫"
        />
        <StatCard
          title="Saldo cashflow"
          value={fmtCurrency(saldo)}
          subtitle={`Ingresos: ${fmtCurrency(ingresos)} · Egresos: ${fmtCurrency(egresos)}`}
          icon="💸"
          accent
        />
      </div>

      {/* Stock alerts */}
      {lowStock.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8">
          <h3 className="font-display font-bold text-red-800 mb-3 flex items-center gap-2">
            <span>⚠️</span> Stock bajo ({lowStock.length} items)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {lowStock.map((s) => (
              <div
                key={s.item}
                className="bg-white rounded-xl border border-red-100 px-4 py-3 flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium text-bark">{s.item}</div>
                  <div className="text-xs text-bark-light">
                    Mín: {s.min_stock} {s.unit}
                  </div>
                </div>
                <div className="text-lg font-bold text-red-600">
                  {s.current_stock} {s.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resumen mensual */}
      <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
        <h3 className="font-display font-bold text-bark mb-4">
          Resumen mensual
        </h3>
        {summary.length > 0 ? (
          <DataTable
            columns={[
              { key: "month", label: "Mes" },
              { key: "total_sales", label: "Ventas", align: "right" },
              { key: "total_orders", label: "Pedidos", align: "right" },
              { key: "avg_ticket", label: "Ticket Prom.", align: "right" },
              { key: "avg_daily_sales", label: "Venta/Día", align: "right" },
            ]}
            data={summary}
            renderCell={(key, value) => {
              if (key === "month") return fmtMonth(value as string);
              if (key === "total_orders") return fmtNumber(value as number);
              return fmtCurrency(value as number);
            }}
          />
        ) : (
          <EmptyState
            title="Sin datos aún"
            description="Cuando carguen ventas en el Google Sheet y se sincronice via n8n, el resumen mensual aparece acá automáticamente."
          />
        )}
      </div>
    </div>
  );
}
