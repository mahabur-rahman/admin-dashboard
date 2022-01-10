import React from "react";
// react bootstrap
import {
  Card,
  Form,
  Row,
  Col,
  FloatingLabel,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const AdvanceElement = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border" style={{ fontSize: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Advanced Form Elements"} />
          </Card.Title>
          {/* advance form elements */}
          <Form>
            {/* switch field */}
            <Form.Group as={Row} className="mb-3" controlId="Switches">
              <Form.Label column sm="2">
                Switches
              </Form.Label>
              <Col sm="10">
                <Form.Check
                  type="switch"
                  id="switchInput"
                  label="Default switch checkbox input"
                />
                <Form.Check
                  disabled
                  type="switch"
                  label="Checked switch checkbox input"
                  id="switchInput"
                />

                <Form.Check
                  disabled
                  checked
                  type="switch"
                  label="Checked switch checkbox input"
                  id="switchInput"
                />
              </Col>
            </Form.Group>

            {/* Range field */}
            <Form.Group as={Row} className="mb-3" controlId="ranges">
              <Form.Label column sm="2">
                Ranges
              </Form.Label>
              <Col sm="10">
                <Form.Label>Example range</Form.Label>
                <Form.Range />
              </Col>

              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Form.Label>Disabled range</Form.Label>
                <Form.Range disabled />
              </Col>

              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Form.Label>Min and max with steps</Form.Label>
                <Form.Range min="0" max="5" />
              </Col>
            </Form.Group>

            {/* floating label */}
            <Form.Group as={Row} className="mb-3" controlId="floating">
              <Form.Label column sm="2">
                Floating labels
              </Form.Label>
              <Col sm="10">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
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

                <FloatingLabel
                  controlId="floatingSelect"
                  label="Works with selects"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Form.Group>

            {/* Input Group */}
            <Form.Group as={Row} className="mb-3" controlId="inputField">
              <Form.Label column sm="2">
                Input groups
              </Form.Label>
              <Col sm="10">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    @example.com
                  </InputGroup.Text>
                </InputGroup>

                <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                  </InputGroup.Text>
                  <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <FormControl aria-label="Amount (to the nearest dollar)" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>With textarea</InputGroup.Text>
                  <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AdvanceElement;
