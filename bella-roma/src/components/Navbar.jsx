export default function Navbar({cartCount }){
    return(
        <nav className="bg-black flex items-center justify-between px-6 h-15">
            <div className="flex items-center gap-2">
                <span className="text-xl">🍽️</span>
                <span className="text-white font-bold text-lg">Bella Roma</span>
            </div>
        <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">🛒 Cart ({cartCount} )</button>
        </nav>
    )
}