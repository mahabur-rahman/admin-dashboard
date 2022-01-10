import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BubbleDemo from "./BubbleDemo";

const BubbleChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Bubble Chart"} />
          </Card.Title>
          {/* Bubble chart */}
          <BubbleDemo />
        </Card.Body>
      </Card>
    </>
  );
};

export default BubbleChart;
