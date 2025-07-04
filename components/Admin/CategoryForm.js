import { useState } from 'react';

export default function CategoryForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/add-category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, slug }),
      });
      if (!res.ok) throw new Error('Failed to add category');
      setName('');
      setSlug('');
      onSuccess();
    } catch (err) {
      console.error('❌', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        className="border p-2 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
}
