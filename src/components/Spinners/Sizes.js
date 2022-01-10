import React, { useState } from "react";
// react bootstrap
import { Card, Spinner } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const Sizes = () => {
  const [data, setData] = useState([
    { border: "border", size: "sm" },
    { border: "border" },
    { border: "grow", size: "sm" },
    { border: "grow" },
  ]);

  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Sizes"} />
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>
            Add
            <span className="text-danger"> . spinner-border-sm </span> and
            <span className="text-danger"> . spinner-grow-sm </span> to make a
            smaller spinner that can quickly be used within other components.
            Or, use custom CSS or inline styles to change the dimensions as
            needed.
          </Card.Text>
        </Card.Body>
        {/* alignment spin */}
        <div className="text-center">
          {data.map((elem) => {
            return <Spinner animation={`${elem.border}`} size={elem.size} />;
          })}
        </div>
      </Card>
    </>
  );
};

export default Sizes;
