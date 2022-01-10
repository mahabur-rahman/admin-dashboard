import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import RadarExample from "./RadarExample";

const RadarChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Radar Chart"} />
          </Card.Title>
          {/* Radar chart */}
          <RadarExample />
        </Card.Body>
      </Card>
    </>
  );
};

export default RadarChart;
