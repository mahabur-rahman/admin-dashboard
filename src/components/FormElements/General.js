import React from "react";
// react bootstrap
import { Card, Form, Button, Row, Col } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const GeneralForm = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"General Form Elements"} />
          </Card.Title>
          {/* general form elements */}
          <Form>
            {/* text field */}
            <Form.Group as={Row} className="mb-3" controlId="text">
              <Form.Label column sm="2">
                Text
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

            {/* Number field */}
            <Form.Group as={Row} className="mb-3" controlId="number">
              <Form.Label column sm="2">
                Number
              </Form.Label>
              <Col sm="10">
                <Form.Control type="number" placeholder="" />
              </Col>
            </Form.Group>

            {/* file field */}
            <Form.Group as={Row} className="mb-3" controlId="fileUpload">
              <Form.Label column sm="2">
                File Upload
              </Form.Label>
              <Col sm="10">
                <Form.Control type="file" placeholder="" />
              </Col>
            </Form.Group>

            {/* date field */}
            <Form.Group as={Row} className="mb-3" controlId="date">
              <Form.Label column sm="2">
                Time
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder="" />
              </Col>
            </Form.Group>

            {/* color picker */}
            <Form.Group as={Row} className="mb-3" controlId="exampleColorInput">
              <Form.Label column sm="2">
                Color Picker
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="color"
                  id="exampleColorInput"
                  defaultValue="#4154F1"
                  title="Choose your color"
                />
              </Col>
            </Form.Group>

            {/* text area */}
            <Form.Group as={Row} className="mb-3" controlId="exampleColorInput">
              <Form.Label column sm="2">
                Textarea
              </Form.Label>
              <Col sm="10">
                <Form.Control as="textarea" rows={3} />
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

            {/* select */}
            <Form.Group as={Row} className="mb-3" controlId="checkInput">
              <Form.Label column sm="2">
                Select
              </Form.Label>
              <Col sm="10">
                <Form.Select>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Form.Group>

            {/* multiple select */}
            {/* select */}
            <Form.Group as={Row} className="mb-3" controlId="checkInput">
              <Form.Label column sm="2">
                Multi Select
              </Form.Label>
              <Col sm="10">
                <Form.Select multiple>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Form.Group>
            {/* submit button */}
            <Form.Group as={Row} className="mb-3" controlId="submit">
              <Form.Label column sm="2">
                Submit Button
              </Form.Label>
              <Col sm="10">
                <Button type="submit" className="btn btn-primary">
                  Submit Form
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default GeneralForm;
