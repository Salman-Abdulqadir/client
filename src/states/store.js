import { configureStore } from "@reduxjs/toolkit";

//slices
import profileReducer from "./profile";
import projectReducer from "./project"
import projectDetailsReducer from "./projectDetails"
import applicationReducer from "./application"
import questionReducer from "./questions"
import answerDetailsReducer from "./answerDetails"

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    project: projectReducer,
    projectDetails: projectDetailsReducer,
    application: applicationReducer,
    questions: questionReducer,
    answerDetails: answerDetailsReducer
  },
});
