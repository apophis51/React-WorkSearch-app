import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const addStudentAsync = createAsyncThunk(
  "student/addStudent",
  async ({ lastName, firstName, email }) => {
    const { data } = await axios.post("http://localhost:3000/api/students", {
      firstName,
      lastName,
      email,
    });
    return data;
  }
);


export const createStudentSlice = createSlice({
  name: "createcampus",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addStudentAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectStudentes = (state) => state.student;

export default createStudentSlice.reducer;