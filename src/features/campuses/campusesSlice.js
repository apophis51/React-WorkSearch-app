import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
  try {
    const { data } = await axios.get(`/api/campuses`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteCampusesAsync = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    const { data } = await axios.delete(
      `http://localhost:3000/api/campuses/${id}`
    );
    return data;
  }
);

export const campusesSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;
