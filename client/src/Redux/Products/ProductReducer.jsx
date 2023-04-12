import {
  GET_FILTERED_PRODUCTS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./ProductActionTypes";

export const Product_Reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case GET_PRODUCT_SUCCESS: {
      return { ...state, loading: false, error: false, data: payload };
    }

    case GET_PRODUCT_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case GET_FILTERED_PRODUCTS: {
      return { ...state, loading: false, error: false, filterData: payload };
    }
    default: {
      return state;
    }
  }
};
