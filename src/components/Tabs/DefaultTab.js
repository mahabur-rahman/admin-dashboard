import React from "react";
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Default from "./Default";

const DefaultTab = () => {
  return (
    <>
      <Card className="shadow-sm px-2">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Default Tabs"} />
          </Card.Title>
        </Card.Body>
        {/* default tab comp */}
        <Default />
      </Card>
    </>
  );
};

export default DefaultTab;
