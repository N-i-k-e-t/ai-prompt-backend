import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Example: generate 3 prompts (customize as needed)
    await prisma.prompt.createMany({
      data: [
        { text: 'Example prompt 1' },
        { text: 'Example prompt 2' },
        { text: 'Example prompt 3' },
      ],
    });
    res.json({ success: true });
  } catch (err) {
    console.error('❌ generate-prompts error:', err);
    res.status(500).json({ error: 'Failed to generate prompts' });
  }
}
