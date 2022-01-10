import React from "react";
// scss
import "./tabs.scss";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import VertPill from "./VertPill";

const VerticalTab = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Vertical Pills Tabs"} />
          </Card.Title>
        </Card.Body>
        {/* vertical pill tab comp */}
        <VertPill />
      </Card>
    </>
  );
};

export default VerticalTab;
