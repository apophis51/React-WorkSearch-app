import React, { useEffect } from "react";
import { CommentsList } from "./";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  selectSingleStudent,
  fetchSingleStudent,
} from "../features/singleStudent/singleStudentSlice";

import StudentUpdateForm from "../components/StudentUpdateForm"

const SingleStudent = () => {
  const dispatch = useDispatch();
  const { studentId } = useParams();

  const singleStudent = useSelector(selectSingleStudent);
  const { name, image, address, description } = singleStudent;

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [singleStudent]); //add singleStudent back in

  //good

  //a guard makes sure that our map condition is valid because we were returning null sometimes
  return (
    <div id="single-student">
      <div>
        <div><StudentUpdateForm num={singleStudent.info.id} /></div>
        <img src={'../' + singleStudent.info.imageUrl} />
        <p>Detail Page for {singleStudent.info.firstName}:</p>
        <p>Last Name: {singleStudent.info.lastName}</p>
        <p>Email: {singleStudent.info.email}</p>
        <p>GPA: {singleStudent.info.gpa}</p></div>
      <h3>Campus:</h3>
      <div>
        {/* The Students Campus will be displayed if enolled. If not enrolled the else ternerary will trigger the helpful reminder */}
        {singleStudent.info.campus ? (
          <div>
            <NavLink to={`/campuses/${singleStudent.info.campus.id}`} key={singleStudent.info.campus.id}>
              <div>{singleStudent.info.campus.name}</div>
            </NavLink>

          </div>
        ) : <p>Helpful Remainder that this student needs to be enrolled</p>}
      </div>
    </div>
  );
};

export default SingleStudent;
