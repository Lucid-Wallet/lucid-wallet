import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "../store";

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
    user_id: 0,
    category: [],
    expenses: [],
    total: 0,
}

const categorySlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        fetchExpense: (state, action) => {
            console.log('FETCHING EXPENSES')
            state.expenses = [...action.payload];
        },
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        fetchCategory: (state, action) => {
            state.category = [...action.payload];
        },
        addCategory: (state, action) => {
            state.category = action.payload;
        },
        updateUser_id: (state, action) => {
            console.log('UserID is updated in BudgetSlice', state.user_id)
            state.user_id = action.payload;
        }
    }
})

export const { addCategory, addExpense, fetchExpense, updateUser_id, fetchCategory } = categorySlice.actions;


export default categorySlice.reducer;