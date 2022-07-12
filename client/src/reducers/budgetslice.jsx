import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const baseCategories = {
//     foodAndDrinks: 0,
//     transportation: 0,
//     shopping: 0,
//     entertainment: 0,
//     travel: 0,
//     health: 0,
//     service: 0,
// }


const initialState = {
    categories: [],
    expenses: [],
    total: 0,
}

const categorySlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        addCategory: (state, action) => {
            state.categories = action.payload;
        },
        fetchExpense: (state, action) => {
            console.log('FETCHING EXPENSES')
            state.expenses = [...action.payload]
        }
    }
})

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;