import { useEffect, useState } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import PromptList from '@/components/Admin/PromptList';
import GeneratePromptButton from '@/components/Admin/GeneratePromptButton';

export default function PromptsPage() {
  const [prompts, setPrompts] = useState([]);

  // Fetch prompts on load
  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    try {
      const res = await fetch('/api/admin/get-prompts');
      const data = await res.json();
      setPrompts(data.data || []);
    } catch (err) {
      console.error('Failed to fetch prompts:', err);
    }
  };

  const handleGenerated = (newPrompts) => {
    setPrompts(prev => [...prev, ...newPrompts]);
  };

  return (
    <AdminLayout>
      <h1 className="text-xl font-bold mb-4">Manage Prompts</h1>
      <GeneratePromptButton onGenerated={handleGenerated} />
      <PromptList prompts={prompts} />
    </AdminLayout>
  );
}
