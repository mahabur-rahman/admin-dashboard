import React from "react";
// react bootstrap
import { Card, ProgressBar } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const Default = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Default"} />
          </Card.Title>
        </Card.Body>
        {/* default */}
        <ProgressBar now={30} className="mx-3 mb-3" />
        <ProgressBar now={50} className="mx-3  mb-3" />
        <ProgressBar now={70} className="mx-3  mb-3" />
        <ProgressBar now={100} className="mx-3  mb-3" />
      </Card>
    </>
  );
};

export default Default;
