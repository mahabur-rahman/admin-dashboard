import React from "react";

// react bootstrap
import { Card, Dropdown } from "react-bootstrap";
// icons
import {
  BsThreeDots,
  BsCart,
  BsCurrencyDollar,
  BsPeople,
} from "react-icons/bs";
// data table
import DataTable from "./DataTablePage";

const SalesDataTable = () => {
  return (
    <>
      <div className="filter_card mb-4">
        <Card className="shadow-sm">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between up_part pt-3">
              <Card.Title>
                Recent Sales <span>| Today</span>
              </Card.Title>
              <Dropdown>
                <Dropdown.Toggle id="dropdown">
                  <div className="three_dots">
                    <span>
                      <BsThreeDots />
                    </span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>Filter</Dropdown.Header>
                  <Dropdown.Item eventKey="2">Today</Dropdown.Item>
                  <Dropdown.Item eventKey="3">This Month</Dropdown.Item>
                  <Dropdown.Item eventKey="3">This Year</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Body>
          {/* data tables start */}
          <DataTable />
        </Card>
      </div>
    </>
  );
};

export default SalesDataTable;
