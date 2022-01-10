import React from "react";
// react bootstrap
import { Card, Form, Button, Row, Col } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";

const VerticalForm = () => {
  return (
    <>
      <Card
        className="shadow-sm px-2 tabs_border pb-5"
        style={{ fontSize: "1rem" }}
      >
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Vertical Form"} />
          </Card.Title>
          {/* horizontal form elements */}
          <Form>
            {/* text field */}
            <Form.Group as={Row} className="mb-3" controlId="text">
              <Form.Label>Your Name</Form.Label>
              <Col sm="12">
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            {/* email field */}
            <Form.Group as={Row} className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Col sm="12">
                <Form.Control type="email" placeholder="" />
              </Col>
            </Form.Group>

            {/* password field */}
            <Form.Group as={Row} className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Col sm="12">
                <Form.Control type="password" placeholder="" />
              </Col>
            </Form.Group>

            {/* address field */}
            <Form.Group as={Row} className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Col sm="12">
                <Form.Control type="text" placeholder="1234 Main St" />
              </Col>
            </Form.Group>

            {/* submit button */}
            <div className="text-center mb-2">
              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
              <Button type="submit" className="btn btn-secondary mx-1">
                Reset
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default VerticalForm;
