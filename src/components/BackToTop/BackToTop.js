import React from "react";
// scss
import "./backBtn.scss";
// antd
import "antd/dist/antd.css";
import { BackTop } from "antd";
// icon
import { BsArrowUpShort } from "react-icons/bs";

const BackToTop = () => {
  return (
    <>
      <div className="text-end">
        <BackTop style={{ right: "12px" }}>
          <span className="back_Btn">
            <BsArrowUpShort />
          </span>
        </BackTop>
      </div>
    </>
  );
};

export default BackToTop;
