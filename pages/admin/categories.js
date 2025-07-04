import { useEffect, useState } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import CategoryForm from '@/components/Admin/CategoryForm';
import CategoryList from '@/components/Admin/CategoryList';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/admin/get-categories');
      const data = await res.json();
      if (res.ok) {
        setCategories(data.data || []);
      } else {
        console.error(data.error || 'Failed to fetch categories');
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = (newCat) => {
    setCategories(prev => [...prev, newCat]);
  };

  return (
    <AdminLayout>
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4">Manage Categories</h1>

        <CategoryForm onAdd={handleAddCategory} />

        {loading ? (
          <p className="text-gray-500">Loading categories...</p>
        ) : (
          <CategoryList categories={categories} />
        )}
      </div>
    </AdminLayout>
  );
}
