import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  userBooks: [],
  bidingDetails: {},
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setUserBooks: (state, action) => {
      state.userBooks = action.payload;
    },
    setBidingDetails: (state, action) => {
      state.bidingDetails = action.payload;
    },
  },
});

export const { setBooks, setUserBooks, setBidingDetails } = booksSlice.actions;
export default booksSlice.reducer;
