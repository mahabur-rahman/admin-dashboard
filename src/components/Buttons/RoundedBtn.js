import React from "react";
// react bootstrap
import { Button } from "react-bootstrap";

const RoundedBtn = () => {
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
        <Button variant={variant} className="m-1 rounded-pill" key={idx}>
          {variant}
        </Button>
      ))}
    </>
  );
};

export default RoundedBtn;
