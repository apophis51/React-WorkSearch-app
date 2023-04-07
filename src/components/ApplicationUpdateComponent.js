import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { updateApplicationAsync } from "../features/CampusUpdateFormSlice/CampusUpdateFormSlice";
import { updateApplicationAsync } from "../features/ApplicationComponetSlice";


const ApplicationUpdateForm = (props) => {



  const [CompanyName, setCompanyName] = useState("");
  const [URLofJobPosting, setURLofJobPosting] = useState("");
  const [URLofApplication, setURLofApplication] = useState("");
  const [ResumeSubmitted, setResumeSubmitted] = useState("");
  const [MyPitch, setMyPitch] = useState("");
  const [Notes, setNotes] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [ContactedforInterview, setContactedforInterview] = useState("");
  
  // useEffect(() => {
  //   dispatch(fetchApplicationsAsync());
  // }, [dispatch]);


  const dispatch = useDispatch();

  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const ApplicationId = props.num;
    dispatch(updateApplicationAsync({ CompanyName, URLofJobPosting, URLofApplication,ResumeSubmitted,MyPitch,Notes,JobTitle,ContactedforInterview }));
    setCompanyName("");
    setURLofJobPosting("");
    setURLofApplication("");
    setResumeSubmitted("");
    setMyPitch("");
    setNotes("");
    setJobTitle("");
    setContactedforInterview("")
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




export default ApplicationUpdateForm;
