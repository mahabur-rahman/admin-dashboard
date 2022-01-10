import React, { useState } from "react";
// react bootstrap
import { Card, Spinner } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const Colors = () => {
  const [data, setData] = useState([
    { variant: "primary" },
    { variant: "secondary" },
    { variant: "success" },
    { variant: "danger" },
    { variant: "warning" },
    { variant: "info" },
    { variant: "light" },
    { variant: "dark" },
  ]);
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Colors"} />
          </Card.Title>
        </Card.Body>
        {/* border spin */}
        <div>
          {data.map((spinner) => (
            <Spinner
              animation="border"
              variant={`${spinner.variant}`}
              className="mx-2"
            />
          ))}
        </div>
      </Card>
    </>
  );
};

export default Colors;
