import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import Default from "./Default";
import Tiny from "./Tiny";
import QuillBubble from "./QuillBubble";
import QuillFull from "./QullFull";

const MainEditor = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* spinners */}
          <h3 className="mb-0 alert_title px-1">Form Editors</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Forms</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Editors
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                {/* quill editor  */}
                <Col xl={12}>
                  <Default />
                </Col>

                {/* quill bubble editor  */}
                <Col xl={12} className="my-4">
                  <QuillBubble />
                </Col>

                {/* quill editor full  */}
                <Col xl={12}>
                  <QuillFull />
                </Col>
              </Row>
            </Col>

            <Col xl={6}>
              <Row>
                {/* TinyMCE Editor  */}
                <Col xl={12}>
                  <Tiny />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainEditor;
