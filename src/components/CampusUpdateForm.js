import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCampusAsync } from "../features/CampusUpdateFormSlice/CampusUpdateFormSlice";

const CampusUpdateForm = (props) => {
  const [name, setCampusName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const schoolId = props.num;
    dispatch(updateCampusAsync({ name, address, schoolId }));
    setAddress("");
    setCampusName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="campusName">Update Campus Name:</label>
      <input
        name="name"
        value={name}
        onChange={(e) => dispatch(setCampusName(e.target.value))}
      />
      <label htmlFor="campusAddress">Update Campus Address::</label>
      <input
        name="address"
        value={address}
        onChange={(e) => dispatch(setAddress(e.target.value))}
      />

      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};




export default CampusUpdateForm;
