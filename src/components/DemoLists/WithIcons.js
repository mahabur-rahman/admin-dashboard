import React, { useState } from "react";
// react bootstrap
import { Card, ListGroup } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
// icons
import {
  BsStar,
  BsFolder,
  BsCheckCircle,
  BsExclamationOctagon,
} from "react-icons/bs";

const ListWithIcons = () => {
  const data = [
    { id: 1, label: "An Item", icon: <BsStar />, var: "success" },
    { id: 2, label: "A second item", icon: <BsFolder />, var: "info" },
    {
      id: 3,
      label: "A third item",
      icon: <BsCheckCircle />,
      var: "danger",
    },
    {
      id: 4,
      label: "A fourth item",
      icon: <BsExclamationOctagon />,
      var: "warning",
    },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"With Icons"} />
          </Card.Title>

          <ListGroup style={{ fontSize: "1rem" }}>
            {lists.map((list) => {
              return (
                <ListGroup.Item key={list.id} className={`text-${list.var}`}>
                  <span>{list.icon}</span> {list.label}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListWithIcons;
