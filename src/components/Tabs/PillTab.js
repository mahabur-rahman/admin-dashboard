import React from "react";
// scss
import "./tabs.scss";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Pill from "./Pill";

const PillTab = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Pills Tabs"} />
          </Card.Title>
        </Card.Body>
        {/* justify tab comp */}
        <Pill />
      </Card>
    </>
  );
};

export default PillTab;
