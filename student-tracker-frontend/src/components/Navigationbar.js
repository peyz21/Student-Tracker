// discplimer: I used Bootstrap,React-Bootstrap, tailwindCSS, and React-Material UI for some compontents and I used the ChatGPT/Copilot
// for the assistance with the documentation of the code, but the logic and main code configiration is my own.

// Import necessary libraries and components
import { useNavigate } from "react-router-dom";
import { Button, Typography, Navbar } from "@material-tailwind/react";

// Define the Navigationbar component
const Navigationbar = () => {
  // useNavigate is a hook from react-router-dom which provides navigation methods
  const navigate = useNavigate();

  // Render the Navigationbar component
  return (
    <div>
      {/* Navbar component from material-tailwind for the navigation bar */}
      <Navbar className=" navbar mx-auto  my-4 py-2 px-4 lg:px-8 lg:py-4">
        <div className="container-fluid">
          {/* Typography component to display the application's name, which is also a link to the home page */}
          <Typography
            variant="h4"
            color="blue-gray"
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium no-underline font-weight-bold"
          >
            Student Tracker App
          </Typography>
          {/* Button to navigate to the Add Student page */}
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
