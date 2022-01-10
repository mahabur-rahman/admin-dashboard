import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import ActiveState from "./ActiveState";

const Variety = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border my-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Disabled and active states"} />
          </Card.Title>
        </Card.Body>
        {/* with icon */}
        <ActiveState />
      </Card>
    </>
  );
};

export default Variety;
