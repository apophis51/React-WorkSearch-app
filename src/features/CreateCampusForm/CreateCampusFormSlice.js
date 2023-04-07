import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const addCampusAsync = createAsyncThunk(
  "campus/addCampus",
  async ({ address, name }) => {
    const { data } = await axios.post("http://localhost:3000/api/campuses", {
      address,
      name,
    });
    return data;
  }
);

export const createCampusSlice = createSlice({
  name: "createcampus",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCampusAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectCampuses = (state) => state.campus;

export default createCampusSlice.reducer;