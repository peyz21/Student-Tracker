import React, { useState, useEffect } from "react";
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
