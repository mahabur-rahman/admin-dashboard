import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import PolarExample from "./PolarExample";

const PolarAreaDemo = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Polar Area Chart"} />
          </Card.Title>
          {/* polar area chart */}
          <PolarExample />
        </Card.Body>
      </Card>
    </>
  );
};

export default PolarAreaDemo;
