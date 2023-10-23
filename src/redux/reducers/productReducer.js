import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "../constants/productConstant";


const initialState = {
    products: [],
};

const productReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
            };
        case FETCH_PRODUCTS_FAILURE:
            return state; 
        default:
            return state;
    }
};

export default productReducer;
