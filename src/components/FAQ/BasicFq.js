import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Col, Row, Breadcrumb } from "react-bootstrap";
// comp
import BasicDemo from "./BasicDemo";
import DemoTwo from "./DemoTwo";
import DemoThree from "./DemoThree";
import DemoFour from "./DemoFour";

const BasicFQ = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          <h3 className="mb-0 alert_title px-1">Frequently Asked Questions</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Pages</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Frequently Asked Questions
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row className="gy-3 mt-3">
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <BasicDemo />
                </Col>

                <Col xl={12} className="my-4">
                  <DemoThree />
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <DemoTwo />
                </Col>

                <Col xl={12} className="my-4">
                  <DemoFour />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BasicFQ;
