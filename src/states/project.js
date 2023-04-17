import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProjectDetails: false,
  popup: false
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    toggleProjectDetails: (state) => {
        state.isProjectDetails = !state.isProjectDetails
    },
    togglePopup: (state) => {
        state.popup = !state.popup
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {toggleProjectDetails} = projectSlice.actions;
export default projectSlice.reducer;