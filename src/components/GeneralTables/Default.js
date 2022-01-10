import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Simple from "./Simple";

const Default = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Default Table"} />
          </Card.Title>
          {/* simple table */}
          <Simple />
        </Card.Body>
      </Card>
    </>
  );
};

export default Default;
