export default function FoodCard({ name, description, price, emoji, onAdd }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col">
      <div className="h-24 flex items-center justify-center bg-gray-50 text-5xl">
        {emoji}
      </div>

      <div className="p-3">
        <h2 className="font-medium text-sm mb-1">{name}</h2>
        <p className="text-xs text-gray-400 mb-3">{description}</p>
        <span className="font-semibold">{price}</span>
        <button onClick={onAdd} className="bg-black text-white text-xs px-3 py-1.5 rounded-lg">Add</button>
      </div>
    </div>
  );
}
