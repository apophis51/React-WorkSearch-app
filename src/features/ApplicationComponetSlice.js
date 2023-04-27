import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import juice from "../../server/dominatrix.js"



const initialState = {
  value: 0,
  database: [],
  status: 'idle',
  searchtrem: ''
};

export const fetchApplicationsAsync = createAsyncThunk("fetchinAllApplications", async () => {
  try {
    // console.log("attempting to fetch")
 const {data} =   await axios.get(`/api/applications/data`);
    // console.log("we got data on sliceface", data, "end of data")
    // console.log(data, '1234')
    return data;
  } catch (err) {
    console.log("we got an error", err);
  }
});

export const fetchNewSearchTerm = createAsyncThunk("fetchinNewSearchTerm", async (input) => {
  try {
 const {data} =   await axios.get(`/api/applications/data/${input}`);
    return data;
  } catch (err) {
    console.log("we got an error", err);
  }
});

export const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApplicationsAsync.fulfilled, (state, action) => {

      state.database = action.payload;
    })
    builder.addCase(fetchNewSearchTerm.fulfilled, (state, action) => {
      state.database = action.payload;
    })
   
  },
});

export const selectApplications = (state) => {
//   return state.campuses;  //update
return state.applications;
};

export default applicationsSlice.reducer;
