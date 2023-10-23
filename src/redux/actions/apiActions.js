import axios from 'axios';
import { fetchProductsFailure, fetchProductsSuccess } from './productAction';

export const fetchProducts = () =>
{
    return async (dispatch) =>
    {
        try
        {
            const res = await axios.get("https://fakestoreapi.com/products");
            const result = res.data;
            dispatch(fetchProductsSuccess(result));
        } catch (error)
        {
            console.log("Something went wrong while fetching data.");
            dispatch(fetchProductsFailure());
        }
    };
};