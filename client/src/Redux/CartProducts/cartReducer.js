import { CART_PRODUCT_ERROR, CART_PRODUCT_LOADING, CART_PRODUCT_SUCCESS, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY } from "./cartActionTypes";


export const Cart_Reducer = (cart_state, { type, payload }) => {
  switch (type) {
    case CART_PRODUCT_LOADING: {
      return { ...cart_state, loading: true, error: false };
    }

    case CART_PRODUCT_SUCCESS: {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart_state.cart_data, payload])
      );
      return {
        ...cart_state,
        loading: false,
        error: false,
        cart_data: [...cart_state.cart_data, payload],
      };
    }

    case CART_PRODUCT_ERROR: {
      return { ...cart_state, loading: false, error: true };
    }

    case CART_UPDATE_QUANTITY: {
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...cart_state,
        loading: false,
        error: false,
        cart_data: payload,
      };
    }

    case CART_REMOVE_ITEM: {
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...cart_state,
        loading: false,
        error: false,
        cart_data: [...payload],
      };
    }
    default: {
      return cart_state;
    }
  }
};
