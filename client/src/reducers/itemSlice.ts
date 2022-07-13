import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getCategories = createAsyncThunk(
  "item/categories",
  async (dispatch, getState) => {
    const res = await fetch('http://localhost:8080/category',{
      credentials: 'include'
    })
    return (await res.json());
  }
);

export const getItems = createAsyncThunk(
  "item/items",
  async (dispatch, getState) => {
    const res = await fetch('http://localhost:8080/item', {
      credentials: 'include'
    });
    return (await res.json());
  }
);

const initialState = {
  categories: [],
  items: {},
};

export const itemSlice = createSlice({

  name: 'item',
  initialState: initialState,
  reducers: {
    addCategory: (state, action) => {
      return state;
    },
    removeCategory: (state, action) => {
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    builder.addCase(getItems.fulfilled, (state, action) => {
      return { ...state, items: action.payload };
    });
  }
});

export const {
  addCategory,
  removeCategory,
} = itemSlice.actions;

export const selectCategories = (state:RootState) => state.item.categories;
export const selectItems = (state:RootState) => state.item.items;

export default itemSlice.reducer;


