import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow p-4">
      <h2 className="text-lg font-bold mb-4">Admin</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/admin">
            <span className="block p-2 rounded hover:bg-gray-200 cursor-pointer">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/categories">
            <span className="block p-2 rounded hover:bg-gray-200 cursor-pointer">Categories</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/prompts">
            <span className="block p-2 rounded hover:bg-gray-200 cursor-pointer">Prompts</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
