import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCampusAsync, createCampusSlice, selectCampuses } from "../features/CreateCampusForm/CreateCampusFormSlice";

const CreateCampusForm = () => {
  const [name, setCampusName] = useState("");
  const [address, setAddress] = useState("");

  const campuses = useSelector(selectCampuses);


  const dispatch = useDispatch();


  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addCampusAsync({ name, address }));
    setAddress("");
    setCampusName("");
  };

  return (
    <form id="campus-form" onSubmit={handleSubmit}>
      <label htmlFor="campusName">Add a Campus Name:</label>
      <input
        name="name"
        value={name}
        onChange={(e) => setCampusName(e.target.value)}
      />
      <label htmlFor="campusAddress">Campus Address::</label>
      <input
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};




export default CreateCampusForm;
