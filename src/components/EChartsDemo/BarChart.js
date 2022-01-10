import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BarDemo from "./BarDemo";

const BarChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Bar Chart"} />
          </Card.Title>
          {/* bar chart */}
          <BarDemo />
        </Card.Body>
      </Card>
    </>
  );
};

export default BarChart;
