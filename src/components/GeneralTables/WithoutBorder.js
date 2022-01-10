import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import NonBorder from "./NonBorder";

const WithoutBorder = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Tables without borders"} />
          </Card.Title>
          <Card.Text>
            Add <span className="text-danger"> .table-borderless </span> for a
            table without borders.
          </Card.Text>
          <NonBorder />
        </Card.Body>
      </Card>
    </>
  );
};

export default WithoutBorder;
