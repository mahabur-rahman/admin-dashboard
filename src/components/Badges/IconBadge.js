import React from "react";
// scss
import "./badges.scss";
// react bootstrap
import { Badge, Button } from "react-bootstrap";
// icon
import { BsStar } from "react-icons/bs";

const IconBadge = () => {
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
          <Badge
            key={idx}
            bg={variant}
            className="font-bold text-capitalize px-2 py-1 mx-1"
          >
            <BsStar /> {variant}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default IconBadge;
