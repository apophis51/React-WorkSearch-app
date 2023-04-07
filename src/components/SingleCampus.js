import React, { useEffect } from "react";
import { CommentsList } from "./";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  selectSingleCampus,
  fetchSingleCampus,
} from "../features/singleCampus/singleCampusSlice";
import CampusUpdateForm from "../components/CampusUpdateForm"

const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();

  const singleCampus = useSelector(selectSingleCampus);
  const { name, image, address, description } = singleCampus;
 
  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [singleCampus]);//set this back to singleCampus soon
  //good

  return (
    <div id="single-campus">
      <div><CampusUpdateForm num={singleCampus.info.id} /></div>
      <div>
        <img src={'../' + singleCampus.info.imageUrl} />
        <p>Detail Page for {singleCampus.info.name}:</p>
        <p>Address: {singleCampus.info.address}</p>
        <p>Description: {singleCampus.info.description}</p>
      </div>
      <h3>Enrollees:</h3>

      {/* Ternerary check to see if there are students enrolled. If there are students enrolled, the map will render the students. If there are no students enrolled, the else ternerary will trigger the helpful reminder */}
      <div>{singleCampus.info && singleCampus.info.students ? singleCampus.info.students.length > 0 ? singleCampus.info.students.map((student) =>
        <div>
          <NavLink to={`/students/${student.id}`} key={student.id}>
            <div>{student.firstName}</div>
          </NavLink>
        </div>
      ) : <p>No Enrollees. This is a Helpfull message Reminder to get more students</p>
       : null}

      </div>
    </div>
  );
};

export default SingleCampus;
