export default function PromptList({ prompts }) {
    return (
      <ul className="space-y-1">
        {prompts.map((p, i) => (
          <li key={i} className="p-2 bg-gray-100 rounded">
            {p.prompt} <span className="text-gray-500 text-sm">[{p.category_slug}]</span>
          </li>
        ))}
      </ul>
    );
  }
  