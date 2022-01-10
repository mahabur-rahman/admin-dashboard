import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import BrowserDf from "./BrowserDf";
import Custom from "./Custom";
import TooltipForm from "./TooltipForm";

const ValidateForm = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Form validation */}
          <h3 className="mb-0 alert_title px-1">Form Validation</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Forms</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Validation
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <BrowserDf />
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <Custom />
                </Col>

                <Col xl={12} className="my-4">
                  <TooltipForm />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ValidateForm;
