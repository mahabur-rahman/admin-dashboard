import React, { useState } from "react";
// react bootstrap
import { Button } from "react-bootstrap";
// icon
import {
  BsStar,
  BsCollection,
  BsCheckCircle,
  BsExclamationOctagon,
  BsExclamationTriangle,
  BsInfoCircle,
  BsFolder,
} from "react-icons/bs";

const BtnWihIcon = () => {
  const [data, setData] = useState([
    { variant: "primary", icon: <BsStar />, text: " With Text" },
    { variant: "secondary", icon: <BsCollection /> },
    { variant: "success", icon: <BsCheckCircle /> },
    { variant: "danger", icon: <BsExclamationOctagon /> },
    { variant: "warning", icon: <BsExclamationTriangle /> },
    { variant: "info", icon: <BsInfoCircle /> },
    { variant: "dark", icon: <BsFolder /> },
  ]);

  return (
    <>
      {data.map((elem, idx) => {
        return (
          <Button variant={elem.variant} key={idx} className="m-1">
            {elem.icon}
            <span>{elem.text}</span>
          </Button>
        );
      })}
    </>
  );
};

export default BtnWihIcon;
