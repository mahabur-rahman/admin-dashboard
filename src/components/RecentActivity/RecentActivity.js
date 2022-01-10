import React from "react";
// scss
import "./recentactivity.scss";
// react bootstrap
import { Card, Dropdown } from "react-bootstrap";
// icons
import { BsThreeDots } from "react-icons/bs";
import ActivityTime from "./ActivitiTime";

const RecentActivity = () => {
  return (
    <>
      <div id="recentActivity" className="filter_card mb-4">
        <Card className="shadow-sm mt-4">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between up_part">
              <Card.Title>
                Recent Activity <span>| Today</span>
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
          {/* activity time */}
          <ActivityTime />
        </Card>
      </div>
    </>
  );
};

export default RecentActivity;
