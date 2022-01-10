import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";
import TinyEditor from "./TinyEditor";

const Tiny = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"TinyMCE Editor"} />
          </Card.Title>
          {/* Default quill editor */}
          <TinyEditor />
        </Card.Body>
      </Card>
    </>
  );
};

export default Tiny;
