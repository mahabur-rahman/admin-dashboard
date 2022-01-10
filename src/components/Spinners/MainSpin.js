import React from "react";
// scss
import "./spinners.scss";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import BorderSpin from "./BorderSpin";
import GrowingSpin from "./Growing";
import Colors from "./Colors";
import GrowColors from "./GrowColors";
import AlignmentSpin from "./Alignment";
import Sizes from "./Sizes";
import SpinButton from "./ButtonsSpin";

const MainSpin = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* spinners */}
          <h3 className="mb-0 alert_title px-1">Spinners</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Spinners
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <BorderSpin />
                </Col>

                <Col xl={12} className="my-4">
                  <Colors />
                </Col>

                <Col xl={12}>
                  <AlignmentSpin />
                </Col>

                <Col xl={12} className="my-4">
                  <SpinButton />
                </Col>
              </Row>
            </Col>

            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <GrowingSpin />
                </Col>

                <Col xl={12} className="my-4">
                  <GrowColors />
                </Col>

                <Col xl={12}>
                  <Sizes />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainSpin;
