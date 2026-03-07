import { Suspense } from "react";
import { createSupabaseAdmin } from "@/lib/supabase";
import { fmtCurrency, fmtDate, fmtMonth, resolveRange, monthFromDate } from "@/lib/formatters";
import { DataTable } from "@/components/data-table";
import { StatCard } from "@/components/stat-card";
import { DateFilter } from "@/components/date-filter";

export const dynamic = "force-dynamic";

export default async function CashflowPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>;
}) {
  const params = await searchParams;
  const { start, end, isFiltered } = resolveRange(params);
  const sb = createSupabaseAdmin();

  const { data: cashflow } = await sb
    .from("fresco_cashflow")
    .select("*")
    .gte("date", start)
    .lte("date", end)
    .order("date", { ascending: false });

  const rows = cashflow || [];

  const ingresos = rows
    .filter((r) => r.type === "ingreso")
    .reduce((s, r) => s + (Number(r.amount) || 0), 0);
  const egresos = rows
    .filter((r) => r.type === "egreso")
    .reduce((s, r) => s + (Number(r.amount) || 0), 0);
  const neto = ingresos - egresos;

  const categoryLabels: Record<string, string> = {
    venta: "Venta",
    inversion: "Inversion",
    prestamo: "Prestamo",
    costo_insumo: "Insumos",
    gasto_fijo: "Gasto fijo",
    retiro_socios: "Retiro socios",
    impuesto: "Impuesto",
    otro: "Otro",
  };

  const rangeLabel = isFiltered
    ? `${fmtDate(start)} — ${fmtDate(end)}`
    : fmtMonth(monthFromDate(start));

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-bark">
          Cashflow
        </h1>
        <p className="text-sm text-bark-light mt-1">{rangeLabel}</p>
      </div>

      <Suspense fallback={null}>
        <DateFilter />
      </Suspense>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard title="Ingresos" value={fmtCurrency(ingresos)} icon="📈" accent />
        <StatCard title="Egresos" value={fmtCurrency(egresos)} icon="📉" />
        <StatCard
          title={isFiltered ? "Neto" : "Neto del mes"}
          value={fmtCurrency(neto)}
          icon={neto >= 0 ? "✅" : "⚠️"}
          accent
        />
      </div>

      <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
        <DataTable
          columns={[
            { key: "date", label: "Fecha" },
            { key: "type", label: "Tipo" },
            { key: "concept", label: "Concepto" },
            { key: "amount", label: "Monto", align: "right" },
            { key: "payment_method", label: "Medio" },
            { key: "category", label: "Categoria" },
          ]}
          data={rows}
          emptyMessage="Sin movimientos"
          emptyDescription="Carga ingresos y egresos en la hoja CASHFLOW del Sheet."
          renderCell={(key, value) => {
            if (key === "date") return fmtDate(value as string);
            if (key === "amount") return fmtCurrency(value as number);
            if (key === "type") {
              const isIngreso = value === "ingreso";
              return (
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                    isIngreso
                      ? "bg-green-100 text-green-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {isIngreso ? "Ingreso" : "Egreso"}
                </span>
              );
            }
            if (key === "category") return categoryLabels[value as string] || String(value);
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
