import { createSlice, current } from "@reduxjs/toolkit";
import Category from "../components/pages/Category";
import { RootState } from "../store";

const initialState = {
  categories: [],
}

export const categorySlice = createSlice({

  name: 'category',
  initialState: initialState,
  reducers: {
    addCategories: (state, action) => {
      console.log(action.payload)
      return state;
    },
    addCategory: (state, action) => {
      return state;
    },
    removeCategory: (state, action) => {
      return state;
    }
  }
});

export const {
  addCategories,
  addCategory,
  removeCategory,
} = categorySlice.actions;

export const selectCategories =(state:RootState) => state.category.categories;

export default categorySlice.reducer;


