import React from "react";
// react bootstrap
import { Card, Form, Button, Row, Col } from "react-bootstrap";
// comp
import AlertHeading from "../../AlertHeading/AlertHeading";

const NoLabels = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"No Labels / Placeholders as labels Form"} />
          </Card.Title>
          {/* horizontal form elements */}
          <Form>
            {/* text field */}
            <Form.Group as={Row} className="mb-3" controlId="text">
              <Col sm="12">
                <Form.Control type="text" placeholder="Your Name" />
              </Col>
            </Form.Group>

            {/* group field */}
            <Form.Group as={Row} className="mb-3">
              <Col sm="6">
                <Form.Control type="email" placeholder="Email" />
              </Col>

              <Col sm="6">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            {/* address field */}
            <Form.Group as={Row} className="mb-3">
              <Col sm="12">
                <Form.Control type="text" placeholder="Address" />
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

export default NoLabels;
