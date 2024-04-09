import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        category: 'Men',
        items: ['Tshirts', 'Shoes', 'Accesories', 'Bags']
    },
    {
        category: 'Women',
        items: ['Tops & Tees', 'Jeans & Trousers', 'Accesories', 'Shoes']
    },
    {
        category: 'Kids',
        items: ['Tshirts', 'Shoes', 'Toys', 'Bags']
    }
];

const accordianSlice = createSlice({
    name: 'accordian',
    initialState
})

export default accordianSlice;