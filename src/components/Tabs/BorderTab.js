import React from "react";
// scss
import "./tabs.scss";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BorderTb from "./BorderTb";

const BorderTab = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Bordered Tabs"} />
          </Card.Title>
        </Card.Body>
        {/* justify tab comp */}
        <BorderTb />
      </Card>
    </>
  );
};

export default BorderTab;
