import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";

const WithHeaderFooter = ({ headerText, cardTitle, cardText, footerText }) => {
  return (
    <>
      <Card className="shadow-sm my-4 border-0">
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>{cardText}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{footerText}</Card.Footer>
      </Card>
    </>
  );
};

export default WithHeaderFooter;
