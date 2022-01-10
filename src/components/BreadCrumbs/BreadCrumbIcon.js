import React from "react";
// react bootstrap
import { Breadcrumb } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
// icon
import { BsHouseDoor } from "react-icons/bs";

const WithHomeIcon = ({ pageTitle, urlTwo, urlThree }) => {
  return (
    <>
      <div className="">
        {/* Dynamic Breadcrumb link */}
        <h4 style={{ color: "#012970" }}>{pageTitle}</h4>
        <Breadcrumb className="px-1">
          <Breadcrumb.Item className="bread_item">
            <Link to="/">{<BsHouseDoor />}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="bread_item">
            <Link to="/">{urlTwo}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bread_item active_color">
            {urlThree}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default WithHomeIcon;
