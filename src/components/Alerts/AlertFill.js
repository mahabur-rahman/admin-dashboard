import React, { useState } from "react";
// scss
import "./alert.scss";
// react bootstrap
import { Alert } from "react-bootstrap";

const AlertFill = () => {
  const [data, setData] = useState([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]);

  // delete
  const handleClose = (idx) => {
    setData(data.filter((item, ind) => ind !== idx));
  };

  return (
    <>
      {data.map((variant, idx) => (
        <Alert
          key={idx}
          variant={variant}
          dismissible
          className={`bg-${variant} text-light`}
          onClose={() => handleClose(idx)}
        >
          A simple {variant} alert with solid color—check it out!
        </Alert>
      ))}
    </>
  );
};

export default AlertFill;
