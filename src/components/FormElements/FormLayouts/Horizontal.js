import React from "react";
// react bootstrap
import { Card, Form, Button, Row, Col } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";

const HorizontalForm = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Horizontal Form"} />
          </Card.Title>
          {/* horizontal form elements */}
          <Form>
            {/* text field */}
            <Form.Group as={Row} className="mb-3" controlId="text">
              <Form.Label column sm="2">
                Your Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            {/* email field */}
            <Form.Group as={Row} className="mb-3" controlId="email">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="" />
              </Col>
            </Form.Group>

            {/* password field */}
            <Form.Group as={Row} className="mb-3" controlId="password">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="" />
              </Col>
            </Form.Group>

            {/* radio */}
            <Form.Group as={Row} className="mb-3" controlId="radioInput">
              <Form.Label column sm="2">
                Radios
              </Form.Label>
              <Col sm="10">
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`First radio `}
                    />

                    <Form.Check
                      type={type}
                      label={`Second radio`}
                      id={`default-${type}`}
                    />
                    <Form.Check
                      disabled
                      type={type}
                      label={`Third disabled radio`}
                      id={`default-${type}`}
                    />
                  </div>
                ))}
              </Col>
            </Form.Group>

            {/* check */}
            <Form.Group as={Row} className="mb-3" controlId="checkInput">
              <Form.Label column sm="2">
                Check
              </Form.Label>
              <Col sm="10">
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Example checkbox`}
                    />

                    <Form.Check
                      type={type}
                      label={`Example checkbox 2`}
                      id={`default-${type}`}
                    />
                  </div>
                ))}
              </Col>
            </Form.Group>

            {/* submit button */}
            <div className="text-center">
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

export default HorizontalForm;
