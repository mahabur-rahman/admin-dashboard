import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import PieChart from "./PieChart";

const PieExample = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Pie Chart"} />
          </Card.Title>
          {/* pie chart */}
          <PieChart />
        </Card.Body>
      </Card>
    </>
  );
};

export default PieExample;
