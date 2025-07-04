import { useEffect, useState } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import PromptList from '@/components/Admin/PromptList';
import GeneratePromptButton from '@/components/Admin/GeneratePromptButton';

export default function PromptsPage() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch('/api/admin/get-prompts')
      .then(res => res.json())
      .then(data => setPrompts(data.data || []));
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-xl font-bold mb-4">Manage Prompts</h1>
      <GeneratePromptButton onGenerated={newPrompts => setPrompts([...prompts, ...newPrompts])} />
      <PromptList prompts={prompts} />
    </AdminLayout>
  );
}
