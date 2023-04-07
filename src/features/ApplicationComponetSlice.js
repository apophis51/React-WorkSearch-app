import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchApplicationsAsync = createAsyncThunk("fetchinAllApplications", async () => {
  try {
    console.log("attempting to fetch")
    const { data } = await axios.get(`/api/applications`);
    console.log("we got data on sliceface", data)
    return data;
  } catch (err) {
    console.log("we got an error", err);
  }
});

export const deleteApplicationAsync = createAsyncThunk(
  "Application/deleteApplication",
  async (id) => {
    const { data } = await axios.delete(
      `http://localhost:3000/api/applications/${id}`
    );
    return data;
  }
);

export const applicationsSlice = createSlice({
  name: "applicationstate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApplicationsAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    })
      .addCase(deleteApplicationAsync.fulfilled, (state, action) => {
        console.log("delete sucessfull..rerendering")
        // let x = action.payload
        state.value = state.applications
    });
  },
});

export const selectApplications = (state) => {
//   return state.campuses;  //update
return state.applications
};

export default applicationsSlice.reducer;
