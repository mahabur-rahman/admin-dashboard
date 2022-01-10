import React from "react";
// react bootstrap
import { Button } from "react-bootstrap";

const SubmitBtn = ({ btnTitle }) => {
  return (
    <>
      <div className="text-center">
        <Button type="submit" variant="primary">
          {btnTitle}
        </Button>
      </div>
    </>
  );
};

export default SubmitBtn;
