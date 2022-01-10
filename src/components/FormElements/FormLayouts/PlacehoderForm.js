import React from "react";
// react bootstrap
import { Card, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";

const PlaceholderForm = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Floating labels Form"} />
          </Card.Title>

          <Form>
            {/* floating label */}
            <Form.Group as={Row} controlId="floating">
              <Col sm="12">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>

                {/* group field */}
                <Form.Group as={Row}>
                  <Col sm="6">
                    <FloatingLabel
                      controlId="floatingEmail"
                      label="Email"
                      className="mb-3"
                    >
                      <Form.Control type="email" placeholder="Email" />
                    </FloatingLabel>
                  </Col>

                  <Col sm="6">
                    <FloatingLabel
                      controlId="password"
                      label="Password"
                      className="mb-3"
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
            {/* comments */}
            <Form.Group>
              <Col sm="12">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Comments"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Col>
            </Form.Group>

            {/* other group field */}
            <Form.Group as={Row} className="mb-3">
              <Col sm="6">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Col>

              <Col sm="4">
                <Form.Label>State</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>New York</option>
                  <option value="1">Oregon</option>
                  <option value="2">Dc</option>
                </Form.Select>
              </Col>

              <Col sm="2">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="" />
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

export default PlaceholderForm;
