import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Sizing from "./Sizing";

const DemoSizing = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border my-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Sizing"} />
          </Card.Title>
        </Card.Body>
        {/* with icon */}
        <Sizing />
      </Card>
    </>
  );
};

export default DemoSizing;
