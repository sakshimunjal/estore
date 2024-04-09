import {createSlice} from '@reduxjs/toolkit';
import { getCategories } from './actions';

const initialState = {
    categories: [],
    status: 'idle',
    error: ""
}
console.log(initialState)
const categorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {},
    extraReducers: builder => {
        console.log("in extra")
        builder.addCase(getCategories.pending, (state, action) => {
        console.log("in pending")
            state.status = "Loading...";
        })
        .addCase(getCategories.fulfilled,  (state, action) => {
        console.log("in success")
            state.status = "Success...";
            state.categories = action.payload;
        })
        .addCase(getCategories.rejected, (state, action) => {
        console.log("in failed ", state.error)
            state.status = "Failed...";
            state.error = action.error.message;
        })
    }
})

export default categorySlice.reducer;