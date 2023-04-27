import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/ApplicationComponetSlice"; //updated 4/6/2023


const store = configureStore(
  {
  reducer: {

    applications: applicationSlice,

  },
}
);

export default store;
