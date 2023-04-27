import React, { useEffect } from "react";
import { Navbar, ApplicationComponent } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {

  return (
    <div id="main " className="bg-slate-950 text-white">
      <div className="column container">
        <div id="header">
          <h1>Market Contact Pro</h1>
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
