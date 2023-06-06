import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [students, setStudents] = React.useState([]);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get("http://localhost:8080/students");
    setStudents(result.data);
  };

  return (
    <div className="container ">
      <div className="py-4">
        <table className="table table-bordered shadow">
          <thead>
            <tr>
              <th scope="col" className="text-center">#</th>
              <th scope="col" className="text-center">Name</th>
              <th scope="col" className="text-center">Hair Color</th>
              <th scope="col" className="text-center">Height</th>
              <th scope="col" className="text-center">Weight</th>
              <th scope="col" className="text-center">GPA</th>
              <th scope="col" className="text-center">Email</th>
              <th scope="col" className="text-center">Password</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope="row" key={index} className="text-center">
                  {index + 1}
                </th>
                <td className="text-center">{student.name}</td>
                <td className="text-center">{student.hairColor}</td>
                <td className="text-center">{student.height}</td>
                <td className="text-center">{student.weight}</td>
                <td className="text-center">{student.gpa}</td>
                <td className="text-center">{student.email}</td>
                <td className="text-center">{student.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
