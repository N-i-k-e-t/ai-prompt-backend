import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Prompt ID is required' });
  }

  try {
    await prisma.prompt.delete({
      where: { id: parseInt(id) },
    });
    res.json({ success: true });
  } catch (err) {
    console.error('❌ delete-prompt error:', err);
    res.status(500).json({ error: 'Failed to delete prompt' });
  }
}
