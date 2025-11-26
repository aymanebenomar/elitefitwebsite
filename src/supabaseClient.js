import { createClient } from "@supabase/supabase-js";

// Get these values from your Supabase project settings
const SUPABASE_URL = "https://slojjvqyjjakbbcwxeom.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsb2pqdnF5ampha2JiY3d4ZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMDI2NzgsImV4cCI6MjA3Nzc3ODY3OH0.ym1LPe9X6U8M0Ut0jAuZWyYx1PF7l8mEYesasxHe-bE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
