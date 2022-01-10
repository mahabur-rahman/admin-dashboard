import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BasicDemo from "./BasicDemo";

const Basic = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Basic Pagination"} />
          </Card.Title>
        </Card.Body>
        {/* basic pagination */}
        <BasicDemo />
      </Card>
    </>
  );
};

export default Basic;
