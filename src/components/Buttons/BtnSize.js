import React, { useState } from "react";
// react bootstrap
import { Button } from "react-bootstrap";

const BtnSize = () => {
  const [data, setData] = useState([
    { variant: "primary", size: "sm", text: "Small" },
    { variant: "secondary", size: "", text: "Normal" },
    { variant: "success", size: "lg", text: "Large" },
    { variant: "outline-danger", size: "sm", text: "Small" },
    { variant: "outline-warning", size: "", text: "Normal" },
    { variant: "outline-info", size: "lg", text: "Large" },
  ]);
  return (
    <>
      {data.map((item, idx) => (
        <Button
          variant={item.variant}
          size={item.size}
          key={idx}
          className="m-1 text-capitalize"
        >
          {item.text}
        </Button>
      ))}
      {/* block btn */}
      <div className="d-grid  mt-2">
        <Button variant="primary">Block button</Button>
      </div>
    </>
  );
};

export default BtnSize;
