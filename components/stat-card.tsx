interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: string;
  accent?: boolean;
}

export function StatCard({ title, value, subtitle, icon, accent }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-green-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-bark-light">{title}</span>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      <div
        className={`text-2xl font-bold ${accent ? "text-green-700" : "text-bark"}`}
      >
        {value}
      </div>
      {subtitle && (
        <p className="text-xs text-bark-light/60 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
