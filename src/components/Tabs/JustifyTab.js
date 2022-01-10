import React from "react";
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Justified from "./Justified";

const JustifyTab = () => {
  return (
    <>
      <Card className="shadow-sm px-2">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Default Tabs Justified"} />
          </Card.Title>
        </Card.Body>
        {/* justify tab comp */}
        <Justified />
      </Card>
    </>
  );
};

export default JustifyTab;
