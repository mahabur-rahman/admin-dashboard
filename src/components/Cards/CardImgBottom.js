import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";

const CardImgBottom = ({ imgSrc, cardTitle, cardText }) => {
  return (
    <>
      <Card className="shadow-sm my-4 border-0">
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>{cardText}</Card.Text>
        </Card.Body>
        <Card.Img src={imgSrc} />
      </Card>
    </>
  );
};

export default CardImgBottom;
