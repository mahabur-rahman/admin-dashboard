import React from "react";
// scss
import "./badges.scss";

// react bootstrap
import { Badge, Button } from "react-bootstrap";

const ButtonBadge = () => {
  return (
    <>
      <div className="badge_page">
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
          <Button variant={variant} className="m-1">
            Profile <Badge bg="light">9</Badge>
          </Button>
        ))}
      </div>
    </>
  );
};

export default ButtonBadge;
