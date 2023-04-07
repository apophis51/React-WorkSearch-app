import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStudents, fetchStudentsAsync, deleteStudentsAsync } from "../features/students/studentsSlice";
import { NavLink } from "react-router-dom";
import StudentForm from "../components/CreateStudentForm";
import StudentUpdateForm from "../components/StudentUpdateForm"


const AllStudents = () => {
  const students = useSelector(selectStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentsAsync());
  }, [students]);//set this back to students soon

  const handleDelete = (e) => {
    dispatch(deleteStudentsAsync(e));
  };

  return (
    <div>
      {true//students && students.length
        ? students.map((students) => (
          <div className={students.id}>
            <NavLink
              to={`/students/${students.id}`}
              key={`All Students: ${students.id}`}
            >
              <div className="students row">
                <img src={students.imageUrl} />
                <p>{students.firstName}</p>
              </div>
            </NavLink>

            <button onClick={(e) => handleDelete(students.id)}>X</button>

          </div>
        ))
        : <p>t</p>}
      <div><StudentForm /></div>

    </div>
  );
};

export default AllStudents;
