import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function generatePromptText(categoryName) {
  // Replace with Groq or OpenAI API call
  return `Example prompt for ${categoryName}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { data: categories } = await supabase.from('categories').select();

  for (const cat of categories) {
    const text = await generatePromptText(cat.name);
    await supabase.from('prompts').insert([{ text, category_id: cat.id }]);
  }

  return res.status(200).json({ success: true });
}
