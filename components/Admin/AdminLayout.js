export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      {children}
    </div>
  );
}
