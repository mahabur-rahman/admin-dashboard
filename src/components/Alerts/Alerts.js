import React from "react";
// scss
import "./alert.scss";
// react bootstrap
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
// link
import { Link } from "react-router-dom";
// comp
import AlertDismissibleExample from "./IndividualAlert";
import AlertFill from "./AlertFill";
import AlertWithIcon from "./AlertIcon";
import Separator from "./Separator";
import OutlinedAlert from "./Outlined";

const AlertPage = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Breadcrumb of alert page */}
          <h3 className="mb-0 alert_title px-1">Alerts</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Alerts
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Default"} />
                      </Card.Title>
                      <AlertDismissibleExample />
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={12} className="my-4">
                  {/* alert with icon column */}
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"With Icon"} />
                      </Card.Title>
                      <AlertWithIcon />
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={12}>
                  {/* alert outlined */}
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Outlined"} />
                      </Card.Title>
                      <OutlinedAlert />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Default Solid Color"} />
                      </Card.Title>
                      <AlertFill />
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={12} className="my-4">
                  {/* With Heading & Separator*/}
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* alert heading comp */}
                      <Card.Title>
                        <AlertHeading title={"With Heading & Separator"} />
                      </Card.Title>
                      <Separator />
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

export default AlertPage;
