import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cartSlice', 
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            if(!state.cartItems.find(item => item.id === action.payload.id)) {
                state.totalItems = ++state.totalItems;
            }
            state.cartItems = [...state.cartItems, action.payload];
            state.totalQuantity = ++state.totalQuantity;
            state.totalPrice += action.payload.price;
        },
        deleteItem: (state, action) => {
            console.log("=-- ", action.payload)
            let found = false;
            const filteredItem = state.cartItems.filter(item => {
                if(item.id !== action.payload.id) return item;
                else {
                    if(found) return item;
                    found = true;
                }
            })
            state.cartItems = filteredItem;
            state.totalItems = --state.totalItems;
            state.totalQuantity = --state.totalQuantity;
            state.totalPrice = state.totalPrice - action.payload.price;
        }
    }
});

export const {addCartItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;