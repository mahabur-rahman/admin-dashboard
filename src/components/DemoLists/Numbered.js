import React, { useState } from "react";
// react bootstrap
import { Card, ListGroup } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const NumberedList = () => {
  const data = [
    { id: 1, subTitle: "Cras justo odio" },
    { id: 2, subTitle: "Cras justo odio" },
    { id: 3, subTitle: "Cras justo odio" },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Numbered"} />
          </Card.Title>

          <ListGroup as="ol" numbered style={{ fontSize: "1rem" }}>
            {lists.map((list) => {
              const { id, subTitle } = list;
              return (
                <ListGroup.Item
                  key={id}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">{subTitle}</div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default NumberedList;
