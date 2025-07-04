export async function getCategories() {
    const res = await fetch('/api/admin/get-categories');
    if (!res.ok) throw new Error('Failed to fetch categories');
    const data = await res.json();
    return data.data || [];
  }
  
  export async function getPrompts() {
    const res = await fetch('/api/admin/get-prompts');
    if (!res.ok) throw new Error('Failed to fetch prompts');
    const data = await res.json();
    return data.data || [];
  }
  
  export async function deletePrompt(id) {
    const res = await fetch(`/api/admin/delete-prompt?id=${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete prompt');
  }
  