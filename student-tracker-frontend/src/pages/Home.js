// discplimer: I used Bootstrap,React-Bootstrap, tailwindCSS, and React-Material UI for some compontents and I used the ChatGPT/Copilot
// for the assistance with the documentation of the code, but the logic and main code and the configiration is my own.

// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ViewUser from "../components/users/ViewUser";
import { Button } from "@material-tailwind/react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

// Home component
const Home = () => {
  // React state variables for display of students in the table and the pop up
  const [displayUser, setDisplayUser] = useState(null);
  const [students, setStudents] = React.useState([]);

  // React Router's navigate hooks
  const navigate = useNavigate();

  // Effect to load students data on component mount
  useEffect(() => {
    loadStudent();
  }, []);

  // Function to handle view action - sets selected student to be displayed in the pop up
  const handleView = (students) => {
    setDisplayUser(students);
  };

  // Function to close student view - sets displayUser state back to null and closes the pop up
  const handleClose = () => {
    setDisplayUser(null);
  };

  // Async function to load students data from API, sort them by id and store them in state
  const loadStudent = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_PRODUCTION_API}/students` // Railway.app API endpoint
    );
    const studentsData = result.data
      .sort((a, b) => a.id - b.id) // Sort students by id
      .map((student) => ({
        ...student,
        showPassword: false,
      }));
    // Update students state
    setStudents(studentsData);
  };

  /// Async function to delete a student by id
  const deleteUser = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_PRODUCTION_API}/student/${id}` //Railway.app
      // `https://student-tracker-be-utaf.onrender.com/student/${id}` // RENDER
    );
    loadStudent();// Reload students data after deletion
  };

  return (
    /* Various UI components, mapped students data, and handlers for view, edit, and delete actions */
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
