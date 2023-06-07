import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // to navigate to other pages
  const [student, setStudent] = React.useState({
    name: "",
    email: "",
    password: "",
    hairColor: "",
    height: "",
    weight: "",
    gpa: "",
  }); // to store the data from the form
  useEffect(() => {
    loadUser();
  }, []);
  const { name, email, password, hairColor, height, weight, gpa } = student;
  const loadUser = async () => {
    // console.log(id);
    const result = await axios.get(
        `https://student-tracker-production.up.railway.app/student/${id}` //Railway.app
      // `https://student-tracker-be-utaf.onrender.com/student/${id}` // RENDER
    );
    setStudent(result.data);
  };
  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    await axios.put(
      `https://student-tracker-production.up.railway.app/student/${id}`, //Railway.app
      // `https://student-tracker-be-utaf.onrender.com/student/${id}`, // RENDER
      student
    );
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center py-5">
      <Card className="w-1/2 shadow">
        <form onSubmit={(e) => onSubmit(e)}>
          <CardHeader
            variant="gradient"
            color="red"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Change the Student Information
            </Typography>
          </CardHeader>
          <CardBody color="teal" className="flex flex-col gap-4">
            <Input
              color="teal"
              label="Name"
              size="md"
              value={name}
              name="name"
              required
              onChange={(e) => onInputChange(e)}
            />
            <Input
              color="teal"
              type="email"
              label="Email"
              size="lg"
              value={email}
              name="email"
              required
              onChange={(e) => onInputChange(e)}
            />
            <Input
              color="teal"
              type="password"
              label="Password"
              size="lg"
              value={password}
              name="password"
              required
              onChange={(e) => onInputChange(e)}
            />
            <Input
              color="teal"
              label="Hair Color"
              size="lg"
              value={hairColor}
              name="hairColor"
              required
              onChange={(e) => onInputChange(e)}
            />
            <Input
              color="teal"
              type="number"
              min="0"
              label="Height"
              size="lg"
              value={height}
              name="height"
              required
              onChange={(e) => onInputChange(e)}
            />
            <Input
              color="teal"
              type="number"
              min="0"
              label="Weight"
              size="lg"
              value={weight}
              name="weight"
              required
              onChange={(e) => onInputChange(e)}
            />
            <Input
              color="teal"
              type="float"
              min="0"
              label="GPA"
              size="lg"
              value={gpa}
              name="gpa"
              required
              onChange={(e) => onInputChange(e)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="amber" type="submit" fullWidth>
              Add
            </Button>
            <Button
              variant="gradient"
              color="red"
              fullWidth
              className="my-2"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default EditUser;
