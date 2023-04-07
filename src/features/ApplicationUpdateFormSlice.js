import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateApplicationAsync = createAsyncThunk(
  "campus/UpdateCampus",
  async ({ address, name, schoolId }) => {
    const { data } = await axios.put(`http://localhost:3000/api/applications/${schoolId}`, {
      address,
      name,
    });
    return data;
  }
);

export const updateCampusSlice = createSlice({
  name: "updatecampus",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCampusAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectCampuses = (state) => state.campus;

export default updateCampusSlice.reducer;