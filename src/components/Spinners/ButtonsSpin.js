import React, { useState } from "react";
// react bootstrap
import { Card, Spinner, Button } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const SpinButton = () => {
  const [data, setData] = useState([
    { border: "border", size: "sm" },
    { border: "border" },
    { border: "grow", size: "sm" },
    { border: "grow" },
  ]);

  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4 button_spin">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Buttons"} />
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>
            Use spinners within buttons to indicate an action is currently
            processing or taking place. You may also swap the text out of the
            spinner element and utilize button text as needed.
          </Card.Text>
        </Card.Body>

        <div className="d-flex">
          <div className="mx-2">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>
          </div>
          <div className="mx-2">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </div>

          {/* for grow */}
          <div className="mx-2">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>
          </div>
          <div className="mx-2">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SpinButton;
