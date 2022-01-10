import React, { useState } from "react";
// react bootstrap
import { Col, Row, Form } from "react-bootstrap";
// comp
import SubmitBtn from "./SubmitBtn";

const Settings = () => {
  const data = [
    {
      id: 1,
      type: "checkbox",
      label: " Changes made to your account",
      checked: true,
    },
    {
      id: 2,
      type: "checkbox",
      label: " Information on new products and services ",
      checked: true,
    },
    { id: 3, type: "checkbox", label: " Marketing and promo offers " },
    {
      id: 4,
      type: "checkbox",
      label: " Security alerts ",
      checked: "checked",
      disabled: "disabled",
    },
  ];
  const [checkData, setCheckData] = useState(data);
  return (
    <>
      <div className="settings_part">
        <Row className="mb-3">
          <Col xl={3}>
            <div className="edit_profile_left">
              <div className="left_part">
                <h3 className="settings_title">
                  Email
                  <br />
                  Notifications
                </h3>
              </div>
            </div>
          </Col>
          <Col xl={9}>
            <div className="right_part">
              <Form style={{ fontSize: "1rem" }}>
                {checkData.map((ele) => {
                  const { id, type, label, checked, disabled } = ele;
                  return (
                    <Form.Check
                      key={id}
                      type={type}
                      label={label}
                      id={`disabled-default-${type}`}
                      checked={checked}
                      disabled={disabled}
                    />
                  );
                })}
              </Form>
            </div>
          </Col>
        </Row>
        {/* btn */}
        <SubmitBtn btnTitle={"Save Changes"} />
      </div>
    </>
  );
};

export default Settings;
