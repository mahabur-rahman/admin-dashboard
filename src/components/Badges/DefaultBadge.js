import React from "react";
// scss
import "./badges.scss";

// react bootstrap
import { Badge } from "react-bootstrap";

const DefaultBadge = () => {
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
            {variant}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default DefaultBadge;
