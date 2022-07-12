import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const baseCategories = {
    foodAndDrinks: 0,
    transportation: 0,
    shopping: 0,
    entertainment: 0,
    travel: 0,
    health: 0,
    service: 0,
}


const initialState = {
    categories: baseCategories
}

const categorySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories = action.payload;
        }
    }
})

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;