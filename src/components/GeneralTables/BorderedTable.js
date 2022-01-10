import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Bordered from "./Bordered";
import BorderedColor from "./BorderedColor";

const BorderedTable = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Bordered Table"} />
          </Card.Title>
          <Card.Text>
            Add <span className="text-danger"> .table-bordered </span> for
            borders on all sides of the table and cells.
          </Card.Text>
          {/* simple table */}
          <Bordered />
          {/* border color */}
          <Card.Text>
            <span className="text-primary"> Border color utilities </span> can
            be added to change colors:
          </Card.Text>
          <BorderedColor />
        </Card.Body>
      </Card>
    </>
  );
};

export default BorderedTable;
