import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [student, setStudent] = React.useState([]);

  useEffect(() => {
    loadStudent();
  },[]);

  const loadStudent = async () => {
    const result = await axios.get("http://localhost:8080/students");
    setStudent(result.data.reverse());
  };

  return (
    <div className="container ">
      <div className="py-4">
        <table className="table table-bordered shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
