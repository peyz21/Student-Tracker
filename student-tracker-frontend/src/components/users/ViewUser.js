import { Typography, Button } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { Card, Modal } from "react-bootstrap";

const ViewUser = ({ user, handleClose }) => {
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
