import { useState } from 'react';
import AdminLayout from "@/components/Admin/AdminLayout";

export default function AdminPanel() {
  const [catName, setCatName] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const [msg, setMsg] = useState('');

  const addCategory = async () => {
    try {
      const res = await fetch('/api/admin/add-category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: catName, slug: catSlug })
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('✅ Category added!');
        setCatName('');
        setCatSlug('');
      } else {
        setMsg(`❌ ${data.error || 'Failed to add category.'}`);
      }
    } catch (error) {
      setMsg(`❌ ${error.message}`);
    }
  };

  const generatePrompts = async () => {
    try {
      const res = await fetch('/api/admin/generate-prompts', {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('✅ Prompts generated!');
      } else {
        setMsg(`❌ ${data.error || 'Failed to generate prompts.'}`);
      }
    } catch (error) {
      setMsg(`❌ ${error.message}`);
    }
  };

  return (
    <AdminLayout>
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

        {/* Category Form */}
        <div className="mb-4 flex flex-wrap gap-2">
          <input
            className="border p-2 rounded w-48"
            placeholder="Category name"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
          <input
            className="border p-2 rounded w-48"
            placeholder="Category slug"
            value={catSlug}
            onChange={(e) => setCatSlug(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
            onClick={addCategory}
          >
            Add Category
          </button>
        </div>

        {/* Generate Prompts Button */}
        <div className="mb-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
            onClick={generatePrompts}
          >
            Generate Prompts
          </button>
        </div>

        {/* Status message */}
        {msg && (
          <div className="mt-2 text-sm font-medium">
            {msg}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
