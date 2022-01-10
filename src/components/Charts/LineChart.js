import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import LineFigure from "./LineFigure";

const LineDemo = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Line Chart"} />
          </Card.Title>
          {/* line chart */}
          <LineFigure />
        </Card.Body>
      </Card>
    </>
  );
};

export default LineDemo;
