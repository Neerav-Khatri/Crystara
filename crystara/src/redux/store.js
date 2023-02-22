
import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/reducer";
import { wishlistReducer } from "./Wishlist/reducer";
import { productReducer } from "./ProductPage/reducer";

const rootreducer =  combineReducers({cartReducer,wishlistReducer,productReducer})

const store = legacy_createStore(rootreducer, applyMiddleware(thunk))

export {store}