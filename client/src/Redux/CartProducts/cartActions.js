import {
  CART_PRODUCT_ERROR,
  CART_PRODUCT_LOADING,
  CART_PRODUCT_SUCCESS,
  CART_REMOVE_ITEM,
  CART_UPDATE_QUANTITY,
} from "./cartActionTypes";

export const addToCart = (dispatch, props) => {
  dispatch({ type: CART_PRODUCT_LOADING });
  try {
    dispatch({ type: CART_PRODUCT_SUCCESS, payload: props });
  } catch (err) {
    dispatch({ type: CART_PRODUCT_ERROR });
  }
};

export const UpdateQuantity = (dispatch, Item) => {
  try {
    dispatch({ type: CART_UPDATE_QUANTITY, payload: Item });
  } catch (error) {
    console.log(error);
  }
};

export const RemoveItem = (dispatch, Item) => {
  try {
    dispatch({ type: CART_REMOVE_ITEM, payload: Item });
  } catch (error) {
    console.log(error);
  }
};
