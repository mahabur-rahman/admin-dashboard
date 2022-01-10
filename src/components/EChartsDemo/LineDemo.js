import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import LineExample from "./LineExample";

const LineDemo = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Line Chart"} />
          </Card.Title>
          {/* line chart */}
          <LineExample />
        </Card.Body>
      </Card>
    </>
  );
};

export default LineDemo;
