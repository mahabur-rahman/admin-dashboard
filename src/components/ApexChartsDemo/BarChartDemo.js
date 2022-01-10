import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BarChartExample from "./BarChartExample";

const BarChartDemo = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Bar Chart"} />
          </Card.Title>
          {/* bar chart */}
          <BarChartExample />
        </Card.Body>
      </Card>
    </>
  );
};

export default BarChartDemo;
