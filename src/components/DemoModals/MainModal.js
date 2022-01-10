import React from "react";
// scss
import "./modals.scss";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import BasicModal from "./BasicModal";
import VerticalModal from "./VerticalModal";
import LaunchModal from "./LaunchModal";
import VariantModal from "./VariantModal";
import Scrolling from "./ScrollingModal";
import DisabledAnimation from "./DisabledModal";

const DemoModals = () => {
  const cardText =
    "Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page";

  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* lists breadcrumb */}
          <h3 className="mb-0 alert_title px-1">Modal</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Modal
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                {/* basic modal */}
                <Col xl={12}>
                  <BasicModal text={cardText} />
                </Col>

                {/* Launch modal  */}
                <Col xl={12}>
                  <LaunchModal />
                </Col>

                {/* scrolling modal  */}
                <Col xl={12}>
                  <Scrolling />
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                {/* vertically centered */}
                <Col xl={12}>
                  <VerticalModal />
                </Col>

                {/* Modal Sizes  */}
                <Col xl={12}>
                  <VariantModal />
                </Col>

                {/* disabled animation modal  */}
                <Col xl={12}>
                  <DisabledAnimation />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DemoModals;
