import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, selectedProductReducer } from "./reducers/ProductReducer";
const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
});
const store = createStore(reducers, composeWithDevTools());
export default store;