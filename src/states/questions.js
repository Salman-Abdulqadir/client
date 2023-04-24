import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  filter: "",
  filteredQuestions: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
      state.filteredQuestions = action.payload
    },
    filterQuestions: (state, action) => {
      state.filter = action.payload;
      if (state.filter === "") {
        state.filteredQuestions = state.questions;
        return;
      }
      
    },
  },
});

export const {setQuestions, filterQuestions} = questionsSlice.actions
export default questionsSlice.reducer
