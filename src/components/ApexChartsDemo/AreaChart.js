import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import AreaDemo from "./AreaDemo";

const AreaChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Area Chart"} />
          </Card.Title>
          {/* apex line chart */}
          <AreaDemo />
        </Card.Body>
      </Card>
    </>
  );
};

export default AreaChart;
