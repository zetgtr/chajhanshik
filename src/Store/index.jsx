import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import { persistStore } from "redux-persist";
import { cartReducer } from "./Cart/reduser";
import {catalogReducer} from "./Catalog/reduser";


const rootReducer = combineReducers({
    catalog: catalogReducer,
    cart: cartReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);