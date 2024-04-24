import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const supabaseUrl = "https://mywxppbvamuhxylrfqww.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15d3hwcGJ2YW11aHh5bHJmcXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMTI5NDksImV4cCI6MjAyNjc4ODk0OX0.1x1LLzzYlOxbVwCRv2kcvNmS4LYT6M2tLDwEAULE5T4";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
