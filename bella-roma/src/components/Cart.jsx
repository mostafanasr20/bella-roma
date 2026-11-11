export default function Cart({ cart, total }) {
  return (
    <div className="w-64 bg-white border-l border-gray-200 p-4 min-h-screen">
      <div className="font-semibold text-sm mb-4">🛒 Your order</div>
      {cart.length === 0 ? (
        <p className="text-xs text-gray-400">No items yet.</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between items-center bg-gray-50 rounded-lg p-2 mb-2">
              <div>
                <div className="text-sm font-medium">{item.name} x{item.qty}</div>
                <div className="text-xs text-gray-400">${item.price}</div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-500">Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-semibold">
              Place order
            </button>
          </div>
        </>
      )}
    </div>
  )
}