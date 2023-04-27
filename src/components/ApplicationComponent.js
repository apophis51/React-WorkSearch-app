import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchComponentBar"//my addition
import { deleteApplicationAsync, fetchApplicationsAsync, selectApplications} from "../features/ApplicationComponetSlice"




const AllApplications = () => {
  const applications = useSelector(selectApplications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplicationsAsync());
  }, [applications.value]);

  const handleDelete = (e) => {
    dispatch(deleteApplicationAsync(e));
  };

  console.log("data recieved on the front", applications)

  return (
    <div className='campus-container flex'>
      <div>
        <h1>{applications.value}</h1>
      <h2>Your Latest Job Applications</h2>
      <SearchBar />
      {true
        ? applications.database.map((dataOutput) => (

          <div className='campus flex gap-10 justify-between' >
            <NavLink

              to={`/campuses/${dataOutput.id}`}
              key={`All Campuses: ${dataOutput.id}`}
            >
              
              <div className="campus   bg-zinc-100">
                {/* <img src={dataOutput.imageUrl} /> */}
                <ul>
                <li>Name: {dataOutput.name}</li>
                <li>Company: {dataOutput.company}</li>
                <li>Email: {dataOutput.email}</li>
                <li>Linkedin: {dataOutput.linkedin}</li>
                <li>Phone: {dataOutput.phone}</li>
                <li>Skype: {dataOutput.skype}</li>
                <li>Title: {dataOutput.title}</li>
                <li>Type: {dataOutput.type}</li>
                <li>Website: {dataOutput.website}</li>
                <br></br>
                </ul>
              </div>
               
            </NavLink>
            
            
          </div>
        ))
        : <p>t</p>}
        </div>
      <div 
      
      className="campus-form">Testing</div>


    </div>

  );
};

export default AllApplications;
