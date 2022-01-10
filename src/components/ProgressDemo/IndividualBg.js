import React, { useState } from "react";
// react bootstrap
import { Card, ProgressBar } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const IndividualBg = () => {
  const data = [
    { id: 2, variant: "primary", percent: "20" },
    { id: 2, variant: "success", percent: "40" },
    { id: 2, variant: "info", percent: "60" },
    { id: 2, variant: "warning", percent: "80" },
    { id: 2, variant: "danger", percent: "100" },
  ];

  const [barData, setBarData] = useState(data);

  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Backgrounds"} />
          </Card.Title>
        </Card.Body>

        <div>
          {barData.map((elem) => {
            return (
              <ProgressBar
                variant={`${elem.variant}`}
                now={`${elem.percent}`}
                className="mx-3 mb-2"
              />
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default IndividualBg;
