import React from "react";
// scss
import "./tabs.scss";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BJT from "./BJT";

const BorderJustifyTab = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Bordered Tabs Justified"} />
          </Card.Title>
        </Card.Body>
        {/* justify tab comp */}
        <BJT />
      </Card>
    </>
  );
};

export default BorderJustifyTab;
