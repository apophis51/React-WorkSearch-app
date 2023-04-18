import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import juice from "../../server/dominatrix.js"



const initialState = {
  value: 0,
  database: [],
  status: 'idle',
};
//  const initialState = [];

export const fetchApplicationsAsync = createAsyncThunk("fetchinAllApplications", async () => {
  try {
    console.log("attempting to fetch")
 const {data} =   await axios.get(`/api/applications/data`);
    console.log("we got data on sliceface", data, "end of data")
    console.log(data, '1234')
    return data;
  } catch (err) {
    console.log("we got an error", err);
  }
});

export const deleteApplicationAsync = createAsyncThunk(
  "Application/deleteApplication",
  async (id) => {
    const { data } = await axios.delete(
    //  `http://localhost:3000/api/applications/${id}`
      `/api/applications/${id}`
    );
    return data;
  }
);

export const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApplicationsAsync.fulfilled, (state, action) => {
      // Add user to the state array

      state.database = action.payload;
    })
      .addCase(deleteApplicationAsync.fulfilled, (state, action) => {
        console.log("delete sucessfull..rerendering")
        // let x = action.payload
        // state.value = state.applications
        // state.application.filter((application) => application.payload)    });
        state.value = state.value + 1
        state.database = state.database
      })
  },
});

export const selectApplications = (state) => {
//   return state.campuses;  //update
return state.applications;
};

export default applicationsSlice.reducer;
