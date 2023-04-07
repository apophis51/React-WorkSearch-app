import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStudentAsync } from "../features/StudentUpdateFormSlice.js/StudentUpdateFormSlice";

const StudentUpdateForm = (props) => {
  const [firstName, setStudentFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const idd = props.num;
    dispatch(updateStudentAsync({ firstName, lastName, email, idd }));
    setLastName("");
    setStudentFirstName("");
    setEmail("")
  };

  return (
    <form id="student-form" onSubmit={handleSubmit}>
      <label htmlFor="studentfirstName">Update Student Name:</label>
      <input
        firstName="firstName"
        value={firstName}
        onChange={(e) => setStudentFirstName(e.target.value)}
      />
      <label htmlFor="studentlastNam">Update Student Address::</label>
      <input
        lastName="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="studentemail">Update Student Email::</label>
      <input
        email="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};




export default StudentUpdateForm;