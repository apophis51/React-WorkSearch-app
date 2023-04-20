import React, { useEffect } from "react";
import { ApplicationComponent } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {

  // useEffect(() => {
  //   dispatch(fetchStudentsAsync());
  //   dispatch(fetchCampusesAsync());
  //   dispatch(addCampusAsync());
  //   dispatch(fetchApplicationsAsync()); //This is needed to update the store
  // }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Maverick Shawn Marketing</h1>
        </div>
      </div>
      <Routes>
        <Route path="/applications" element = {<ApplicationComponent />} />
        {/* <Route path="/applications/:applicationId/*" element={<SingleApplication />} /> */}
        <Route path="/" element={<ApplicationComponent />} />
      </Routes>
    </div>
  );
};

export default Main;
