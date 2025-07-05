import { useEffect, useState } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import CategoryForm from '@/components/Admin/CategoryForm';
import CategoryList from '@/components/Admin/CategoryList';
import { getCategories } from '@/lib/api';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(err => console.error('❌ Failed to load categories:', err));
  }, [reload]);

  return (
    <AdminLayout title="Manage Categories">
      <CategoryForm onSuccess={() => setReload(!reload)} />
      <CategoryList categories={categories} />
    </AdminLayout>
  );
}