import React from "react";
// react bootstrap
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardTreatment = ({
  title,
  text,
  btnText,
  activeLinkText,
  urlOne,
  urlTwo,
  disText,
  linkText,
}) => {
  return (
    <>
      <Card className="shadow-sm p-2 border-0">
        <div className="d-flex">
          <Link to={urlOne} className="btn btn-primary">
            {activeLinkText}
          </Link>
          <Link to={urlTwo} className="mx-4">
            {linkText}
          </Link>
        </div>
        <span className="disabled mt-3">{disText}</span>
        <hr />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>{text}</Card.Text>
          <Button variant="primary">{btnText}</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTreatment;
