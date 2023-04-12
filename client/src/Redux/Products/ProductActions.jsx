import {
  GET_FILTERED_PRODUCTS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./ProductActionTypes";

export const getData = (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });

  fetch("http://localhost:7600/getProducts")
    .then((res) => res.json())
    .then((res) => {
      //console.log(res)

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCT_ERROR });
    });
};

export const FilteredDataFun = (dispatch, products) => {
  dispatch({ type: GET_FILTERED_PRODUCTS, payload: products });
};
