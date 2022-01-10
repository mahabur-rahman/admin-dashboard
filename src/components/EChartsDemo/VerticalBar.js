import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import VerticalDemo from "./VerticalDemo";

const VerticalBar = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Vertical Bar Chart"} />
          </Card.Title>
          {/* vertical bar chart */}
          <VerticalDemo />
        </Card.Body>
      </Card>
    </>
  );
};

export default VerticalBar;
