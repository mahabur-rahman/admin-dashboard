import React from "react";
// react bootstrap
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import BtnGroup from "./BtnGroup";
import BtnSize from "./BtnSize";
import BtnState from "./BtnState";
import BtnWihIcon from "./BtnWithIcon";
import DefaultBtn from "./DefaultBtn";
import OutlineBtn from "./OutlineBtn";
import RoundedBtn from "./RoundedBtn";

const Buttons = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4 breadcrumb_page">
        <Container fluid>
          {/* breadcrumb page */}
          <h3 className="mb-0 alert_title px-1">Buttons</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Buttons
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col xl={6}>
              <Row>
                {/* Default Buttons */}
                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Button heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Default Buttons"} />
                      </Card.Title>
                      {/* Button initialize */}
                      <DefaultBtn />
                    </Card.Body>
                  </Card>
                </Col>

                {/* Rounded Buttons */}
                <Col xl={12} className="my-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Rounded heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Rounded Buttons"} />
                      </Card.Title>
                      {/* Rounded Button initialize */}
                      <RoundedBtn />
                    </Card.Body>
                  </Card>
                </Col>

                {/* button with icon */}

                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/*  heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Icon Buttons"} />
                      </Card.Title>
                      {/*  Button initialize */}
                      <BtnWihIcon />
                    </Card.Body>
                  </Card>
                </Col>

                {/* Button Groups */}
                <Col xl={12} className="my-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/*  heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Button Groups"} />
                      </Card.Title>
                      {/*  Button initialize */}
                      <BtnGroup />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                {/* Outlined Buttons */}
                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/* Outlined heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Outline Buttons"} />
                      </Card.Title>
                      {/* Outlined Button initialize */}
                      <OutlineBtn />
                    </Card.Body>
                  </Card>
                </Col>

                {/* Button Sizes */}
                <Col xl={12} className="my-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/*  heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Button Sizes"} />
                      </Card.Title>
                      {/*  Button initialize */}
                      <BtnSize />
                    </Card.Body>
                  </Card>
                </Col>

                {/* Button States */}
                <Col xl={12}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      {/*  heading comp */}
                      <Card.Title>
                        <AlertHeading title={"Button States"} />
                      </Card.Title>
                      {/*  Button initialize */}
                      <BtnState />
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

export default Buttons;
