import React from "react";
// scss
import "./news.scss";
// react bootstrap
import { Card, Dropdown } from "react-bootstrap";
// icons
import { BsThreeDots } from "react-icons/bs";
// comp
import DetailsNews from "./NewsDetails";

const UpdateNews = () => {
  return (
    <>
      <div id="websiteTraffic" className="filter_card mb-4">
        <Card className="shadow-sm mt-4">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between up_part">
              <Card.Title>
                News & Updates
                <span className="budget_text"> | Today</span>
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
          {/* news details page */}
          <DetailsNews />
        </Card>
      </div>
    </>
  );
};

export default UpdateNews;
