import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { add } from "lodash";
import { RootState } from "../store";
import { CategoryType, HomeCategoryType } from "../types";

export const getCategories = createAsyncThunk(
  "item/categories",
  async (dispatch, getState) => {
    const res = await fetch('http://localhost:8080/category',{
      credentials: 'include'
    })
    return (await res.json());
  }
);

export const addCategory = createAsyncThunk(
  "item/addCategory",
  async (newCategory: string) => {
    const postBody = {
      category: newCategory
    }
    const res = await fetch('http://localhost:8080/category', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(postBody)
    })
    const addedCategory = {
      category_id: 0,
      category: newCategory,
    }
    return (addedCategory);
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

//To get username
export const getProfile = createAsyncThunk(
  "items/user",
  async(dispatch, getState) => {
    const res = await fetch ('http://localhost:8080/profile', {
      credentials: 'include'
    });
    return (await res.json());
  }
) 

const initialState: {categories: CategoryType[], items: any , user:string } = {
  categories: [],
  items: {},
  user:'',
};

export const itemSlice = createSlice({

  name: 'item',
  initialState: initialState,
  reducers: {
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

    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
      console.log(current(state.categories));
      return state;
    })
  }
});

export const {
  removeCategory,
} = itemSlice.actions;

export const selectCategories = (state:RootState) => state.item.categories;
export const selectItems = (state:RootState) => state.item.items;
export const selectUser = (state:RootState) => state.item.user;

export default itemSlice.reducer;


