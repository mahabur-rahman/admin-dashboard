import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import PolarDemo from "./PolarDemo";

const PolarAreaChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Polar Area Chart"} />
          </Card.Title>
          {/* Polar chart */}
          <PolarDemo />
        </Card.Body>
      </Card>
    </>
  );
};

export default PolarAreaChart;
