import React, { useState } from "react";
// react bootstrap
import { Button } from "react-bootstrap";

const BtnState = () => {
  const [data, setData] = useState([
    { variant: "primary", text: " Normal" },
    { variant: "primary", text: " Disabled", nonActive: "disabled" },
    { variant: "outline-primary", text: " Normal" },
    { variant: "outline-primary", text: " Disabled", nonActive: "disabled" },
  ]);

  return (
    <>
      {data.map((elem, idx) => {
        return (
          <Button
            variant={elem.variant}
            key={idx}
            className="m-1"
            disabled={elem.nonActive}
          >
            {elem.icon}
            <span>{elem.text}</span>
          </Button>
        );
      })}
    </>
  );
};

export default BtnState;
