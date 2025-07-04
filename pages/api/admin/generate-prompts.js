import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Example prompt generation logic (replace with your logic)
  const prompts = [
    { text: 'Example prompt 1', category_slug: 'example' },
    { text: 'Example prompt 2', category_slug: 'example' },
  ];

  const { data, error } = await supabase.from('prompts').insert(prompts);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ success: true, data });
}
