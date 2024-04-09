import { createSlice } from '@reduxjs/toolkit';
import {getProducts} from './actions';

const initialState = {
    products: [],
    error: "",
    status: "idle"
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getSubcategory: (state, action) => {
            // console.log("-=-= ",state.products.filter(prod => prod.category_id === action.payload.id), action)
            const filteredData = action.payload.products.filter(prod => prod.category_id === action.payload.subCategory.id);
            state.products = filteredData;
        },
        filterByPrice: (state, action) => {
            const filteredData = action.payload.products.filter(prod => prod.price >= action.payload.minPrice && prod.price <= action.payload.maxPrice);
            state.products = filteredData;
        }
    }, 
    extraReducers: builder => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.status = "Loading...";
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.status = "Success...";
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = "Failure...";
            state.error = action.error.message;
        })
    }
})

export const {getSubcategory, filterByPrice} = productSlice.actions;
export default productSlice.reducer;