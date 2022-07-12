import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from './reducers/budgetslice'

const store = configureStore({
  reducer: {
        budget: budgetSlice,
  }
})

export default store;
