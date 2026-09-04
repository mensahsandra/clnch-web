import { createClient } from "@supabase/supabase-js";

// Supabase client initialization
// Returns null if environment variables are not configured
// This allows the app to work without Supabase (features that depend on it will gracefully degrade)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
