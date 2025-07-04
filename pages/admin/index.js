import { useState } from 'react';
import AdminLayout from "@/components/Admin/AdminLayout";

export default function AdminPanel() {
  const [catName, setCatName] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const [msg, setMsg] = useState('');

  const addCategory = async () => {
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
      setMsg(`❌ ${data.error}`);
    }
  };

  const generatePrompts = async () => {
    const res = await fetch('/api/admin/generate-prompts', {
      method: 'POST',
    });
    const data = await res.json();
    if (res.ok) {
      setMsg('✅ Prompts generated!');
    } else {
      setMsg(`❌ ${data.error}`);
    }
  };

  return (
    <AdminLayout>
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

        <div className="mb-4">
          <input
            className="border p-2 mr-2 rounded"
            placeholder="Category name"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
          <input
            className="border p-2 mr-2 rounded"
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

        <div className="mb-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
            onClick={generatePrompts}
          >
            Generate Prompts
          </button>
        </div>

        {msg && (
          <div className="mt-2 text-sm">
            {msg}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
