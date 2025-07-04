import { useEffect, useState } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import PromptList from '@/components/Admin/PromptList';
import GeneratePromptButton from '@/components/Admin/GeneratePromptButton';

export default function PromptsPage() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPrompts = async () => {
    try {
      const res = await fetch('/api/admin/get-prompts');
      const data = await res.json();
      if (res.ok) {
        setPrompts(data.data || []);
      } else {
        console.error(data.error || 'Failed to fetch prompts');
      }
    } catch (err) {
      console.error('Error fetching prompts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  const handleGenerated = (newPrompts) => {
    setPrompts(prev => [...prev, ...newPrompts]);
  };

  return (
    <AdminLayout>
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4">Manage Prompts</h1>

        <GeneratePromptButton onGenerated={handleGenerated} />

        {loading ? (
          <p className="text-gray-500">Loading prompts...</p>
        ) : (
          <PromptList prompts={prompts} />
        )}
      </div>
    </AdminLayout>
  );
}
