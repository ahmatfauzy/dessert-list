import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, { ...product, qte: 1 }]);
  }

  function increment(productName) {
    console.log(cart);
    setCart(cart.map((item) => (item.name === productName ? { ...item, qte: item.qte + 1 } : item)));
  }

  function decrement(productName) {
    setCart(cart.map((item) => (item.name === productName ? { ...item, qte: item.qte - 1 } : item)));
  }

  function dropFromCart(productName) {
    setCart(cart.filter((item) => item.name !== productName));
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement, dropFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const { cart, addToCart, increment, decrement, resetCart, dropFromCart } = useContext(CartContext);

  return { cart, addToCart, increment, decrement, dropFromCart, resetCart };
}
