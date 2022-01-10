import React, { useState } from "react";
// react bootstrap
import { Card, Badge, ListGroup } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const WithBadge = () => {
  const data = [
    {
      id: 1,
      title: "A list item",
      num: "14",
    },
    {
      id: 2,
      title: "A second list item",
      num: "2",
    },
    {
      id: 3,
      title: "A third list item ",
      num: "1",
    },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"With badges"} />
          </Card.Title>

          <ListGroup as="ol" style={{ fontSize: "1rem" }}>
            {lists.map((list) => {
              const { id, title, num } = list;
              return (
                <ListGroup.Item
                  key={id}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div>{title}</div>
                  </div>
                  <Badge variant="primary" pill>
                    {num}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default WithBadge;
