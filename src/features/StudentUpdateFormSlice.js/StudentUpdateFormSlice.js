import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateStudentAsync = createAsyncThunk(
  "student/addStudent",
  async ({ lastName, firstName, email, idd }) => {
    const { data } = await axios.put(`http://localhost:3000/api/students/${idd}`, {
      lastName,
      firstName,
      email,
    });
    return data;
  }
);


export const updateStudentSlice = createSlice({
  name: "updatestudent",
  initialState: [],
  reducers: {

  },
  extraReducers: (builder) => {

    builder.addCase(addStudentAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });

  },
});


export const selectStudentes = (state) => state.student;

export default updateStudentSlice.reducer;