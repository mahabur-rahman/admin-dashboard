import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import Default from "./Default";
import HeightProgress from "./HeightProgress";
import WithLabel from "./WithLabel";
import StrippedBg from "./StrippedBg";
import IndividualBg from "./IndividualBg";
import Animated from "./Animated";

const DemoProgress = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Tabs breadcrumb */}
          <h3 className="mb-0 alert_title px-1">Progress</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Progress
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* basic pagination */}
                  <Default />
                </Col>

                <Col xl={12} className="my-4">
                  {/* with label pagination */}
                  <WithLabel />
                </Col>

                <Col xl={12}>
                  {/* individual background */}
                  <IndividualBg />
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* hight pagination */}
                  <HeightProgress />
                </Col>

                <Col xl={12} className="my-4">
                  {/* stripped background */}
                  <StrippedBg />
                </Col>

                <Col xl={12}>
                  {/* individual background */}
                  <Animated />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DemoProgress;
