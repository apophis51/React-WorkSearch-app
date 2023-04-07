import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCampuses, fetchCampusesAsync, campusesSlice, deleteCampusesAsync } from "../features/campuses/campusesSlice";
import { NavLink } from "react-router-dom";
import CampusForm from "../components/CreateCampusForm"
import handleSubmit from "../features/campuses/campusesSlice"



const AllCampuses = () => {
  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [campuses]); //set this back to campus soon

  const handleDelete = (e) => {
    dispatch(deleteCampusesAsync(e));
  };


  return (
    <div className='campus-container'>
      {true
        ? campuses.map((campus) => (

          <div className='campus' >
            <NavLink

              to={`/campuses/${campus.id}`}
              key={`All Campuses: ${campus.id}`}
            >
              <div className="campus row">
                <img src={campus.imageUrl} />
                <p>{campus.name}</p>
              </div>
            </NavLink>

            <button onClick={(e) => handleDelete(campus.id)}>X</button>

          </div>
        ))
        : <p>t</p>}
      <div className="campus-form"><CampusForm /></div>


    </div>

  );
};

export default AllCampuses;
