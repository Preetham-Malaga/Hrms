import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://obgdyebjkxitarbxejnx.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iZ2R5ZWJqa3hpdGFyYnhlam54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NjkzMTcsImV4cCI6MjA5NDM0NTMxN30.HKiGREg0CI4R2z6hlK85qzNiE_MDH8dXXNLUnDd-OJs";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  );