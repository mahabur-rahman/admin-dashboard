import React from "react";
// react bootstrap
import { Card, Tooltip, Button, OverlayTrigger } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const Example = () => {
  const text =
    " Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. ";

  return (
    <>
      <Card className="shadow-sm px-2 tabs_border pb-4">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Tooltips Examples"} />
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>{text}</Card.Text>
        </Card.Body>
        {/* varieties tooltip */}

        <div className="mx-2">
          {["top", "right", "bottom", "left"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Tooltip on <strong>{placement}</strong>.
                </Tooltip>
              }
            >
              <Button variant="secondary" className="mx-2 my-1">
                Tooltip on {placement}
              </Button>
            </OverlayTrigger>
          ))}
        </div>
      </Card>
    </>
  );
};

export default Example;
