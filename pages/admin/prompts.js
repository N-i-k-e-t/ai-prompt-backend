import { useEffect, useState } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import GeneratePromptButton from '@/components/Admin/GeneratePromptButton';
import PromptList from '@/components/Admin/PromptList';
import { getPrompts, deletePrompt } from '@/lib/api';

export default function PromptsPage() {
  const [prompts, setPrompts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getPrompts()
      .then(setPrompts)
      .catch(err => console.error('❌ Failed to load prompts:', err));
  }, [reload]);

  const handleDelete = async (id) => {
    try {
      await deletePrompt(id);
      setReload(!reload);
    } catch (err) {
      console.error('❌ Failed to delete prompt:', err);
    }
  };

  return (
    <AdminLayout title="Manage Prompts">
      <GeneratePromptButton onSuccess={() => setReload(!reload)} />
      <PromptList prompts={prompts} onDelete={handleDelete} />
    </AdminLayout>
  );
}
