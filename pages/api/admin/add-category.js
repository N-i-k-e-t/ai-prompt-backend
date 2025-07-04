import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, slug } = req.body;

  if (!name || !slug) {
    return res.status(400).json({ error: 'Name and slug are required' });
  }

  try {
    await prisma.category.create({
      data: { name, slug },
    });
    res.json({ success: true });
  } catch (err) {
    console.error('❌ add-category error:', err);
    res.status(500).json({ error: 'Failed to add category' });
  }
}
