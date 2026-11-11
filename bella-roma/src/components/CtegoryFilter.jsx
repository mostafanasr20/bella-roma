export default function CategoryFilter({ onSelect, active }) {
  return (
    <div className="flex items-center justify-center gap-5 mt-15">
      <button onClick={() => onSelect("all")} className={`rounded-full px-6 py-2 font-bold cursor-pointer ${active === "all" ? "bg-black text-white" : "border border-gray-300 text-gray-600"}`}>All</button>
      <button onClick={() => onSelect("pizza")} className={`rounded-full px-6 py-2 text-sm cursor-pointer ${active === "pizza" ? "bg-black text-white" : "border border-gray-300 text-gray-600"}`}>🍕 Pizza</button>
      <button onClick={() => onSelect("pasta")} className={`rounded-full px-6 py-2 text-sm cursor-pointer ${active === "pasta" ? "bg-black text-white" : "border border-gray-300 text-gray-600"}`}>🍝 Pasta</button>
      <button onClick={() => onSelect("salad")} className={`rounded-full px-6 py-2 text-sm cursor-pointer ${active === "salad" ? "bg-black text-white" : "border border-gray-300 text-gray-600"}`}>🥗 Salads</button>
      <button onClick={() => onSelect("dessert")} className={`rounded-full px-6 py-2 text-sm cursor-pointer ${active === "dessert" ? "bg-black text-white" : "border border-gray-300 text-gray-600"}`}>🍰 Desserts</button>
    </div>
  )
}