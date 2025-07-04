export default function CategoryList({ categories }) {
  if (categories.length === 0) {
    return <p className="text-gray-500">No categories found.</p>;
  }

  return (
    <ul>
      {categories.map(cat => (
        <li key={cat.id} className="border-b py-1">
          <strong>{cat.name}</strong> ({cat.slug})
        </li>
      ))}
    </ul>
  );
}
