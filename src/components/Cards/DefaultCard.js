import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";

const DefaultCard = ({ title, text }) => {
  return (
    <>
      <Card className="shadow-sm border-0">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DefaultCard;
