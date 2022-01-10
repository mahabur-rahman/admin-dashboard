import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";

const CardImgTop = ({ imgSrc, cardTitle, cardText }) => {
  return (
    <>
      <Card className="shadow-sm border-0">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>{cardText}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardImgTop;
