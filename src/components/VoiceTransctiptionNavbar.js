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
    
    <form className= "flex-1" onSubmit={handleSubmit} >
    {/* <label htmlFor="CompanyName">Search: </label> */}
    <button className="btn" type="submit">Select File</button>

    <input className="text-black" style= {{marginLeft: '20px', marginRight: '20px', height:'40px'}}
        type="text"
      name="CompanyName"
      value={CompanyName}
      onChange={(e) => dispatch(setCompanyName(e.target.value))}
    />    
    <button className="btn" type="submit">Convert</button>
    
  </form>
);
};


export default SearchBar;