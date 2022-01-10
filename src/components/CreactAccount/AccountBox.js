import React, { useState } from "react";
// scss
import "./register.scss";
// link
import { Link } from "react-router-dom";
// react bootstrap
import {
  Card,
  Col,
  Image,
  Form,
  Row,
  InputGroup,
  Button,
} from "react-bootstrap";
// logo
import logo from "../../images/logo.png";

const AccountBox = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <section id="registerAccount">
        <div className="text-center">
          <Link to="/" className="d-flex justify-content-center mb-2">
            {/* logo */}
            <Image
              src={logo}
              fluid
              alt={"Nice Admin"}
              className="register_logo"
            />
            <h4 className="logo_name">NiceAdmin</h4>
          </Link>
        </div>
        <Card className="px-3 pb-4">
          <Card.Body>
            <div className="text-center">
              <Card.Title className="reg_title mb-0">
                Create an Account
              </Card.Title>
              <Card.Text className="reg_text">
                Enter your personal details to create account
              </Card.Text>
            </div>
          </Card.Body>
          {/* validation form  */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
                <Form.Label>Your Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control type="text" placeholder="" required />
                  <Form.Control.Feedback type="invalid">
                    Please, enter your name!
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>Your Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control type="email" placeholder="" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Email adddress!
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="username">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control type="text" placeholder="" required />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control type="password" placeholder="" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter your password!
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3 d-flex">
              <Form.Check required feedbackType="invalid" />
              <p className="mx-2">
                I agree and accept the
                <Link to="/" className="text-primary mx-1 hover_text">
                  terms and <br /> conditions
                </Link>
              </p>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Create Account
              </Button>
            </div>
          </Form>
          <div>
            <p className="my-3 mb-0 login_text">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </Card>

        {/* card footer */}
        <div className="text-center my-3">
          <p className="mb-0">
            Designed by <Link to="/">BootstrapMade</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default AccountBox;
