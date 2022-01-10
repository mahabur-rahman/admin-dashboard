import React, { useState } from "react";
// react bootstrap
import { Card, ListGroup, Badge } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const CustomContent = () => {
  const data = [
    { id: 1, label: "Subheading", subTitle: "Cras justo odio", num: "14" },
    { id: 2, label: "Subheading", subTitle: "Cras justo odio", num: "14" },
    { id: 3, label: "Subheading", subTitle: "Cras justo odio", num: "14" },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"With custom content"} />
          </Card.Title>

          <ListGroup as="ol" numbered style={{ fontSize: "1rem" }}>
            {lists.map((list) => {
              const { id, label, subTitle, num } = list;
              return (
                <ListGroup.Item
                  key={id}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{label}</div>
                    {subTitle}
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

export default CustomContent;
