import React from "react";
// react bootstrap
import { Card, Spinner } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const GrowingSpin = () => {
  const text =
    "If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!";
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Growing spinner"} />
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>{text}</Card.Text>
        </Card.Body>
        {/* border spin */}
        <Spinner animation="grow" className="mx-3" />
      </Card>
    </>
  );
};

export default GrowingSpin;
