import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addCampusAsync, createCampusSlice, selectCampuses } from "../features/CreateCampusForm/CreateCampusFormSlice";
import { addApplicationAsync, createApplicationSlice, selectApplications } from "../features/ApplicationCreateSlice";
import { fetchApplicationsAsync } from "../features/ApplicationComponetSlice";///new

const ApplicationCreateForm = () => {
//   const [name, setCampusName] = useState("");
//   const [address, setAddress] = useState("");
const [shouldUpdate, setShouldUpdate] = useState(false);

const [CompanyName, setCompanyName] = useState("");
const [URLofJobPosting, setURLofJobPosting] = useState("");
const [URLofApplication, setURLofApplication] = useState("");
const [ResumeSubmitted, setResumeSubmitted] = useState("");
const [MyPitch, setMyPitch] = useState("");
const [Notes, setNotes] = useState("");
const [JobTitle, setJobTitle] = useState("");
const [ContactedforInterview, setContactedforInterview] = useState("");

const applications = useSelector(selectApplications);


const dispatch = useDispatch();


useEffect(() => {
  dispatch(fetchApplicationsAsync());
}, [dispatch]);


useEffect(() => {
  if (shouldUpdate) {
    dispatch(fetchApplicationsAsync());
    setShouldUpdate(false); // set state back to false
  }
}, [shouldUpdate, dispatch]);



//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     dispatch(addCampusAsync({ name, address }));
//     setAddress("");
//     setCampusName("");
//   };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addApplicationAsync({ CompanyName, URLofJobPosting, URLofApplication,ResumeSubmitted,MyPitch,Notes,JobTitle,ContactedforInterview }));
    setCompanyName("");
    setURLofJobPosting("");
    setURLofApplication("");
    setResumeSubmitted("");
    setMyPitch("");
    setNotes("");
    setJobTitle("");
    setContactedforInterview("")
    setShouldUpdate(true)

  };

  return (
    
    <form onSubmit={handleSubmit} >
    <label htmlFor="CompanyName">CompanyName: </label>
    <input
      name="CompanyName"
      value={CompanyName}
      onChange={(e) => dispatch(setCompanyName(e.target.value))}
    />
    <p></p>
    <label htmlFor="URLofJobPosting">URLofJobPosting:</label>
    <input
      name="URLofJobPosting"
      value={URLofJobPosting}
      onChange={(e) => dispatch(setURLofJobPosting(e.target.value))}
    />
    <p></p>
    <label htmlFor="URLofApplication">URLofApplication:</label>
    <input
      name="URLofApplication"
      value={URLofApplication}
      onChange={(e) => dispatch(setURLofApplication(e.target.value))}
    />
    <p></p>
    <label htmlFor="ResumeSubmitted">ResumeSubmitted:</label>
    <input
      name="ResumeSubmitted"
      value={ResumeSubmitted}
      onChange={(e) => dispatch(setResumeSubmitted(e.target.value))}
    />
    <p></p>
    <label htmlFor="MyPitch">MyPitch:</label>
    <input
      name="MyPitch"
      value={MyPitch}
      onChange={(e) => dispatch(setMyPitch(e.target.value))}
    />
    <p></p>
    <label htmlFor="Notes">Notes:</label>
    <input
      name="Notes"
      value={Notes}
      onChange={(e) => dispatch(setNotes(e.target.value))}
    />
    <p></p>
    <label htmlFor="JobTitle">JobTitle:</label>
    <input
      name="JobTitle"
      value={JobTitle}
      onChange={(e) => dispatch(setJobTitle(e.target.value))}
    />
    <p></p>
    <label htmlFor="ContactedforInterview">ContactedforInterview:</label>
    <input
      name="ContactedforInterview"
      value={ContactedforInterview}
      onChange={(e) => dispatch(setContactedforInterview(e.target.value))}
    />

    <button type="submit">Submit</button>
    <Link to="/">Cancel</Link>
  </form>
);
};


export default ApplicationCreateForm;

