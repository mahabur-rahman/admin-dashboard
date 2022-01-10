import React from "react";
// scss
import "./badges.scss";
// react bootstrap
import { Badge } from "react-bootstrap";

const HeadingBadge = () => {
  return (
    <>
      <div>
        <h1>
          Example h1 heading <Badge bg="primary">Primary</Badge>
        </h1>
        <h2>
          Example h2 heading <Badge bg="secondary">Secondary</Badge>
        </h2>
        <h3>
          Example h3 heading <Badge bg="success">Success</Badge>
        </h3>
        <h4>
          Example h4 heading <Badge bg="danger">Danger</Badge>
        </h4>
        <h5>
          Example h5 heading <Badge bg="warning">Warning</Badge>
        </h5>
        <h6>
          Example h6 heading <Badge bg="info">Info</Badge>
        </h6>
      </div>
    </>
  );
};

export default HeadingBadge;
