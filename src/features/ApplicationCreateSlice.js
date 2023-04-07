import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const addApplicationAsync = createAsyncThunk(
  "Application/addApplication",
  async ({ CompanyName, URLofJobPosting, URLofApplication,ResumeSubmitted,MyPitch,Notes,JobTitle,ContactedforInterview }) => {
    const { data } = await axios.post("http://localhost:3000/api/applications", {
        CompanyName, 
        URLofJobPosting,
         URLofApplication,
         ResumeSubmitted,
         MyPitch,
         Notes,
         JobTitle,
         ContactedforInterview
    });
    return data;
  }
);

export const createApplicationSlice = createSlice({
  name: "createapplication",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addApplicationAsync.fulfilled, (state, action) => {
      state.push(action.payload);
      // return action.payload
    });
  },
});

export const selectApplications = (state) => state.application;

export default createApplicationSlice.reducer;