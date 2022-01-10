import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Example from "./Example";

const DemoTooltip = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* spinners */}
          <h3 className="mb-0 alert_title px-1">Tooltips</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Tooltips
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={12} className="my-3">
              <Example />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DemoTooltip;
