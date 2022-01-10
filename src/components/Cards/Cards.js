import React from "react";
// scss
import "./cards.scss";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
import CardWithImage from "./CardWithImage";
// comp
import DefaultCard from "./DefaultCard";
import WithHeaderFooter from "./WithHeaderFooter";
// img
import cardImg from "../../images/card.jpg";
import CardImgTop from "./CardImgTop";
import CardImgBottom from "./CardImgBottom";
import CardImgOverlay from "./CardImgOverlay";
import CardWithBtn from "./CardWithBtn";
import CardTreatment from "./CardTreatment";

const Buttons = () => {
  const cardText =
    "Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas. Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut. Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in. ";

  const cardTextTwo =
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

  const cardTextThree =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";

  const cardTextFour =
    "Some quick example text to build on the card title and make up the bulk.";

  const cardTextFive =
    "With supporting text below as a natural lead-in to additional content.";

  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Cards page */}
          <h3 className="mb-0 alert_title px-1">Cards</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Cards
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col xl={6}>
              <Row>
                <Col xl={12}>
                  {/* Default Cards */}
                  <DefaultCard title={"Default Card"} text={cardText} />
                </Col>
                {/* card with header and footer */}

                <Col xl={12}>
                  <WithHeaderFooter
                    headerText={"Header"}
                    cardTitle={"Card with header and footer"}
                    cardText={cardText}
                    footerText={"Footer"}
                  />
                </Col>

                <Col xl={12}>
                  <CardWithImage
                    imgSrc={cardImg}
                    cardTitle={"Card with an image on left"}
                    cardText={cardTextTwo}
                  />
                </Col>
              </Row>
            </Col>

            <Col xl={3}>
              <Row>
                <Col xl={12}>
                  <CardImgTop
                    imgSrc={cardImg}
                    cardTitle={"Card with an image on top"}
                    cardText={cardTextThree}
                  />
                </Col>

                <Col xl={12}>
                  <CardImgBottom
                    imgSrc={cardImg}
                    cardTitle={"Card with an image on bottom"}
                    cardText={cardTextThree}
                  />
                </Col>
              </Row>
            </Col>
            <Col xl={3}>
              <Row>
                <Col xl={12}>
                  <CardImgOverlay
                    imgSrc={cardImg}
                    cardTitle={"Card with an image overlay"}
                    cardText={cardTextFour}
                  />
                </Col>
                <Col xl={12}>
                  <CardWithBtn
                    imgSrc={cardImg}
                    title={"Card with titles, buttons, and links"}
                    subTitle={"Card subtitle"}
                    text={cardTextThree}
                    btnText={"Button"}
                    urlOne={"Card link"}
                    urlTwo={"Another link"}
                  />
                </Col>

                <Col xl={12}>
                  <CardTreatment
                    title={"Special title treatment"}
                    text={cardTextFive}
                    btnText={"Go Somewhere"}
                    disText={"Disabled"}
                    activeLinkText={"Active"}
                    urlOne={"/"}
                    urlTwo={"/"}
                    linkText={"Link"}
                  />
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
