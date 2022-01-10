import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Small from "./Small";

const SmallTable = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border"  style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Small tables"} />
          </Card.Title>
          <Card.Text>
            Add <span className="text-danger"> .table-sm </span> to make any
            <span className="text-danger"> .table </span> more compact by
            cutting all cell padding in half.
          </Card.Text>
          <Small />
        </Card.Body>
      </Card>
    </>
  );
};

export default SmallTable;
