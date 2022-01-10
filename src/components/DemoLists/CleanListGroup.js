import React, { useState } from "react";
// react bootstrap
import { Card, ListGroup } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const CleanListGroup = ({ text1, colorText, otherText }) => {
  const data = [
    { id: 1, label: "An Item" },
    { id: 2, label: "A second item" },
    { id: 3, label: "A third item" },
    { id: 4, label: "A fourth item" },
    { id: 5, label: "A disabled item", disabled: "disabled" },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Clean list group"} />
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>
            {text1} <span className="text-danger">{colorText}</span>
            {otherText}
          </Card.Text>
          <ListGroup variant="flush" style={{ fontSize: "1rem" }}>
            {lists.map((list) => {
              return (
                <ListGroup.Item
                  key={list.id}
                  active={list.active}
                  disabled={list.disabled}
                  action
                >
                  {list.label}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default CleanListGroup;
