import React, { useState } from "react";
// react bootstrap
import { Card, ListGroup } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const LinkWithBtn = () => {
  const data = [
    { id: 1, label: "The current button", active: "active" },
    { id: 2, label: "A second item" },
    { id: 3, label: "A third button item" },
    { id: 4, label: "A fourth button item" },
    { id: 5, label: "A disabled button item", disabled: "disabled" },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Links and buttons"} />
          </Card.Title>
          <ListGroup style={{ fontSize: "1rem" }}>
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
          {/* Default list */}
        </Card.Body>
      </Card>
    </>
  );
};

export default LinkWithBtn;
