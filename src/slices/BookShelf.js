
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myBooks: localStorage.getItem('userBooks') ? JSON.parse(localStorage.getItem('userBooks')) : null
}


export const booksSlice = createSlice({
    name: 'userbooks',
    initialState,
    reducers: {
        addBooks: (state, action) => {

        }
    }
})


export default booksSlice.reducer;
export const { addBooks } = booksSlice.actions;
