"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoutButton } from "./logout-button";

const navItems = [
  { href: "/admin", label: "Resumen", icon: "📊" },
  { href: "/admin/ventas", label: "Ventas", icon: "💰" },
  { href: "/admin/costos", label: "Costos", icon: "📦" },
  { href: "/admin/stock", label: "Stock", icon: "🏪" },
  { href: "/admin/cashflow", label: "Cashflow", icon: "💸" },
  { href: "/admin/recetas", label: "Recetas", icon: "📋" },
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
        className="fixed top-4 left-4 z-50 md:hidden bg-bark text-white p-2 rounded-xl shadow-lg"
        aria-label="Abrir menú"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
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
        className={`fixed top-0 left-0 h-full w-60 bg-bark z-50 flex flex-col transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:static md:z-auto`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/10">
          <span className="font-display text-xl font-bold text-green-400">
            FRESCO
          </span>
          <p className="text-white/40 text-xs mt-0.5">Admin</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-green-600/20 text-green-400 border-l-2 border-green-400"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-white/10">
          <LogoutButton />
        </div>
      </aside>
    </>
  );
}
