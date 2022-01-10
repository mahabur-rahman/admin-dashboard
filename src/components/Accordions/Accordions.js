import React from "react";
// scss
import "./accordions.scss";
// react bootstrap
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
// link
import { Link } from "react-router-dom";
// comp
import IndividualAccordion from "./IndividualAccordion";

const AccordionPage = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4 declare_accordion">
        <Container fluid>
          {/* Accordion page */}
          <h3 className="mb-0 alert_title px-1">Accordion</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Accordion
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col xl={6} className="my-3">
              <Card className="shadow-sm">
                <Card.Body>
                  {/* alert heading comp */}
                  <Card.Title>
                    <AlertHeading title={"Default Accordion"} />
                  </Card.Title>
                  {/* accordion   */}
                  <IndividualAccordion
                    num={"0"}
                    label={"Accordion Item #1"}
                    boldText={"This is the first item's accordion body."}
                    simpleText={
                      "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "
                    }
                    colorText={".accordion-body"}
                    simpleTextTwo={
                      ", though the transition does limit overflow."
                    }
                  />
                  <IndividualAccordion
                    num={"1"}
                    label={"Accordion Item #2"}
                    boldText={"This is the first item's accordion body."}
                    simpleText={
                      "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "
                    }
                    colorText={".accordion-body"}
                    simpleTextTwo={
                      ", though the transition does limit overflow."
                    }
                  />
                  <IndividualAccordion
                    num={"2"}
                    label={"Accordion Item #3"}
                    boldText={"This is the first item's accordion body."}
                    simpleText={
                      "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "
                    }
                    colorText={".accordion-body"}
                    simpleTextTwo={
                      ", though the transition does limit overflow."
                    }
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} className="my-3">
              <Card className="shadow-sm">
                <Card.Body>
                  {/* alert heading comp */}
                  <Card.Title>
                    <AlertHeading title={"Accordion without outline borders"} />
                  </Card.Title>
                  {/* accordion   */}
                  <IndividualAccordion
                    num={"0"}
                    label={"Accordion Item #1"}
                    boldText={""}
                    simpleText={
                      "Placeholder content for this accordion, which is intended to demonstrate the "
                    }
                    colorText={".accordion-flush"}
                    simpleTextTwo={
                      " class. This is the first item's accordion body."
                    }
                  />
                  <IndividualAccordion
                    num={"1"}
                    label={"Accordion Item #2"}
                    boldText={""}
                    simpleText={
                      "Placeholder content for this accordion, which is intended to demonstrate the "
                    }
                    colorText={".accordion-flush"}
                    simpleTextTwo={
                      " class. This is the first item's accordion body."
                    }
                  />
                  <IndividualAccordion
                    num={"2"}
                    label={"Accordion Item #3"}
                    boldText={""}
                    simpleText={
                      "Placeholder content for this accordion, which is intended to demonstrate the "
                    }
                    colorText={".accordion-flush "}
                    simpleTextTwo={
                      " class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
                    }
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AccordionPage;
