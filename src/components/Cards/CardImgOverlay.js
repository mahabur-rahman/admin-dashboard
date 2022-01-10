import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";

const CardImgOverlay = ({ imgSrc, cardTitle, cardText }) => {
  return (
    <>
      <Card className="border-0">
        <Card.Img src={imgSrc} alt={cardTitle} />
        <Card.ImgOverlay>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text className="text-dark" style={{ fontSize: "1rem" }}>
            {cardText}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default CardImgOverlay;
