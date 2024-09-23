import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shopping-cart/shopping-cart.reducer';


export const store = configureStore({
    reducer : {
        shoppingCart: shoppingCartReducer
    },
    devTools: import.meta.env.DEV
});

export default store;