import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import StrippedTable from "./StrippedTable";

const Stripped = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Table with stripped rows"} />
          </Card.Title>
          {/* simple table */}
          <StrippedTable />
        </Card.Body>
      </Card>
    </>
  );
};

export default Stripped;
