import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BackDrop from "./BackDrop";

const LaunchModal = ({ text }) => {
  return (
    <>
      <Card className="shadow-sm my-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Disabled Backdrop"} />
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <BackDrop />
      </Card>
    </>
  );
};

export default LaunchModal;
