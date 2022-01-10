import React from "react";
// react bootstrap
import { Card, Col } from "react-bootstrap";
// data
import { bootstrapIconsData } from "../../Data/Data";

const BootIcons = () => {
  return (
    <>
      {bootstrapIconsData.map((icons) => {
        const { id, icon, label } = icons;
        return (
          <Col xl={2} lg={3} md={3} sm={4} xs={11} key={id} className="mx-auto">
            <Card
              className="shadow-sm tabs_border text-center"
              style={{ height: "150px" }}
            >
              <Card.Body>
                <span
                  style={{
                    fontSize: "2.5rem",
                    color: "#012970",
                  }}
                >
                  {icon}
                </span>
                <p
                  style={{
                    fontSize: ".9rem",
                    color: "#666",
                    marginTop: ".8rem",
                  }}
                >
                  {label}
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default BootIcons;
