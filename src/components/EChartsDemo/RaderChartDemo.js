import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import ReportGraph from "../BudgetReport/ReportGraph";

const RadarChartDemo = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Radar Chart"} />
          </Card.Title>
          {/* Radar chart */}
          <ReportGraph />
        </Card.Body>
      </Card>
    </>
  );
};

export default RadarChartDemo;
