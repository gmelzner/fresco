export default function SociosPage() {
  return (
    <div className="min-h-screen bg-[#faf8f3] flex items-center justify-center font-[family-name:var(--font-inter)]">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold text-[#2d2520] font-[family-name:var(--font-playfair)] mb-4">
          Panel de Socios
        </h1>
        <p className="text-lg text-[#2d2520]/60 mb-8 max-w-md">
          Dashboard de gestión financiera, stock y operaciones de FRESCO.
          En desarrollo.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-[#10b981] text-white rounded-xl hover:bg-[#059669] transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
