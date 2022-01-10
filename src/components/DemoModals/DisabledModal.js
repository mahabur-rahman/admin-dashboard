import React from "react";
import { Card } from "react-bootstrap";
import AlertHeading from "../AlertHeading/AlertHeading";
import WithOutAnimation from "./WthoutAnimation";

const DisabledAnimation = () => {
  return (
    <>
      <Card className="shadow-sm pb-3">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Scrolling long content"} />
          </Card.Title>
        </Card.Body>
        {/* scrolling effect */}
        <WithOutAnimation />
      </Card>
    </>
  );
};

export default DisabledAnimation;
