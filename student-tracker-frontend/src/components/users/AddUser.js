import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const AddUser = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <Card className="w-1/2">
        <CardHeader
          variant="gradient"
          color="red"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Student Information
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" color="red" fullWidth>
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddUser;
