import React from "react";
// react bootstrap
import { Card, Dropdown } from "react-bootstrap";

const BoxCard = ({
  labelOne,
  labelTwo,
  icon1,
  icon2,
  title,
  percent,
  title2,
  currencyColor,
  textColor,
}) => {
  return (
    <>
      <div className="filter_card">
        <Card className="shadow-sm mt-4 pt-1">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between up_part">
              <Card.Title>
                {labelOne} <span>{labelTwo}</span>
              </Card.Title>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <div className="three_dots">
                    <span>{icon1}</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>Filter</Dropdown.Header>
                  <Dropdown.Item eventKey="2">Today</Dropdown.Item>
                  <Dropdown.Item eventKey="3">This Month</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Card.Text>
              <div className="cart_icon d-flex align-items-center">
                <span className={`${currencyColor}`}>{icon2}</span>
                <div className="percent_text">
                  <h3 className="mb-0">{title}</h3>
                  <p>
                    <span
                      className={
                        textColor ? "danger" : "text-success small_text"
                      }
                    >
                      {percent}
                    </span>
                    {title2}
                  </p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default BoxCard;
