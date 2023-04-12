import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { CartContextProviderComponent } from "./ContextAPI/CartContext";
import { ProductContextProviderComponent } from "./ContextAPI/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ProductContextProviderComponent>
      <CartContextProviderComponent>
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </CartContextProviderComponent>
    </ProductContextProviderComponent>
  </Provider>
);


