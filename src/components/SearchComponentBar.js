import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addApplicationAsync,selectApplications } from "../features/ApplicationCreateSlice";
import { fetchApplicationsAsync } from "../features/ApplicationComponetSlice";

const SearchBar = () => {

const [CompanyName, setCompanyName] = useState("");


const applications = useSelector(selectApplications);


const dispatch = useDispatch();


useEffect(() => {
  dispatch(fetchApplicationsAsync());
}, [applications]);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addApplicationAsync({CompanyName}));
    setCompanyName("");

  };

  return (
    
    <form onSubmit={handleSubmit} >
    <label htmlFor="CompanyName">CompanyName: </label>
    <input
        type="text"
      name="CompanyName"
      value={CompanyName}
      onChange={(e) => dispatch(setCompanyName(e.target.value))}
    />
    {/* <img src="../public/search.svg" alt="search" className="searchBtn"></img> */}
    
    <button type="submit">Submit</button>
   
  </form>
);
};


export default SearchBar;