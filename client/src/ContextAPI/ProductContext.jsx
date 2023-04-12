import { createContext, useReducer, useState } from "react";
import { Product_Reducer } from "../Redux/Products/ProductReducer";

export const ProductContext = createContext();

export const ProductContextProviderComponent = ({ children }) => {
  const initialState = {
    loading: false,
    error: false,
    data: [],
    filterData:[],
  };

  const [state, dispatch] = useReducer(Product_Reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
