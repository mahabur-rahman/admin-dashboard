import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Col, Row, Breadcrumb } from "react-bootstrap";
// comp
import AddressCard from "./AddressCard";
import MessageField from "./MessageField";

const ContactInfo = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          <h3 className="mb-0 alert_title px-1">Contact</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Pages</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Contact
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                <AddressCard />
              </Row>
            </Col>
            <Col xl={6} lg={12} className="my-3">
              <MessageField />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactInfo;
