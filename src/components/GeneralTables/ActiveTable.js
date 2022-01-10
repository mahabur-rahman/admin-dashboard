import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Active from "./Active";

const ActiveTable = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Active Table"} />
          </Card.Title>
          <Card.Text>
            Highlight a table row or cell by adding a
            <span className="text-danger"> .table-active </span>
            class.
          </Card.Text>
          {/* simple table */}
          <Active />
        </Card.Body>
      </Card>
    </>
  );
};

export default ActiveTable;
