const currencyFmt = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const percentFmt = new Intl.NumberFormat("es-AR", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const dateFmt = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

export function fmtCurrency(n: number | null) {
  if (n === null || n === undefined) return "$0";
  return currencyFmt.format(n);
}

export function fmtDate(date: string | null) {
  if (!date) return "—";
  return dateFmt.format(new Date(date + "T12:00:00"));
}

export function fmtMonth(yyyymm: string | null) {
  if (!yyyymm) return "—";
  const [year, month] = yyyymm.split("-");
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

export function fmtPercent(n: number | null) {
  if (n === null || n === undefined) return "—";
  return percentFmt.format(n);
}

export function fmtNumber(n: number | null) {
  if (n === null || n === undefined) return "0";
  return n.toLocaleString("es-AR");
}

export function currentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export function currentMonthRange() {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const start = new Date(y, m, 1).toISOString().split("T")[0];
  const end = new Date(y, m + 1, 0).toISOString().split("T")[0];
  return { start, end };
}
