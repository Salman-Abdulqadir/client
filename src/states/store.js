import { configureStore } from "@reduxjs/toolkit";

//slices
import profileReducer from "./profile";
import projectReducer from "./project"

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    project: projectReducer
  },
});
