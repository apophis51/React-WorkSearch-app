import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudentAsync } from "../features/CreateStudentForm/CreateStudentFormSlice";

const CreateStudentForm = () => {
  const [firstName, setStudentName] = useState("");
  const [lastName, setStudentLastName] = useState("");
  const [email, setStudentEmail] = useState("");


  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addStudentAsync({ firstName, lastName, email }));
    setStudentName("");
    setStudentLastName("");
    setStudentEmail("");
  };

  return (
    <form id="student-form" onSubmit={handleSubmit}>
      <label htmlFor="studentName">Add a Student:</label>
      <input
        name="name"
        value={firstName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <label htmlFor="lastName">Lastname:</label>
      <input
        lastname="lastname"
        value={lastName}
        onChange={(e) => setStudentLastName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        email="email"
        value={email}
        onChange={(e) => setStudentEmail(e.target.value)}
      />

      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};




export default CreateStudentForm;
