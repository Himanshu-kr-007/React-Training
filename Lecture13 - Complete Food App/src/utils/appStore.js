import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer : {
        cart: cartReducer,
        // If we have mutiple reducer then we are going to import it by this way
        // user: useReducer
    }
});

export default appStore;