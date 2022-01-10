import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import ColumnFigure from "./ColumnFigure";

const ColumnChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Column Chart"} />
          </Card.Title>
          {/* apex column chart */}
          <ColumnFigure />
        </Card.Body>
      </Card>
    </>
  );
};

export default ColumnChart;
