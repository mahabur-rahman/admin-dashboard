import React, { useState } from "react";
// react bootstrap
import { Card } from "react-bootstrap";

// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const CheckWithRadio = () => {
  const data = [
    { id: 1, title: "First checkbox " },
    { id: 2, title: "Second checkbox " },
    { id: 3, title: "Third checkbox " },
    { id: 4, title: "Fourth checkbox " },
    { id: 5, title: "Fifth checkbox " },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"With Checkboxes and radios"} />
          </Card.Title>

          <ul class="list-group" style={{ fontSize: "1rem" }}>
            {lists.map((list) => {
              const { id, title } = list;
              return (
                <li class="list-group-item" key={id}>
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                  />
                  {title}
                </li>
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default CheckWithRadio;
