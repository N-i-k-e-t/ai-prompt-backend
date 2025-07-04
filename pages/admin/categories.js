import { useEffect, useState } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import CategoryForm from '@/components/Admin/CategoryForm';
import CategoryList from '@/components/Admin/CategoryList';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/admin/get-categories')
      .then(res => res.json())
      .then(data => setCategories(data.data || []));
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-xl font-bold mb-4">Manage Categories</h1>
      <CategoryForm onAdd={cat => setCategories([...categories, cat])} />
      <CategoryList categories={categories} />
    </AdminLayout>
  );
}
