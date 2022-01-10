import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import DefaultList from "./DefaultList";
import WithActiveDisabled from "./ActiveDisabled";
import LinkWithBtn from "./LinkWithBtn";
import CleanListGroup from "./CleanListGroup";
import ListWithIcons from "./WithIcons";
import CustomContent from "./CustomContent";
import NumberedList from "./Numbered";
import AdvanceContent from "./AdvanceContent";
import WithBadge from "./WithBadge";
import ContextualClasses from "./Contextual";
import CheckWithRadio from "./CheckboxWithRadio";

const DemoLists = () => {
  const text1 = "Add";
  const colorText = " .list-group-flush ";
  const otherText =
    "to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).";

  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* lists breadcrumb */}
          <h3 className="mb-0 alert_title px-1">List Group</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              List Group
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                {/* default lists */}
                <Col xl={12}>
                  <DefaultList />
                </Col>

                {/* link with btn */}
                <Col xl={12} className="my-4">
                  <LinkWithBtn />
                </Col>

                {/* list with icons */}
                <Col xl={12}>
                  <ListWithIcons />
                </Col>

                {/* Number list */}
                <Col xl={12} className="my-4">
                  <NumberedList />
                </Col>

                {/* with badge */}
                <Col xl={12}>
                  <WithBadge />
                </Col>

                {/* with contextual classes */}
                <Col xl={12} className="my-4">
                  <ContextualClasses />
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                {/* with active and disabled */}
                <Col xl={12}>
                  <WithActiveDisabled />
                </Col>

                {/* clean list group */}
                <Col xl={12} className="my-4">
                  <CleanListGroup
                    text1={text1}
                    colorText={colorText}
                    otherText={otherText}
                  />
                </Col>

                {/* With custom content */}
                <Col xl={12}>
                  <CustomContent />
                </Col>

                {/* advance content */}
                <Col xl={12} className="my-4">
                  <AdvanceContent />
                </Col>

                {/* check with radio */}
                <Col xl={12}>
                  <CheckWithRadio />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DemoLists;
