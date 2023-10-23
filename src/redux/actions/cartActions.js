import { ADD_ITEM } from "../constants/cartConstant";


export const addItem = (items) =>
{
    return {
        type: ADD_ITEM,
        payload: items,
    };
};