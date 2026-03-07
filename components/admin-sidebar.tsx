"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  Receipt,
  Warehouse,
  ArrowLeftRight,
  ChefHat,
  Leaf,
  Menu,
} from "lucide-react";
import { LogoutButton } from "./logout-button";

const navItems = [
  { href: "/admin", label: "Resumen", icon: LayoutDashboard },
  { href: "/admin/ventas", label: "Ventas", icon: TrendingUp },
  { href: "/admin/costos", label: "Costos", icon: Receipt },
  { href: "/admin/stock", label: "Stock", icon: Warehouse },
  { href: "/admin/cashflow", label: "Cashflow", icon: ArrowLeftRight },
  { href: "/admin/recetas", label: "Recetas", icon: ChefHat },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-[#1a1f2e] text-white p-2.5 rounded-xl shadow-lg"
        aria-label="Abrir menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-[#1a1f2e] z-50 flex flex-col transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:static md:z-auto`}
      >
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <Leaf className="w-6 h-6 text-green-400" />
            <span className="font-display text-lg font-bold text-white tracking-tight">
              FRESCO
            </span>
          </div>
          <p className="text-slate-500 text-[11px] uppercase tracking-widest mt-1 ml-[34px]">
            Panel admin
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-green-500/15 text-green-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-white/5">
          <LogoutButton />
        </div>
      </aside>
    </>
  );
}
