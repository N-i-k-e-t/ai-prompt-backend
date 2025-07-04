import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>
      <nav className="space-y-2">
        <Link href="/admin/categories" className="block p-2 rounded hover:bg-gray-700">Categories</Link>
        <Link href="/admin/prompts" className="block p-2 rounded hover:bg-gray-700">Prompts</Link>
      </nav>
    </div>
  );
}
