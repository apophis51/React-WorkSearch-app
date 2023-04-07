import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { selectApplications, fetchApplicationsAsync, campusesSlice, deleteCampusesAsync } from "../features/ApplicationComponetSlice";
import { NavLink } from "react-router-dom";
// import CampusForm from "../components/CreateCampusForm"
import handleSubmit from "../features/ApplicationComponetSlice"

import ApplicationCreateForm from "../components/ApplicationCreateForm"//my addition
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
    <div className='campus-container'>
      <div>
        <h1>{applications.value}</h1>
      <h2>Your Latest Job Applications</h2>
      {true
        ? applications.database.map((dataOutput) => (

          <div className='campus' >
            <NavLink

              to={`/campuses/${dataOutput.id}`}
              key={`All Campuses: ${dataOutput.id}`}
            >
              <div className="campus row">
                {/* <img src={dataOutput.imageUrl} /> */}
                <ul>
                <li>Company Name: {dataOutput.CompanyName}</li>
                <li>  URL of Job:{dataOutput.URLofJobPosting}</li>
                <li>Url of Submitted Application: {dataOutput.URLofApplication}</li>
                <li>Resume Submitted: {dataOutput.ResumeSubmitted}</li>
                <li>My Pitch: {dataOutput.MyPitch}</li>
                <li>Notes: {dataOutput.Notes}</li>
                <li>Job Title: {dataOutput.JobTitle}</li>
                <li>Contacted for Interview?: {dataOutput.ContactedforInterview}</li>
                </ul>
              </div>
               
            </NavLink>

            <button onClick={(e) => handleDelete(dataOutput.id)}>X{console.log(dataOutput.id)}</button>
            
          </div>
        ))
        : <p>t</p>}
        </div>
      <div 
      
      className="campus-form"><ApplicationCreateForm /></div>


    </div>

  );
};

export default AllApplications;
