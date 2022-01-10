import React from "react";
// react bootstrap
import { Tab, Row, Col, Nav } from "react-bootstrap";

const Pill = () => {
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
          <Col>
            <Nav variant="pills" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="first" style={{ fontSize: "1rem" }}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" style={{ fontSize: "1rem" }}>
                  Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" style={{ fontSize: "1rem" }}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p style={{ fontSize: "1rem" }}>{textOne}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p style={{ fontSize: "1rem" }}>{textTwo}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p style={{ fontSize: "1rem" }}>{textThree}</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Pill;
