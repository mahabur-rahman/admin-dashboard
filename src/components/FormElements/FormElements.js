import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import GeneralForm from "./General";
import AdvanceElement from "./AdvanceElem";

const FormElements = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* spinners */}
          <h3 className="mb-0 alert_title px-1">Form Elements</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Forms</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Elements
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6} className="my-3">
              <GeneralForm />
            </Col>

            {/* advance form elements */}
            <Col xl={6} className="my-3">
              <AdvanceElement />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FormElements;
