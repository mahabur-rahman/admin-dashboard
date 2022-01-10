import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";
import QFull from "./QFull";

const QuillFull = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Quill Editor Full"} />
          </Card.Title>
          <Card.Text>Quill editor with full toolset</Card.Text>
          {/* Quill Editor Full */}
          <QFull />
        </Card.Body>
      </Card>
    </>
  );
};

export default QuillFull;
