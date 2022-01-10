import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import ScrollingEffect from "./ScrollingEffect";

const Scrolling = ({ text }) => {
  return (
    <>
      <Card className="shadow-sm pb-3">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Scrolling long content"} />
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        {/* scrolling effect */}
        <ScrollingEffect />
      </Card>
    </>
  );
};

export default Scrolling;
