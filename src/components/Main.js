import React, { useEffect } from "react";
import { Navbar, ApplicationComponent, Footer } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {

  return (
    <div id="main " className="bg-slate-900 text-white px-30 text-xl px-80">
      <div className="column container ">
        <div id="header">
          <h1 className="text-4xl">Marketing Contact Pro</h1>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/applications" element = {<ApplicationComponent />} />
        <Route path="/" element={<ApplicationComponent />} />
      </Routes>
      < Footer />
    </div>
  );
};

export default Main;
