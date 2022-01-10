import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import WithIcon from "./WithIcon";

const PaginateIcon = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Pagination with icon"} />
          </Card.Title>
        </Card.Body>
        {/* with icon */}
        <WithIcon />
      </Card>
    </>
  );
};

export default PaginateIcon;
