import React from "react";
// react bootstrap
import { Col, Row, Form } from "react-bootstrap";

import SubmitBtn from "./SubmitBtn";

const ChangePassword = () => {
  return (
    <>
      <div>
        <Row>
          <Form style={{ fontSize: "1rem" }}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Current Password
              </Form.Label>
              <Col sm="9">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                New Password
              </Form.Label>
              <Col sm="9">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Re-enter New Password
              </Form.Label>
              <Col sm="9">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
        </Row>
        {/* btn */}
        <SubmitBtn btnTitle={"Change Password"} />
      </div>
    </>
  );
};

export default ChangePassword;
