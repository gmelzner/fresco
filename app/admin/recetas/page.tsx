import { createSupabaseAdmin } from "@/lib/supabase";
import { fmtCurrency } from "@/lib/formatters";
import { EmptyState } from "@/components/empty-state";

export const dynamic = "force-dynamic";

interface Recipe {
  product: string;
  ingredient: string;
  quantity: number;
  unit: string;
  ingredient_cost: number;
}

export default async function RecetasPage() {
  const sb = createSupabaseAdmin();

  const { data: recipes } = await sb
    .from("fresco_recipes")
    .select("*")
    .order("product")
    .order("ingredient");

  const rows = (recipes || []) as Recipe[];

  // Group by product
  const grouped: Record<string, Recipe[]> = {};
  rows.forEach((r) => {
    if (!grouped[r.product]) grouped[r.product] = [];
    grouped[r.product].push(r);
  });

  const products = Object.entries(grouped);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-bark">
          Recetas
        </h1>
        <p className="text-sm text-bark-light mt-1">
          Costeo por producto — {products.length} recetas
        </p>
      </div>

      {products.length === 0 ? (
        <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
          <EmptyState
            title="Sin recetas"
            description="Cargá las recetas en la hoja RECETAS del Sheet para ver el costeo por producto."
          />
        </div>
      ) : (
        <div className="space-y-6">
          {products.map(([product, ingredients]) => {
            const totalCost = ingredients.reduce(
              (s, i) => s + (Number(i.ingredient_cost) || 0),
              0
            );
            return (
              <div
                key={product}
                className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-bark text-lg">
                    {product}
                  </h3>
                  <div className="text-right">
                    <div className="text-xs text-bark-light">Costo total</div>
                    <div className="text-lg font-bold text-green-700">
                      {fmtCurrency(totalCost)}
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-xs font-bold uppercase tracking-wider text-bark-light/70 pb-2 border-b border-green-100">
                          Ingrediente
                        </th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-bark-light/70 pb-2 border-b border-green-100">
                          Cantidad
                        </th>
                        <th className="text-left text-xs font-bold uppercase tracking-wider text-bark-light/70 pb-2 border-b border-green-100 pl-3">
                          Unidad
                        </th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-bark-light/70 pb-2 border-b border-green-100">
                          Costo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.map((ing, i) => (
                        <tr key={i} className="hover:bg-green-50/50">
                          <td className="py-2 text-sm text-bark border-b border-green-50">
                            {ing.ingredient}
                          </td>
                          <td className="py-2 text-sm text-bark text-right border-b border-green-50">
                            {ing.quantity}
                          </td>
                          <td className="py-2 text-sm text-bark-light border-b border-green-50 pl-3">
                            {ing.unit}
                          </td>
                          <td className="py-2 text-sm text-bark font-medium text-right border-b border-green-50">
                            {fmtCurrency(Number(ing.ingredient_cost) || 0)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
