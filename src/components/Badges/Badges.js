import React from "react";
// scss
import "./badges.scss";
// react bootstrap
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
// link
import { Link } from "react-router-dom";
// comp
import DefaultBadge from "./DefaultBadge";
import BorderBadge from "./BorderBadge";
import PillBadge from "./PillBadge";
import ButtonBadge from "./ButtonBadge";
import IconBadge from "./IconBadge";
import HeadingBadge from "./HeadingBadge";

const BadgePage = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Badge page */}
          <h3 className="mb-0 alert_title px-1">Badges</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Badges
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* Default Badges */}

                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Badge heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Default Badges"} />
                      </Card.Title>
                      {/* Badge initialize */}
                      <DefaultBadge />
                    </Card.Body>
                  </Card>
                </Col>
                {/* pill badges */}

                <Col xl={12} className="my-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Badge heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Pill Badges"} />
                      </Card.Title>
                      {/* Badge initialize */}
                      <PillBadge />
                    </Card.Body>
                  </Card>
                </Col>

                {/* icon badge */}
                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Badge heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Icon Badges"} />
                      </Card.Title>
                      {/* Badge initialize */}
                      <IconBadge />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* Border Badges */}

                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Badge heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Border Badges"} />
                      </Card.Title>
                      {/* Badge initialize */}
                      <BorderBadge />
                    </Card.Body>
                  </Card>
                </Col>
                {/* Button badges */}

                <Col xl={12} className="my-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Badge heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Button Badges"} />
                      </Card.Title>
                      {/* Badge initialize */}
                      <ButtonBadge />
                    </Card.Body>
                  </Card>
                </Col>

                {/* Heading Badge */}

                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Badge heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Heading Badges"} />
                      </Card.Title>
                      {/* Badge initialize */}
                      <HeadingBadge />
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

export default BadgePage;
