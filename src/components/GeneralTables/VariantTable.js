import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Variant from "./Variant";

const VariantTable = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Table Variants"} />
          </Card.Title>
          <Card.Text>
            Use contextual classes
            <span className="text-danger mx-1">
              .table-primary .table-secondary .table-success .table-danger
              .table-warning .table-info .table-light .table-dark
            </span>
            to color tables, table rows or individual cells.
          </Card.Text>
          <Variant />
        </Card.Body>
      </Card>
    </>
  );
};

export default VariantTable;
