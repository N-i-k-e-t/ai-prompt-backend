import { useState } from 'react';

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
    <div className="p-6">
      <h1 className="text-2xl mb-4">Admin Panel</h1>

      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="Category name"
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Category slug"
          value={catSlug}
          onChange={(e) => setCatSlug(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addCategory}>
          Add Category
        </button>
      </div>

      <div className="mb-4">
        <button className="bg-green-500 text-white p-2 rounded" onClick={generatePrompts}>
          Generate Prompts
        </button>
      </div>

      {msg && <div className="mt-2">{msg}</div>}
    </div>
  );
}