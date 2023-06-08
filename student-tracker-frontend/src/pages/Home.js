// discplimer: I used Bootstrap,React-Bootstrap, tailwindCSS, and React-Material UI for some compontents and I used the ChatGPT/Copilot
// for the assistance with the documentation of the code, but the logic and main code configiration is my own.

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ViewUser from "../components/users/ViewUser";
import { Button } from "@material-tailwind/react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

const Home = () => {
  const [displayUser, setDisplayUser] = useState(null);
  const { id } = useParams();
  const [students, setStudents] = React.useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    loadStudent();
  }, []);
  const handleView = (students) => {
    setDisplayUser(students);
  };
  const handleClose = () => {
    setDisplayUser(null);
  };

  const loadStudent = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_PRODUCTION_API}/students` //Railway.app
    );
    const studentsData = result.data
      .sort((a, b) => a.id - b.id)
      .map((student) => ({
        ...student,
        showPassword: false,
      }));
    setStudents(studentsData);
  };
  //this is the delete user function which is called by the button below
  const deleteUser = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_PRODUCTION_API}/student/${id}` //Railway.app
      // `https://student-tracker-be-utaf.onrender.com/student/${id}` // RENDER
    );
    loadStudent();
  }; 

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-hover table-bordered shadow rounded-table">
          <thead className="table-dark">
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Email
              </th>
              <th scope="col" className="text-center">
                Password
              </th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <th scope="row" className="text-center">
                  {index + 1}
                </th>
                <td className="text-center">{student.name}</td>
                <td className="text-center">{student.email}</td>
                <td className="text-center">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span>
                      {student.showPassword
                        ? student.password
                        : "*".repeat(student.password.length)}
                    </span>
                    <span
                      onClick={() => {
                        const updatedStudents = students.map((s) => {
                          if (s.id === student.id) {
                            return { ...s, showPassword: !s.showPassword };
                          }
                          return s;
                        });
                        setStudents(updatedStudents);
                      }}
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                    >
                      {student.showPassword ? (
                        <EyeSlashFill color="gray" size="20" />
                      ) : (
                        <EyeFill color="gray" size="20" />
                      )}
                    </span>
                  </div>
                </td>
                <td className="d-flex justify-content-center">
                  <Button
                    className="mx-1"
                    fullWidth
                    color="amber"
                    size="md"
                    onClick={() => handleView(student)}
                  >
                    View
                  </Button>
                  <Button
                    className="mx-1"
                    fullWidth
                    onClick={() => navigate(`/edituser/${student.id}`)}
                    color="amber"
                    size="md"
                  >
                    Edit
                  </Button>
                  <Button
                    className="mx-1"
                    fullWidth
                    color="red"
                    size="md"
                    onClick={() => {
                      deleteUser(student.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            <ViewUser user={displayUser} handleClose={handleClose} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
