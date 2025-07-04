import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 min-h-screen p-4">
      <h2 className="font-bold mb-4">Admin</h2>
      <ul>
        <li><Link href="/admin">Dashboard</Link></li>
        <li><Link href="/admin/categories">Categories</Link></li>
        <li><Link href="/admin/prompts">Prompts</Link></li>
      </ul>
    </div>
  );
}
