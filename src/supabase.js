import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gxxidlbsnhqhsaiheujp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4eGlkbGJzbmhxaHNhaWhldWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5Nzc0NTksImV4cCI6MTk5NDU1MzQ1OX0.bLKNDQUAIK9NwDv8BqBbDpbOnOoKUHRIinsf0tY8LSY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
