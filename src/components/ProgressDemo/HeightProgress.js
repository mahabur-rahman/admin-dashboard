import React from "react";
// react bootstrap
import { Card, ProgressBar } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const HeightProgress = () => {
  const text =
    "We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingl";
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Height"} />
          </Card.Title>
          <Card.Text  style={{ fontSize: "1rem" }}>{text}</Card.Text>
        </Card.Body>
        {/* default */}
        <ProgressBar
          now={30}
          style={{ height: ".7rem" }}
          className="mx-3 mb-3"
        />
        <ProgressBar
          style={{ height: "1.1rem" }}
          now={50}
          className="mx-3  mb-3"
        />
        <ProgressBar
          style={{ height: "1.5rem" }}
          now={70}
          className="mx-3  mb-3"
        />
        <ProgressBar
          style={{ height: "2rem" }}
          now={100}
          className="mx-3  mb-3"
        />
      </Card>
    </>
  );
};

export default HeightProgress;
