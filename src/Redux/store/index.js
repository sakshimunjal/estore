import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../Category';
import productSlice from '../Product';
import cartSlice from '../Cart';

export const store = configureStore({
    reducer: {
        categoryReducer : categorySlice,
        productReducer : productSlice,
        cartReducer: cartSlice
    }
})