import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCampus = createAsyncThunk(
  "singleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  info: {},
};

const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCampus.fulfilled, (state, action) => {
        state.info = action.payload;
      })
  },
});

export const selectSingleCampus = (state) => {
  return state.singleCampus;
};

export default singleCampusSlice.reducer;
