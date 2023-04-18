import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../features/campuses/campusesSlice";
import singleCampusSlice from "../features/singleCampus/singleCampusSlice";
import applicationSlice from "../features/ApplicationComponetSlice"; //updated 4/6/2023

import createApplicationSlice from "../features/ApplicationCreateSlice"; //updated 4/6/2023

const store = configureStore(
  {
  reducer: {
    campuses: campusesSlice,
    singleCampus: singleCampusSlice,
    applications: applicationSlice,
    createapplication: createApplicationSlice, 

  },
}
);

export default store;
