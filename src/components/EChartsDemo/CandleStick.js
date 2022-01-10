import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import CandleDemo from "./CandleDemo";

const CandleStick = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Candle Stick Chart"} />
          </Card.Title>
          {/* Candle stick chart */}
          <CandleDemo />
        </Card.Body>
      </Card>
    </>
  );
};

export default CandleStick;
