import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const categories = await prisma.category.findMany();
    res.json({ data: categories });
  } catch (err) {
    console.error('❌ get-categories error:', err);
    res.status(500).json({ error: 'Failed to load categories' });
  }
}
