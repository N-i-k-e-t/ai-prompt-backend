import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const prompts = await prisma.prompt.findMany();
    res.json({ data: prompts });
  } catch (err) {
    console.error('❌ get-prompts error:', err);
    res.status(500).json({ error: 'Failed to load prompts' });
  }
}
