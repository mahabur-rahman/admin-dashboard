import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import DefaultTab from "./DefaultTab";
import JustifyTab from "./JustifyTab";
import BorderTab from "./BorderTab";
import BorderJustifyTab from "./BorderTabJustify";
import PillTab from "./PillTab";
import VerticalTab from "./VerticalTab";

const MainTabs = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Tabs breadcrumb */}
          <h3 className="mb-0 alert_title px-1">Tabs</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Tabs
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            {/* Default Tabs */}
            <Col xl={6} className="my-3">
              <DefaultTab />
            </Col>

            {/* Justify Tabs */}
            <Col xl={6} className="my-3">
              <JustifyTab />
            </Col>

            {/* border tab */}
            <Col xl={6} className="my-3">
              <BorderTab />
            </Col>

            {/* border tab justify */}
            <Col xl={6} className="my-3">
              <BorderJustifyTab />
            </Col>

            {/* border tab justify */}
            <Col xl={6} className="my-3">
              <PillTab />
            </Col>

            {/* vertical pills tab */}
            <Col xl={6} className="my-3">
              <VerticalTab />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainTabs;
