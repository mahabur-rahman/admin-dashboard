import React from "react";

// react bootstrap
import { Card, Col, Image, Row } from "react-bootstrap";

const CardWithImage = ({ imgSrc, cardTitle, cardText }) => {
  return (
    <>
      <Card className="shadow-sm border-0">
        <Row>
          <Col md={4}>
            <Image src={imgSrc} fluid alt={cardTitle} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="mb-0">{cardTitle}</Card.Title>
              <Card.Text style={{ fontSize: "1rem" }}>{cardText}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardWithImage;
