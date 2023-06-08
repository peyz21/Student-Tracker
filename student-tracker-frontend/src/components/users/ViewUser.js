// discplimer: I used Bootstrap,React-Bootstrap, tailwindCSS, and React-Material UI for some compontents and I used the ChatGPT/Copilot
// for the assistance with the documentation of the code, but the logic and main code configiration is my own.

import { Typography, Button } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { Card, Modal } from "react-bootstrap";


//this is to scale the box
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//this is to display the user's information modal
const ViewUser = ({ user, handleClose }) => {
  let boxStyle = {};
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

  return (
    <Modal show={user != null} onHide={handleClose} centered>
      <Card className="shadow-sm">
        <Card.Header className="bg-danger text-white text-center">
          <h3 className="my-2">{user ? `${user.name}'s Information` : ""}</h3>
        </Card.Header>
        <Card.Body>
          {user && (
            <Fragment>
              <Typography variant="h5" className="my-2 text-dark">
                Name: <span className="text-gray-600">{user.name}</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                Hair Color:{" "}
                <span className="text-gray-600">{user.hairColor}</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                Height: <span className="text-gray-600">{user.height}</span>
              </Typography>
              <Typography variant="h5" className="my-2 text-dark">
                Weight: <span className="text-gray-600">{user.weight}</span>
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
              <div style={boxStyle} className="user-box"> </div> {/* to display the box */}
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
