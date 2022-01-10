import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";
import Editor from "./Editor";

const Default = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Quill Editor Default"} />
          </Card.Title>
          {/* Default quill editor */}
          <Editor />
        </Card.Body>
      </Card>
    </>
  );
};

export default Default;
