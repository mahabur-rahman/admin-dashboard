import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import PolarGraph from "./PolarGraph";

const PolarAreaChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Polar Area Chart"} />
          </Card.Title>
          {/* Polar Area Chart */}
          <PolarGraph />
        </Card.Body>
      </Card>
    </>
  );
};

export default PolarAreaChart;
