-- ============================================
-- CASHFLOW (flujo de caja)
-- ============================================
CREATE TABLE fresco_cashflow (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('ingreso', 'egreso')),
  concept TEXT NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  payment_method TEXT DEFAULT 'efectivo' CHECK (payment_method IN ('efectivo', 'mercadopago', 'transferencia', 'tarjeta')),
  category TEXT NOT NULL CHECK (category IN ('venta', 'inversion', 'prestamo', 'costo_insumo', 'gasto_fijo', 'retiro_socios', 'impuesto', 'otro')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_cashflow_date ON fresco_cashflow(date);
CREATE INDEX idx_cashflow_type ON fresco_cashflow(type);
CREATE INDEX idx_cashflow_category ON fresco_cashflow(category);

-- ============================================
-- Actualizar CHECK constraints de tablas existentes
-- (agregar canales y medios de pago faltantes)
-- ============================================
ALTER TABLE fresco_daily_sales DROP CONSTRAINT IF EXISTS fresco_daily_sales_channel_check;
ALTER TABLE fresco_daily_sales ADD CONSTRAINT fresco_daily_sales_channel_check 
  CHECK (channel IN ('local', 'delivery', 'pedisy', 'whatsapp'));

ALTER TABLE fresco_daily_sales DROP CONSTRAINT IF EXISTS fresco_daily_sales_payment_method_check;
ALTER TABLE fresco_daily_sales ADD CONSTRAINT fresco_daily_sales_payment_method_check 
  CHECK (payment_method IN ('efectivo', 'mercadopago', 'transferencia', 'tarjeta'));
