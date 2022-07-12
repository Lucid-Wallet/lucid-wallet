import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    fixed: 0,
    variable: 0,
    feeling: 0
}

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {

    }
})