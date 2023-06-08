// discplimer: I used Bootstrap,React-Bootstrap, tailwindCSS, and React-Material UI for some compontents and I used the ChatGPT/Copilot
// for the assistance with the documentation of the code, but the logic and main code configiration is my own.

import { useNavigate } from "react-router-dom";
import { Button, Typography, Navbar } from "@material-tailwind/react";

const Navigationbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className=" navbar mx-auto  my-4 py-2 px-4 lg:px-8 lg:py-4">
        <div className="container-fluid">
          <Typography
            variant="h4"
            color="blue-gray"
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium no-underline"
          >
            Student Tracker App
          </Typography>
          <Button
            variant="filled"
            size="sm"
            color="red"
            onClick={() => navigate("/addstudent")}
          >
            ADD STUDENT
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
