import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
export const POST: APIRoute = async ({ request }) => {
  const { id } = await request.json();
  if (!id) return new Response(JSON.stringify({ error: 'Design ID is required' }), { status: 400 });
  const { error } = await supabase.from('designs').delete().eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ message: 'Design deleted successfully' }));
};