// discplimer: I used Bootstrap,React-Bootstrap, tailwindCSS, and React-Material UI for some compontents and I used the ChatGPT/Copilot
// for the assistance with the documentation of the code, but the logic and main code configiration is my own.

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
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // to navigate to other pages
  const [showPassword, setShowPassword] = useState(false);

  const [student, setStudent] = useState({
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
      `${process.env.REACT_APP_PRODUCTION_API}/student/${id}` //Railway.app
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
      `${process.env.REACT_APP_PRODUCTION_API}/student/${id}`, //Railway.app
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
            <div style={{ position: "relative" }}>
              <Input
                color="teal"
                type={showPassword ? "text" : "password"}
                label="Password"
                size="lg"
                value={password}
                name="password"
                required
                onChange={(e) => onInputChange(e)}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? (
                  <EyeSlashFill color="gray" size="20" />
                ) : (
                  <EyeFill color="gray" size="20" />
                )}
              </div>
            </div>

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
