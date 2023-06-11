// discplimer: I used Bootstrap,React-Bootstrap, tailwindCSS, and React-Material UI for some compontents and I used the ChatGPT/Copilot
// for the assistance with the documentation of the code, but the logic and main code configiration is my own.

// Import necessary libraries and components
import { Typography, Button } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { Card, Modal } from "react-bootstrap";

// Function to scale a number from one range to another
// Used for scaling height and weight to appropriate sizes for boxStyle
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// ViewUser component for displaying student's information in a modal
const ViewUser = ({ user, handleClose }) => {
  // Create an empty object for boxStyle
  let boxStyle = {};

  // If there is a student, scale the width and height of the box according to student's weight and height
  // Also set the border color according to student's hair color
  if (user) {
    const width = scale(user.weight, 10, 150, 50, 150);
    const height = scale(user.height, 100, 220, 50, 150);
    boxStyle = {
      width: `${width}px`,
      height: `${height}px`,
      border: `2px solid ${user.hairColor}`,
      margin: "10px auto",
    };
  }

  // Render a modal with user's information, if a user is provided
  return (
    <Modal show={user != null} onHide={handleClose} centered>
      <Card className="shadow-sm">
        <Card.Header className="bg-danger text-white text-center">
          <h3 className="my-2">{user ? `${user.name}'s Information` : ""}</h3>
        </Card.Header>
        <Card.Body>
          {/* Display the student's information, if a student is provided */}
          {user && (
            <Fragment>
              {/* Various Typography components to display user's information */}
              {/* A div with boxStyle to visualize the user's weight and height */}
              <Typography variant="h5" className="my-2 text-dark">
                Name: <span className="text-gray-600">{user.name}</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                Hair Color:{" "}
                <span className="text-gray-600">{user.hairColor}</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                Height: <span className="text-gray-600">{user.height} Cm</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                Weight: <span className="text-gray-600">{user.weight} Kg</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                GPA: <span className="text-gray-600">{user.gpa}</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                Email: <span className="text-gray-600">{user.email}</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                Password: <span className="text-gray-600">{user.password}</span>
              </Typography>
              <p class="text-center my-2 text-dark">
                User Characteristics Display
              </p>
              <div style={boxStyle} className="user-box">
                <div class="text-center">
                  w:{user.weight} x h:{user.height}
                </div>
              </div>
              {user.weight === 0 || user.height === 0 ? (
                <p className="text-center text-danger">
                  This is impossible For a human! but if you insist...
                </p>
              ) : (
                ""
              )}
            </Fragment>
          )}
        </Card.Body>
        <Card.Footer className="text-center">
          <Button
            variant="gradient"
            color="red"
            fullWidth
            onClick={handleClose}
          >
            Close
          </Button>
        </Card.Footer>
      </Card>
    </Modal>
  );
};

export default ViewUser;
