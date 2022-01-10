import React from "react";
// react bootstrap
import { Button } from "react-bootstrap";

const OutlineBtn = () => {
  return (
    <>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant, idx) => (
        <Button variant={`outline-${variant}`} className="m-1" key={idx}>
          {variant}
        </Button>
      ))}
    </>
  );
};

export default OutlineBtn;
