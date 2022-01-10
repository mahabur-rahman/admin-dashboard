import React from "react";
// react bootstrap
import { Card, Spinner } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const BorderSpin = () => {
  const text = "Use the border spinners for a lightweight loading indicator.";
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Border spinner"} />
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>{text}</Card.Text>
        </Card.Body>
        {/* border spin */}
        <Spinner animation="border" role="status" className="mx-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Card>
    </>
  );
};

export default BorderSpin;
