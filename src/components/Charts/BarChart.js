import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BarExample from "./BarExmp";

const BarDemo = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Bar CHart"} />
          </Card.Title>
          {/* Bar chart */}
          <BarExample />
        </Card.Body>
      </Card>
    </>
  );
};

export default BarDemo;
