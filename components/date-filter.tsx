"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { CalendarDays } from "lucide-react";

function toISO(date: Date) {
  return date.toISOString().split("T")[0];
}

function getPresets() {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const d = now.getDate();
  const dow = now.getDay(); // 0=Sun

  // Hoy
  const today = toISO(now);

  // Esta semana (lunes a domingo)
  const monday = new Date(y, m, d - ((dow + 6) % 7));
  const sunday = new Date(y, m, d - ((dow + 6) % 7) + 6);

  // Este mes
  const monthStart = toISO(new Date(y, m, 1));
  const monthEnd = toISO(new Date(y, m + 1, 0));

  // Mes anterior
  const prevStart = toISO(new Date(y, m - 1, 1));
  const prevEnd = toISO(new Date(y, m, 0));

  return [
    { label: "Hoy", from: today, to: today },
    { label: "Esta semana", from: toISO(monday), to: toISO(sunday) },
    { label: "Este mes", from: monthStart, to: monthEnd },
    { label: "Mes anterior", from: prevStart, to: prevEnd },
  ];
}

export function DateFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";

  const presets = useMemo(() => getPresets(), []);

  const applyRange = useCallback(
    (newFrom: string, newTo: string) => {
      const params = new URLSearchParams();
      params.set("from", newFrom);
      params.set("to", newTo);
      router.push(pathname + "?" + params.toString());
    },
    [router, pathname]
  );

  const clearFilter = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  // Check which preset is active
  const activePreset = presets.findIndex(
    (p) => p.from === from && p.to === to
  );
  const isFiltered = !!from && !!to;
  const isCustom = isFiltered && activePreset === -1;

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Quick-select buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 -mx-1 px-1">
          <CalendarDays className="w-4 h-4 text-bark-light/40 shrink-0 mr-1" />
          {presets.map((preset, i) => (
            <button
              key={preset.label}
              onClick={() => applyRange(preset.from, preset.to)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                activePreset === i
                  ? "bg-green-100 text-green-700 ring-1 ring-green-300"
                  : "bg-white text-bark-light hover:bg-green-50 hover:text-green-700 border border-green-100"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Custom date inputs */}
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={from}
            onChange={(e) => {
              if (e.target.value && to) {
                applyRange(e.target.value, to);
              } else if (e.target.value) {
                applyRange(e.target.value, e.target.value);
              }
            }}
            className="px-3 py-1.5 rounded-lg border border-green-200 bg-white text-bark text-xs focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
          <span className="text-bark-light/40 text-xs">—</span>
          <input
            type="date"
            value={to}
            onChange={(e) => {
              if (from && e.target.value) {
                applyRange(from, e.target.value);
              } else if (e.target.value) {
                applyRange(e.target.value, e.target.value);
              }
            }}
            className="px-3 py-1.5 rounded-lg border border-green-200 bg-white text-bark text-xs focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />

          {/* Clear button */}
          {isFiltered && (
            <button
              onClick={clearFilter}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                isCustom
                  ? "bg-orange-100 text-orange-700 ring-1 ring-orange-300"
                  : "text-bark-light/50 hover:text-bark-light hover:bg-green-50"
              }`}
            >
              Limpiar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
