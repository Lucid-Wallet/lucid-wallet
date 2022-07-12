import { configureStore } from "@reduxjs/toolkit";
import categorySlice from './reducers/categoryslice'

const store = configureStore({
  reducer: {
        category: categorySlice,
  }
})

export default store;
