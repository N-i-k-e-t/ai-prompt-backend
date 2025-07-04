export default function CategoryList({ categories }) {
    return (
      <ul className="space-y-1">
        {categories.map((cat, i) => (
          <li key={i} className="p-2 bg-gray-100 rounded">
            {cat.name} ({cat.slug})
          </li>
        ))}
      </ul>
    );
  }
  