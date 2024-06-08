import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myBooks: localStorage.getItem("userBooks")
    ? JSON.parse(localStorage.getItem("userBooks"))
    : [],
};

export const booksSlice = createSlice({
  name: "userbooks",
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.myBooks.push(action.payload);
      localStorage.setItem("userBooks", JSON.stringify(state.myBooks));
    },

    removeBook: (state, action) => {
      const existingBook = state.myBooks.find(
        (book) => book.title === action.payload
      );

      if (!existingBook) {
        state.myBooks = state.myBooks.filter(
          (item) => item.title !== action.payload.title
        );

        localStorage.setItem("userBooks", JSON.stringify(state.myBooks));
      }
    },
  },
});

export default booksSlice.reducer;
export const { addBooks, removeBook } = booksSlice.actions;
