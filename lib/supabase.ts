import { createClient } from "@supabase/supabase-js";

// Server-only: uses service_role key to bypass RLS
// NEVER import this from "use client" components
export function createSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
