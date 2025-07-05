import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { category_name, category_slug } = req.body;

  if (!category_name || !category_slug) {
    return res.status(400).json({ success: false, error: 'Missing category_name or category_slug' });
  }

  // Example dynamic prompts
  const prompts = [
    { text: `Write a ${category_name} email subject line that boosts open rates.`, category_slug },
    { text: `Generate a ${category_name} social media caption for Instagram.`, category_slug },
    { text: `Create a ${category_name} tagline for a product launch.`, category_slug },
  ];

  const { data, error } = await supabase
    .from('prompts')
    .insert(prompts)
    .select(); // ⚡ Return inserted rows

  if (error) {
    return res.status(500).json({ success: false, error: error.message });
  }

  res.status(200).json({ success: true, data });
}