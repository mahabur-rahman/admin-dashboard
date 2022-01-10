import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import FormExample from "./CustomValidate";

const Custom = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Custom Styled Validation"} />
          </Card.Title>
          <Card.Text>
            For custom Bootstrap form validation messages, you’ll need to add
            the <span className="text-danger"> novalidate </span> boolean
            attribute to your
            <span className="text-danger"> form </span>. This disables the
            browser default feedback tooltips, but still provides access to the
            form validation APIs in JavaScript.
          </Card.Text>
          {/* default  */}
          <FormExample />
        </Card.Body>
      </Card>
    </>
  );
};

export default Custom;
