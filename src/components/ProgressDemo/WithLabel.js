import React from "react";
// react bootstrap
import { Card, ProgressBar } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const WithLabel = () => {
  const now1 = 25;
  const now2 = 50;
  const now3 = 75;
  const now4 = 100;

  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Labels"} />
          </Card.Title>
        </Card.Body>
        {/* with label */}
        <ProgressBar now={now1} label={`${now1}%`} className="mx-3 mb-2" />
        <ProgressBar now={now2} label={`${now2}%`} className="mx-3 mb-2" />
        <ProgressBar now={now3} label={`${now3}%`} className="mx-3 mb-2" />
        <ProgressBar now={now4} label={`${now4}%`} className="mx-3 mb-2" />
      </Card>
    </>
  );
};

export default WithLabel;
