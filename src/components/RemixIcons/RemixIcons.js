import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Breadcrumb } from "react-bootstrap";
import BootIcons from "../BootstrapIcons/BootIcons";

const RemixIcons = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          <h3 className="mb-0 alert_title px-1">Remix Icons</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Icons</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Remix
            </Breadcrumb.Item>
          </Breadcrumb>
          {/*  para */}
          <p style={{ fontSize: "1rem" }}>
            Use the following pattern to add the Remix icons to anywhere in your
            project. Replace the bold part with the below icon names. Check the
            <Link to="/" className="text-primary mx-1">
              Official website
            </Link>
            for more info.
          </p>
          <Row className="gy-3 mt-3">
            <BootIcons />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RemixIcons;
