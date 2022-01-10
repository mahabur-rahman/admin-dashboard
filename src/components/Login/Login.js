import React from "react";

// react bootstrap
import { Container, Col, Row } from "react-bootstrap";
// comp
import LoginField from "./LoginField";

const Login = () => {
  return (
    <>
      <section className="py-4">
        <Container fluid>
          <Row>
            <Col xl={4} lg={6} md={6} sm={8} xs={12} className="my-3 mx-auto">
              <LoginField />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
