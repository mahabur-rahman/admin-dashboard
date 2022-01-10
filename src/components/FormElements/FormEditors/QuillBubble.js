import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";
import Bubble from "./Bubble";

const QuillBubble = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Quill Editor Bubble"} />
          </Card.Title>
          <Card.Text>
            Select some text to display options in poppovers
          </Card.Text>
          {/* Bubble  */}
          <Bubble />
        </Card.Body>
      </Card>
    </>
  );
};

export default QuillBubble;
