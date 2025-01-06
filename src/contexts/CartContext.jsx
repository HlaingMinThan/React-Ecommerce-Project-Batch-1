import { createContext, useState } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
    let [cartCount, setCartCount] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0);
    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>{children}</CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }