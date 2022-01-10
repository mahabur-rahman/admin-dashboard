import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import RadialChart from "./RadialChart";

const RadialBarChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Radial Bar Chart"} />
          </Card.Title>
          {/* radial bar chart */}
          <RadialChart />
        </Card.Body>
      </Card>
    </>
  );
};

export default RadialBarChart;
