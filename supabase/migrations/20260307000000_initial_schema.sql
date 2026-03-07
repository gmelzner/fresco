-- FRESCO — Schema inicial
-- Ejecutar en el proyecto Supabase nuevo (sa-east-1)
-- Fecha: 2026-03-07

-- ============================================
-- VENTAS DIARIAS
-- ============================================
CREATE TABLE fresco_daily_sales (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  product TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price NUMERIC(10,2) NOT NULL,
  total NUMERIC(10,2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
  channel TEXT DEFAULT 'local' CHECK (channel IN ('local', 'delivery')),
  payment_method TEXT DEFAULT 'efectivo' CHECK (payment_method IN ('efectivo', 'mercadopago', 'transferencia')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- COSTOS VARIABLES (insumos)
-- ============================================
CREATE TABLE fresco_variable_costs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  item TEXT NOT NULL,
  supplier TEXT,
  quantity NUMERIC(10,2) NOT NULL,
  unit TEXT NOT NULL CHECK (unit IN ('kg', 'unidad', 'litro', 'paquete', 'docena')),
  cost NUMERIC(10,2) NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('proteina', 'verdura', 'envase', 'condimento', 'lacteo', 'panificado', 'otro')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- GASTOS FIJOS MENSUALES
-- ============================================
CREATE TABLE fresco_fixed_costs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  month TEXT NOT NULL,                  -- formato: 2026-03
  concept TEXT NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('alquiler', 'servicios', 'pedisy', 'marketing', 'sueldos', 'impuestos', 'otro')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- STOCK
-- ============================================
CREATE TABLE fresco_stock (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  item TEXT NOT NULL UNIQUE,
  unit TEXT NOT NULL,
  current_stock NUMERIC(10,2) NOT NULL DEFAULT 0,
  min_stock NUMERIC(10,2) NOT NULL DEFAULT 0,
  cost_per_unit NUMERIC(10,2),
  supplier TEXT,
  last_purchase DATE,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- RECETAS (costeo por producto)
-- ============================================
CREATE TABLE fresco_recipes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product TEXT NOT NULL,
  ingredient TEXT NOT NULL,
  quantity NUMERIC(10,3) NOT NULL,
  unit TEXT NOT NULL,
  ingredient_cost NUMERIC(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- VISTA: Resumen mensual (calculado)
-- ============================================
CREATE VIEW fresco_monthly_summary AS
SELECT
  TO_CHAR(s.date, 'YYYY-MM') AS month,
  SUM(s.total) AS total_sales,
  COUNT(s.id) AS total_orders,
  ROUND(AVG(s.total), 2) AS avg_ticket,
  ROUND(SUM(s.total) / COUNT(DISTINCT s.date), 2) AS avg_daily_sales
FROM fresco_daily_sales s
GROUP BY TO_CHAR(s.date, 'YYYY-MM')
ORDER BY month DESC;

-- ============================================
-- INDICES
-- ============================================
CREATE INDEX idx_sales_date ON fresco_daily_sales(date);
CREATE INDEX idx_sales_product ON fresco_daily_sales(product);
CREATE INDEX idx_costs_date ON fresco_variable_costs(date);
CREATE INDEX idx_costs_category ON fresco_variable_costs(category);
CREATE INDEX idx_fixed_month ON fresco_fixed_costs(month);
CREATE INDEX idx_stock_item ON fresco_stock(item);
CREATE INDEX idx_recipes_product ON fresco_recipes(product);
