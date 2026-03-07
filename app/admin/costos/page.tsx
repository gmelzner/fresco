import { Suspense } from "react";
import { createSupabaseAdmin } from "@/lib/supabase";
import { fmtCurrency, fmtDate, fmtMonth, resolveRange, monthFromDate } from "@/lib/formatters";
import { DataTable } from "@/components/data-table";
import { StatCard } from "@/components/stat-card";
import { DateFilter } from "@/components/date-filter";

export const dynamic = "force-dynamic";

export default async function CostosPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>;
}) {
  const params = await searchParams;
  const { start, end, isFiltered } = resolveRange(params);
  const month = monthFromDate(start);
  const sb = createSupabaseAdmin();

  const [varRes, fixRes] = await Promise.all([
    sb
      .from("fresco_variable_costs")
      .select("*")
      .gte("date", start)
      .lte("date", end)
      .order("date", { ascending: false }),
    sb
      .from("fresco_fixed_costs")
      .select("*")
      .eq("month", month)
      .order("concept"),
  ]);

  const variable = varRes.data || [];
  const fixed = fixRes.data || [];

  const totalVariable = variable.reduce((s, r) => s + (Number(r.cost) || 0), 0);
  const totalFixed = fixed.reduce((s, r) => s + (Number(r.amount) || 0), 0);

  const categoryLabels: Record<string, string> = {
    proteina: "Proteina",
    verdura: "Verdura",
    envase: "Envase",
    condimento: "Condimento",
    lacteo: "Lacteo",
    panificado: "Panificado",
    otro: "Otro",
    alquiler: "Alquiler",
    servicios: "Servicios",
    pedisy: "Pedisy",
    marketing: "Marketing",
    sueldos: "Sueldos",
    impuestos: "Impuestos",
  };

  const rangeLabel = isFiltered
    ? `${fmtDate(start)} — ${fmtDate(end)}`
    : fmtMonth(month);

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-bark">
          Costos
        </h1>
        <p className="text-sm text-bark-light mt-1">{rangeLabel}</p>
      </div>

      <Suspense fallback={null}>
        <DateFilter />
      </Suspense>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard title="Costos variables" value={fmtCurrency(totalVariable)} icon="📦" />
        <StatCard title="Gastos fijos" value={fmtCurrency(totalFixed)} icon="🏢" />
        <StatCard
          title="Total costos"
          value={fmtCurrency(totalVariable + totalFixed)}
          icon="💸"
          accent
        />
      </div>

      {/* Costos variables */}
      <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm mb-6">
        <h3 className="font-display font-bold text-bark mb-4">
          Costos variables (insumos)
        </h3>
        <DataTable
          columns={[
            { key: "date", label: "Fecha" },
            { key: "item", label: "Insumo" },
            { key: "supplier", label: "Proveedor" },
            { key: "quantity", label: "Cant.", align: "right" },
            { key: "unit", label: "Unidad" },
            { key: "cost", label: "Costo", align: "right" },
            { key: "category", label: "Categoria" },
          ]}
          data={variable}
          emptyMessage="Sin costos variables"
          emptyDescription="Carga compras de insumos en el Sheet."
          renderCell={(key, value) => {
            if (key === "date") return fmtDate(value as string);
            if (key === "cost") return fmtCurrency(value as number);
            if (key === "category") return categoryLabels[value as string] || String(value);
            return String(value ?? "—");
          }}
        />
      </div>

      {/* Gastos fijos */}
      <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
        <h3 className="font-display font-bold text-bark mb-4">
          Gastos fijos
          {isFiltered && (
            <span className="text-sm font-normal text-bark-light ml-2">
              ({fmtMonth(month)})
            </span>
          )}
        </h3>
        <DataTable
          columns={[
            { key: "concept", label: "Concepto" },
            { key: "amount", label: "Monto", align: "right" },
            { key: "category", label: "Categoria" },
          ]}
          data={fixed}
          emptyMessage="Sin gastos fijos"
          emptyDescription="Carga gastos fijos del mes en el Sheet."
          renderCell={(key, value) => {
            if (key === "amount") return fmtCurrency(value as number);
            if (key === "category") return categoryLabels[value as string] || String(value);
            return String(value ?? "—");
          }}
        />
      </div>
    </div>
  );
}
