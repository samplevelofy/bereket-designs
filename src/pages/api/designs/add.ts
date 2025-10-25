import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.json();
  const { data, error } = await supabase.from('designs').insert(formData).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data));
};