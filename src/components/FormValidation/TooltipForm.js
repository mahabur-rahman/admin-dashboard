import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import TooltipValidate from "./TooltipValidate";

const TooltipForm = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Custom Styled Validation with Tooltips"} />
          </Card.Title>
          <Card.Text>
            If your form layout allows it, you can swap the .
            <span className="text-danger"> valid | invalid </span>
            -feedback classes for .
            <span className="text-danger"> valid | invalid </span>
            <span className="text-danger"> -tooltip </span>
            classes to display validation feedback in a styled tooltip. Be sure
            to have a parent with
            <span className="text-danger"> position: relative </span> on it for
            tooltip positioning. In the example below, our column classes have
            this already, but your project may require an alternative setup.
          </Card.Text>
          {/* default  */}
          <TooltipValidate />
        </Card.Body>
      </Card>
    </>
  );
};

export default TooltipForm;
