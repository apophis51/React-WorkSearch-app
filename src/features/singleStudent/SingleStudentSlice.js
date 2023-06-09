import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSingleStudent = createAsyncThunk("singleStudent", async (id) => {
  try {
    const { data } = await axios.get(`/api/students/${id}`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  info: [],
};

const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      state.info = action.payload;
    });
  },
});

export const selectSingleStudent = (state) => {
  return state.singleStudent;
};

export default singleStudentSlice.reducer;
