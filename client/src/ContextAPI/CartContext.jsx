import { createContext, useReducer } from "react";
import { Cart_Reducer } from "../Redux/CartProducts/cartReducer";

export const CartContext = createContext();

export const CartContextProviderComponent = ({ children }) => {
  const initialState = {
    loading: false,
    error: false,
    cart_data: JSON.parse(localStorage.getItem("cart")) || [],
  };
  const [cart_state, cart_dispatch] = useReducer(Cart_Reducer, initialState);

  return (
    <CartContext.Provider value={{ cart_state, cart_dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
