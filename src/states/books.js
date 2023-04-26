import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    userBooks: []
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setUserBooks: (state, action) => {
            state.userBooks = action.payload
        }
    }
})

export const {setBooks, setUserBooks} = booksSlice.actions;
export default booksSlice.reducer