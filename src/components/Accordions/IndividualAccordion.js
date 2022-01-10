import React from "react";
// scss
import "./accordions.scss";
// react bootstrap
import { Accordion } from "react-bootstrap";

const IndividualAccordion = ({
  num,
  label,
  boldText,
  simpleText,
  colorText,
  simpleTextTwo,
}) => {
  return (
    <>
      <Accordion defaultActiveKey={"0"} flush>
        <Accordion.Item eventKey={num}>
          <Accordion.Header>{label}</Accordion.Header>
          <Accordion.Body className="para">
            <strong className="mx-1">{boldText}</strong>
            {simpleText}
            <span className="text-danger">{colorText}</span> {simpleTextTwo}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default IndividualAccordion;
