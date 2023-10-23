import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "../constants/productConstant";

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = () => ({
    type: FETCH_PRODUCTS_FAILURE,
})