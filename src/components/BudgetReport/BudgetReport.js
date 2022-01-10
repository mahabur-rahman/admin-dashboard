import React from "react";
// scss
import "./budget.scss";
// react bootstrap
import { Card, Dropdown } from "react-bootstrap";
// icons
import { BsThreeDots } from "react-icons/bs";
// comp
import ReportGraph from "./ReportGraph";

const RecentActivity = () => {
  return (
    <>
      <div id="budgetReport" className="filter_card mb-4">
        <Card className="shadow-sm">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between up_part">
              <Card.Title>
                Budget Report <span className="budget_text">| This Month</span>
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
          {/* Report Graph */}
          <ReportGraph />
        </Card>
      </div>
    </>
  );
};

export default RecentActivity;
