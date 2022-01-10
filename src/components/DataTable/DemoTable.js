import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import DataTablePage from "../SalesDataTable/DataTablePage";

const DemoTable = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Datatables"} />
          </Card.Title>
          <Card.Text>
            Add lightweight datatables to your project with using the{" "}
            <span className="text-primary"> Simple DataTables </span> library.
            Just add <span className="text-danger"> .datatable </span> class
            name to any table you wish to conver to a datatable
          </Card.Text>
          {/* data table */}
          <DataTablePage />
        </Card.Body>
      </Card>
    </>
  );
};

export default DemoTable;
