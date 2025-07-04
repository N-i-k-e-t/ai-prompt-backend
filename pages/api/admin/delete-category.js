import { supabase } from '@/lib/supabaseClient';


export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });
  const { id } = req.query;
  const { error } = await supabase.from('categories').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: 'Category deleted' });
}
export const config = {
  api: {
    externalResolver: true, // Required for Supabase
  },
};