import { useEffect, useState } from "react";

export default function PromptsPage() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch("/api/admin/get-prompts")  // Or your endpoint
      .then(res => res.json())
      .then(data => setPrompts(data.data || []));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Generated Prompts</h1>
      <ul className="space-y-2">
        {prompts.map((p, i) => (
          <li key={i} className="p-2 bg-gray-100 rounded">{p.prompt}</li>
        ))}
      </ul>
    </div>
  );
}
