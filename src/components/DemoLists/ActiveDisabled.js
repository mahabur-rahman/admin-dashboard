import React, { useState } from "react";
// react bootstrap
import { Card, ListGroup } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const WithActiveDisabled = () => {
  const data = [
    { id: 1, label: "An active item", active: "active" },
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
            <AlertHeading title={"With active and disabled items"} />
          </Card.Title>
          <ListGroup style={{ fontSize: "1rem" }}>
            {lists.map((list) => {
              return (
                <ListGroup.Item
                  key={list.id}
                  active={list.active}
                  disabled={list.disabled}
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

export default WithActiveDisabled;
