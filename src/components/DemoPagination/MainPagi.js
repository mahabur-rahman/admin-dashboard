import React from "react";
// scss
import "./pagination.scss";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Basic from "./Basic";
import PaginateIcon from "./PaginateIcon";
import Variety from "./Variety";
import DemoSizing from "./DemoSizing";
import AlignDemo from "./AlignDemo";

const MainPagination = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Tabs breadcrumb */}
          <h3 className="mb-0 alert_title px-1">Pagination</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Pagination
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* basic pagination */}
                  <Basic />
                </Col>

                <Col xl={12}>
                  {/* disabled and active state */}
                  <Variety />
                </Col>

                <Col xl={12}>
                  {/* alignment pagination */}
                  <AlignDemo />
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* with icon */}
                  <PaginateIcon />
                </Col>

                <Col xl={12}>
                  {/* sizing pagination */}
                  <DemoSizing />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainPagination;
