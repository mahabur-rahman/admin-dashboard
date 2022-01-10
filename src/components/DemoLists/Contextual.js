import React, { useState } from "react";
// react bootstrap
import { Card, ListGroup } from "react-bootstrap";

// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const ContextualClasses = () => {
  const data = [
    { id: 1, variant: "default" },
    { id: 2, variant: "primary" },
    { id: 3, variant: "secondary" },
    { id: 4, variant: "success" },
    { id: 5, variant: "danger" },
    { id: 6, variant: "warning" },
    { id: 7, variant: "info" },
    { id: 8, variant: "light" },
    { id: 9, variant: "dark" },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"With Contextual Classes"} />
          </Card.Title>

          <ListGroup style={{ fontSize: "1rem" }}>
            {lists.map((list, idx) => {
              return (
                <ListGroup.Item variant={`${list.variant}`} key={idx}>
                  A simple {list.variant} list group item
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContextualClasses;
