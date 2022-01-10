import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import Default from "./Default";

const BrowserDf = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Browser Default"} />
          </Card.Title>
          <Card.Text>
            Browser default validation with using the
            <span className="text-danger"> required </span>
            keyword. Try submitting the form below. Depending on your browser
            and OS, you’ll see a slightly different style of feedback.
          </Card.Text>
          {/* default  */}
          <Default />
        </Card.Body>
      </Card>
    </>
  );
};

export default BrowserDf;
