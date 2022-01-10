import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Hovered from "./Hovered";

const HoverTable = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Table with hoverable rows"} />
          </Card.Title>
          {/* simple table */}
          <Hovered />
        </Card.Body>
      </Card>
    </>
  );
};

export default HoverTable;
