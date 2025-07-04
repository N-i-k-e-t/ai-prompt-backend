import { useState } from 'react';

export default function CategoryForm({ onAdd }) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/generate-prompts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category_name: name, category_slug: slug })
    });
    const data = await res.json();
    if (data.success) {
      onAdd({ name, slug });
      setName('');
      setSlug('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Category name" className="border p-2 w-full" />
      <input value={slug} onChange={e => setSlug(e.target.value)} placeholder="Category slug" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Category + Generate Prompts</button>
    </form>
  );
}
