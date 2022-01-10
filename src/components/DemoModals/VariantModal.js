import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import ModalSize from "./ModalSize";

const VariantModal = ({ text }) => {
  return (
    <>
      <Card className="shadow-sm pb-3 my-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Modal Sizes"} />
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <ModalSize />
      </Card>
    </>
  );
};

export default VariantModal;
