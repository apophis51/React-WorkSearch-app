import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewSearchTerm } from "../features/ApplicationComponetSlice";


const SearchBar = () => {

const [CompanyName, setCompanyName] = useState("");




const dispatch = useDispatch();


// useEffect(() => {
//   dispatch(fetchApplicationsAsync());
// }, [applications]);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchNewSearchTerm(CompanyName));
    setCompanyName("");
    setShouldUpdate(true)

  };

  return (
    
    <form onSubmit={handleSubmit} >
    <label htmlFor="CompanyName">CompanyName: </label>
    <input className="text-black"
        type="text"
      name="CompanyName"
      value={CompanyName}
      onChange={(e) => dispatch(setCompanyName(e.target.value))}
    />    
    <button type="submit">Submit</button>
    
  </form>
);
};


export default SearchBar;