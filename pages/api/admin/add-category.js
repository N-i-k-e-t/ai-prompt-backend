import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { name, slug } = req.body;
  const { data, error } = await supabase
    .from('categories')
    .insert([{ name, slug }]);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(200).json({ data });
}
