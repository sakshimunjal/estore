import {createAsyncThunk} from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
    'getCategories', () => {
        const categories = fetch("http://localhost:5001/productCategories").then(res => {
            return res.json();
        });
        return categories;
    }
)