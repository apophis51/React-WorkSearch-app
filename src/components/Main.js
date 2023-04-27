import React, { useEffect } from "react";
import { Navbar, ApplicationComponent } from "./";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplicationsAsync } from "../features/ApplicationComponetSlice.js";

const Main = () => {

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Job Search Pro</h1>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/applications" element = {<ApplicationComponent />} />
        <Route path="/" element={<ApplicationComponent />} />
      </Routes>
    </div>
  );
};

export default Main;
