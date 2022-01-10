import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import AlignPagi from "./AlignPagi";

const AlignDemo = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Alignment"} />
          </Card.Title>
        </Card.Body>
        {/* with icon */}
        <AlignPagi />
      </Card>
    </>
  );
};

export default AlignDemo;
