import React from "react";
// scss
import "./breadcrumb.scss";
// react bootstrap
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import DynamicBreadTitle from "./DynamicBreadTitle";
import Centered from "./Centered";
import DifferentDividers from "./DifferentDividers";
import RightPosition from "./RightPosition";
import WithHomeIcon from "./BreadCrumbIcon";

const BreadCrumbs = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4 breadcrumb_page">
        <Container fluid>
          {/* breadcrumb page */}
          <h3 className="mb-0 alert_title px-1">Breadcrumbs</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Breadcrumbs
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* Default Breadcrumbs */}

                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Default Breadcrumbs"} />
                      </Card.Title>
                      {/* breadcrumb initialize */}
                      <DynamicBreadTitle
                        urlOne={"Home"}
                        urlTwo={"Library"}
                        urlThree={"Default"}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                {/* Centered Breadcrumb */}
                <Col xl={12} className="my-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Centered"} />
                      </Card.Title>
                      {/* breadcrumb initialize */}
                      <Centered
                        urlOne={"Home"}
                        urlTwo={"Library"}
                        urlThree={"Centered Position"}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                {/* Right Positioned */}

                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Right Positioned"} />
                      </Card.Title>
                      {/* breadcrumb initialize */}
                      <RightPosition
                        urlOne={"Home"}
                        urlTwo={"Library"}
                        urlThree={"Right Position"}
                      />
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={12} className="my-4">
                  {/* with home icon */}
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"With Home Icon"} />
                      </Card.Title>
                      {/* breadcrumb initialize */}
                      <WithHomeIcon urlTwo={"Library"} urlThree={"Default"} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                {/* Breadcrumbs with a page title  */}
                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Breadcrumbs with a page title"} />
                      </Card.Title>
                      {/* breadcrumb initialize */}
                      <DynamicBreadTitle
                        pageTitle={"Page Title"}
                        urlOne={"Home"}
                        urlTwo={"Components"}
                        urlThree={"Breadcrumbs"}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                {/* Different Dividers */}

                <Col xl={12} className="my-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading
                          title={"Breadcrumbs with different dividers"}
                        />
                      </Card.Title>
                      {/* breadcrumb initialize */}
                      <DifferentDividers
                        urlOne={"Home"}
                        urlTwo={"Library"}
                        urlThree={"Centered Position"}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BreadCrumbs;
