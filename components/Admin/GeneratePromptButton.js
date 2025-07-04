export default function GeneratePromptButton({ onGenerated }) {
    const handleClick = async () => {
      const res = await fetch('/api/admin/generate-prompts', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        // optional: refetch or pass generated prompts
        onGenerated(data.data || []);
      }
    };
  
    return (
      <button onClick={handleClick} className="bg-green-600 text-white px-4 py-2 rounded mb-4">
        Generate New Prompts
      </button>
    );
  }
  