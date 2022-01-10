import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import DoughGraph from "./DoughGraph";

const DoughNutChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Doughnut Chart"} />
          </Card.Title>
          {/* DoughGraph chart */}
          <DoughGraph />
        </Card.Body>
      </Card>
    </>
  );
};

export default DoughNutChart;
