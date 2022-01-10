import React from "react";
// react bootstrap
import { Tab, Row, Col, Nav } from "react-bootstrap";

const VertPill = () => {
  const textOne =
    " Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.";

  const textTwo =
    " Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta. ";

  const textThree =
    " Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor. ";

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column"
              style={{ fontSize: "1rem" }}
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className="pb-3" style={{ fontSize: "1rem" }}>
              <Tab.Pane eventKey="first">{textOne}</Tab.Pane>
              <Tab.Pane eventKey="second">{textTwo}</Tab.Pane>
              <Tab.Pane eventKey="third">{textThree}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default VertPill;
