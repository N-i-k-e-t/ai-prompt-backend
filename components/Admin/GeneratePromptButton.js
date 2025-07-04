export default function GeneratePromptButton({ onSuccess }) {
  async function handleGenerate() {
    try {
      const res = await fetch('/api/admin/generate-prompts', { method: 'POST' });
      if (!res.ok) throw new Error('Failed to generate prompts');
      onSuccess();
    } catch (err) {
      console.error('❌', err);
    }
  }

  return (
    <button 
      onClick={handleGenerate}
      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded mb-4"
    >
      Generate Prompts
    </button>
  );
}
