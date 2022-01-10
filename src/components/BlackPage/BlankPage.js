import React from "react";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
import Blank from "./Blank";

const BlankPage = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Breadcrumb of alert page */}
          <h3 className="mb-0 alert_title px-1">Blank Page</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Pages</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Blank
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col xl={6} lg={6} className="my-3">
              <Blank
                title={"Example Card"}
                text={
                  "This is an example page with no content. You can use it as a starter for your custom pages."
                }
              />
            </Col>
            <Col xl={6} lg={6} className="my-3">
              <Blank
                title={"Example Card"}
                text={
                  "This is an example page with no content. You can use it as a starter for your custom pages."
                }
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlankPage;
