import React from "react";
// react bootstrap
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardWithBtn = ({ title, text, subTitle, btnText, urlOne, urlTwo }) => {
  return (
    <>
      <Card className="shadow-sm border-0 my-4">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
          <Card.Text style={{ fontSize: "1rem" }}>{text}</Card.Text>
          <Button variant="primary">{btnText}</Button>
          <br />
          <br />
          <Link to="/">{urlOne}</Link>
          <Link to="/" className="mx-3">
            {urlTwo}
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardWithBtn;
