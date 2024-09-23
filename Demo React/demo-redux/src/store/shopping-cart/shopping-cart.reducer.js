import { createReducer } from '@reduxjs/toolkit';
import { shoppingCartAdd, shoppingCartClear, shoppingCartRemove, shoppingCartValid } from './shopping-cart.action';

const initialState = {
    products: [],
    count: 0
};

const shoppingCartReducer = createReducer(initialState, builder => {
    builder
        .addCase(shoppingCartAdd, (state, action) => {
            const product = action.payload;

            state.products.push(product);
            state.count++;
        })
        .addCase(shoppingCartRemove, (state, action) => {
            const productId = action.payload;

            state.products = state.products.filter(p => p.id !== productId);
            state.count = state.products.length;
        })
        .addCase(shoppingCartValid, (state, action) => {
            const productId = action.payload;

            const product = state.products.find(p => p.id === productId);
            if(product) {
                product.isValid = true;
            }
        })
        .addCase(shoppingCartClear, (state) => {
            state.products = [];
            state.count = 0;
        })
});

export default shoppingCartReducer;