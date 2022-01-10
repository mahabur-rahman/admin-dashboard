import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BgDarkTable from "./BgDarkTable";

const DarkTable = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Dark Table"} />
          </Card.Title>
          {/* simple table */}
          <BgDarkTable />
        </Card.Body>
      </Card>
    </>
  );
};

export default DarkTable;
