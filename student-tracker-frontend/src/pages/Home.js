import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ViewUser from "../components/users/ViewUser";
import { Button } from "@material-tailwind/react";

const Home = () => {
  const [displayUser, setDisplayUser] = useState(null);
  const { id } = useParams();
  const [students, setStudents] = React.useState([]);
  const navigate = useNavigate(); // to navigate to other pages
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
      "https://student-tracker-production.up.railway.app/students" //Railway.app
      // "https://student-tracker-be-utaf.onrender.com/students" // RENDER
    );
    setStudents(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://student-tracker-production.up.railway.app/student/${id}` //Railway.app
      // `https://student-tracker-be-utaf.onrender.com/student/${id}` // RENDER
    );
    loadStudent();
  }; // delete user function

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
                <td className="text-center">{student.password}</td>
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
