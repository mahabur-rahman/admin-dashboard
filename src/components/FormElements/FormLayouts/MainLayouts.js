import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import HorizontalForm from "./Horizontal";
import VerticalForm from "./VerticalForm";
import MultipleColumnForm from "./MutliColumnF";
import NoLabels from "./NoLabel";
import PlaceholderForm from "./PlacehoderForm";

const MainLayout = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* spinners */}
          <h3 className="mb-0 alert_title px-1">Form Layouts</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Forms</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Layouts
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* horizontal form */}
                  <HorizontalForm />
                </Col>

                <Col xl={12} className="my-4">
                  <MultipleColumnForm />
                </Col>
              </Row>
            </Col>

            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* vertical form */}
                  <VerticalForm />
                </Col>

                <Col xl={12} className="my-4">
                  <NoLabels />
                </Col>

                <Col xl={12}>
                  <PlaceholderForm />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainLayout;
