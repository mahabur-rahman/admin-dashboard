import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import StackBarDemo from "./StackBarDemo";

const StackedBarChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Stacked Bar Chart"} />
          </Card.Title>
          {/* Stacked Bar Chart */}
          <StackBarDemo />
        </Card.Body>
      </Card>
    </>
  );
};

export default StackedBarChart;
