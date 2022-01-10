import React from "react";
// react bootstrap
import { Card, Spinner } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const AlignmentSpin = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Growing Color spinners"} />
          </Card.Title>
        </Card.Body>
        {/* alignment spin */}
        <div className="text-center">
          <Spinner animation="border" className="mx-3" />
        </div>
      </Card>
    </>
  );
};

export default AlignmentSpin;
