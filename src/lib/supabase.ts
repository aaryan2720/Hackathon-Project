import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lwkwqeuultxwvqpvrwpk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3a3dxZXV1bHR4d3ZxcHZyd3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NTYwMzgsImV4cCI6MjA1NTUzMjAzOH0.yNB4P4_zhdanZjWvFBv4CrpVLOnILRrqg83hjIF8svE';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);