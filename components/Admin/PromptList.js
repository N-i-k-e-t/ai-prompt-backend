export default function PromptList({ prompts, onDelete }) {
  if (prompts.length === 0) {
    return <p className="text-gray-500">No prompts found.</p>;
  }

  return (
    <ul>
      {prompts.map(prompt => (
        <li key={prompt.id} className="flex justify-between border-b py-1">
          {prompt.text}
          <button 
            onClick={() => onDelete(prompt.id)} 
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
