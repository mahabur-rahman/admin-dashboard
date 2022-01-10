import React, { useState } from "react";
// scss
import "./alert.scss";
// react bootstrap
import { Alert } from "react-bootstrap";
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

const AlertWithIcon = () => {
  const [allAlert, setAllAlert] = useState([
    { var: "primary", icon: <BsStar /> },
    { var: "secondary", icon: <BsCollection /> },
    { var: "success ", icon: <BsCheckCircle /> },
    { var: "danger ", icon: <BsExclamationOctagon /> },
    { var: "warning", icon: <BsExclamationTriangle /> },
    { var: "info ", icon: <BsInfoCircle /> },
    { var: "dark  ", icon: <BsFolder /> },
  ]);

  const handleClose = (i) => {
    setAllAlert(allAlert.filter((item, index) => index !== i));
  };

  return (
    <>
      {allAlert.map((item, idx) => (
        <Alert
          key={idx}
          variant={item.var}
          dismissible
          onClose={() => handleClose(idx)}
        >
          <span>{item.icon}</span> A simple {item.var} alert with icon—check it
          out!
        </Alert>
      ))}
    </>
  );
};

export default AlertWithIcon;
