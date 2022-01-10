import React from "react";
// scss
import "./carousel.scss";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import SlidesOnly from "./SlidesOnly";
import WithControls from "./WithControls";
import WithIndicators from "./WithIndicators";
import WithCaption from "./WithCaption";
import CarouselTransition from "./CarouselTransition";

const MainCarousel = () => {
  const cardText1 = "Add";
  const cardTextColor = " .carousel-fade ";
  const cardTextOther =
    " to your carousel to animate slides with a fade transition instead of a slide. ";

  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* carousel breadcrumb */}
          <h3 className="mb-0 alert_title px-1">Carousel</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Carousel
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            {/* slides only */}
            <Col xl={6} className="my-3">
              <SlidesOnly />
            </Col>

            {/* with controls */}
            <Col xl={6} className="my-3">
              <WithControls />
            </Col>

            {/* with indicators */}
            <Col xl={6} className="my-3">
              <WithIndicators />
            </Col>

            {/* with caption */}
            <Col xl={6} className="my-3">
              <WithCaption />
            </Col>

            {/* Carousel with fade transition */}
            <Col xl={6} className="my-3">
              <CarouselTransition
                cardText1={cardText1}
                cardTextColor={cardTextColor}
                cardTextOther={cardTextOther}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainCarousel;
