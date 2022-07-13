import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categorySlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;