import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./reducers/itemSlice";

const store = configureStore({
  reducer: {
    item: itemSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;