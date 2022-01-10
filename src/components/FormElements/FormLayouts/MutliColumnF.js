import React from "react";
// react bootstrap
import { Card, Form, Button, Row, Col } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";

const MultipleColumnForm = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Multi Columns Form"} />
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

            {/* group field */}
            <Form.Group as={Row} className="mb-3">
              <Col sm="6">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Col>

              <Col sm="6">
                <Form.Label>Password</Form.Label>
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

            {/* address field 2 */}
            <Form.Group as={Row} className="mb-3" controlId="addressTwo">
              <Form.Label>Address</Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  placeholder="Apartment, studio, or floor"
                />
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
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>

              <Col sm="2">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>

            {/* address field 2 */}
            <Form.Group as={Row} className="mb-3" controlId="addressTwo">
              <Col sm="12">
                <Form.Check inline label="Check me out " type="checkbox" />
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

export default MultipleColumnForm;
