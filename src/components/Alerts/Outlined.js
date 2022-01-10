import React, { useState } from "react";
// scss
import "./alert.scss";
// react bootstrap
import { Alert } from "react-bootstrap";

const OutlinedAlert = () => {
  const [defaultData, setDefaultData] = useState([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]);

  const handleClose = (i) => {
    setDefaultData(defaultData.filter((item, ind) => ind !== i));
  };

  return (
    <>
      {defaultData.map((variant, idx) => (
        <Alert
          key={idx}
          className={`bg-white text-dark border-${variant}`}
          dismissible
          onClose={() => handleClose(idx)}
        >
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
};

export default OutlinedAlert;
