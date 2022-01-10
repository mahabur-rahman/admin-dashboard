import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Example from "./ModalExample";

const BasicModal = ({ text }) => {
  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Basic Modal"} />
          </Card.Title>
          <Card.Text className="common_text">{text}</Card.Text>
        </Card.Body>
        <Example />
      </Card>
    </>
  );
};

export default BasicModal;
