import { EmptyState } from "./empty-state";

interface Column {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  emptyMessage?: string;
  emptyDescription?: string;
  renderCell?: (key: string, value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

export function DataTable({
  columns,
  data,
  emptyMessage = "Sin datos",
  emptyDescription = "Todavía no hay datos cargados.",
  renderCell,
}: DataTableProps) {
  if (!data.length) {
    return <EmptyState title={emptyMessage} description={emptyDescription} />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`text-left text-xs font-bold uppercase tracking-wider text-bark-light/70 pb-3 border-b border-green-100 px-3 first:pl-0 ${
                  col.align === "right" ? "text-right" : ""
                } ${col.className || ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-green-50/50 transition-colors">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`py-3 text-sm text-bark border-b border-green-50 px-3 first:pl-0 ${
                    col.align === "right" ? "text-right" : ""
                  }`}
                >
                  {renderCell
                    ? renderCell(col.key, row[col.key], row)
                    : String(row[col.key] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
