import { useState } from "react";
import menu from "./components/data/menu";
import FoodCard from "./components/FoodCard";
import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CtegoryFilter";
import Cart from "./components/Cart";
export default function App() {
  const [activeCategory, setActiveCategory] = useState("all")
  const filtered = activeCategory === "all" ? menu :menu.filter((item) => item.category == activeCategory) 
  const [cart, setCart] = useState([])
  const addTocart = (item) => {
  const exists = cart.find((i) => i.id === item.id)
  if (exists) {
    setCart(cart.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
  } else {
    setCart([...cart, { ...item, qty: 1 }])
  }
}
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  return (
   <div>
    <Navbar cartCount={cart.length}/>
    <CategoryFilter onSelect={setActiveCategory} active={activeCategory} />
    <div className="flex">

  
    <div className="grid grid-cols-2 gap-4 p-6 flex-1">
      {filtered.map((item) => (
        <FoodCard
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          emoji={item.emoji}
          onAdd={() => addTocart(item)}
        />
      ))}
    </div>
        <Cart cart={cart}  total={total}/>
      </div>
    </div>
  );
}
