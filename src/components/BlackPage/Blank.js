import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";

const Blank = ({ title, text }) => {
  return (
    <>
      <Card className="border-0 shadow p-2">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Blank;
