import React, { useState } from "react";
// react bootstrap
import { Card, ListGroup } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const DefaultList = () => {
  const data = [
    { id: 1, label: "An item" },
    { id: 2, label: "A second item" },
    { id: 3, label: "A third item" },
    { id: 4, label: "A fourth item" },
    { id: 5, label: "And a fifth one" },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Default List Group"} />
          </Card.Title>
          <ListGroup>
            {lists.map((list) => {
              return (
                <ListGroup.Item key={list.id} style={{ fontSize: "1rem" }}>
                  {list.label}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          {/* Default list */}
        </Card.Body>
      </Card>
    </>
  );
};

export default DefaultList;
