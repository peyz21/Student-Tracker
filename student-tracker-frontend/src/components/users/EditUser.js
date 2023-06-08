// discplimer: I used Bootstrap,React-Bootstrap, tailwindCSS, and React-Material UI for some compontents and I used the ChatGPT/Copilot
// for the assistance with the documentation of the code, but the logic and main code configiration is my own.

// Import necessary libraries and components
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
  // Use React Router's useParams hook to get the 'id' param from the current URL
  const { id } = useParams();
  // React Router's navigate hook
  const navigate = useNavigate();
  // React state variable for showing/hiding password
  const [showPassword, setShowPassword] = useState(false);

  // React state variable for student's form data
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    hairColor: "",
    height: "",
    weight: "",
    gpa: "",
  });

  // Destructure student's form data
  const { name, email, password, hairColor, height, weight, gpa } = student;

  // Fetch the student data when component mounts
  useEffect(() => {
    loadUser();
  }, []);

   // Function to load the user's data from the API
  const loadUser = async () => {
    // console.log(id);
    const result = await axios.get(
      `${process.env.REACT_APP_PRODUCTION_API}/student/${id}` //Railway.app
    );
    setStudent(result.data);
  };

  // Handler for form inputs change - updates student's form data
  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  
  // Handler for form submit
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    await axios.put(
      `${process.env.REACT_APP_PRODUCTION_API}/student/${id}`, //Railway.app
      student
    );
    // Navigate to home
    navigate("/");
  };

  return (
    /* Various UI components for form inputs and handlers for form submit and password show/hide action */
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
