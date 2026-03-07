"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all duration-200"
    >
      <LogOut className="w-5 h-5 shrink-0" />
      Cerrar sesion
    </button>
  );
}
