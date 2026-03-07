import { AdminSidebar } from "@/components/admin-sidebar";

export const metadata = {
  title: "FRESCO Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-cream">
      <AdminSidebar />
      <main className="flex-1 min-w-0">
        <div className="max-w-6xl mx-auto pl-14 pr-4 md:px-8 pt-16 md:pt-8 pb-6 md:pb-8">
          {children}
        </div>
      </main>
    </div>
  );
}
