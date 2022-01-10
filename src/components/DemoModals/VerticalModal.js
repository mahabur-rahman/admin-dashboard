import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import VerticalTwo from "./VerticalTwo";

const VerticalModal = ({ text }) => {
  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Vertically Centered"} />
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <VerticalTwo />
      </Card>
    </>
  );
};

export default VerticalModal;
