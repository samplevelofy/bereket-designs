import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.json();
  const { id, ...updateData } = formData;
  if (!id) return new Response(JSON.stringify({ error: 'Design ID is required' }), { status: 400 });
  const { data, error } = await supabase.from('designs').update(updateData).eq('id', id).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data));
};