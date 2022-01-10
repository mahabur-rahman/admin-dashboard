import React from "react";
// scss
import "./generalTable.scss";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import Default from "./Default";
import Stripped from "./Stripped";
import DarkTable from "./DarkTable";
import HoverTable from "./HoverTable";
import ActiveTable from "./ActiveTable";
import BorderedTable from "./BorderedTable";
import WithoutBorder from "./WithoutBorder";
import VariantTable from "./VariantTable";
import SmallTable from "./SmallTable";

const GeneralTable = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4 general_table">
        <Container fluid>
          {/* Form validation */}
          <h3 className="mb-0 alert_title px-1">General Tables</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Tables</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              General
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={6}>
              <Row>
                {/* default table */}
                <Col xl={12}>
                  <Default />
                </Col>

                {/* dark table */}
                <Col xl={12} className="my-4">
                  <DarkTable />
                </Col>

                {/* active table */}
                <Col xl={12}>
                  <ActiveTable />
                </Col>

                {/* table without borders */}
                <Col xl={12} className="my-4">
                  <WithoutBorder />
                </Col>

                {/* table variants */}
                <Col xl={12}>
                  <VariantTable />
                </Col>
              </Row>
            </Col>

            <Col xl={6}>
              <Row>
                {/* Table with stripped rows */}
                <Col xl={12}>
                  <Stripped />
                </Col>

                {/* Table with hoverable rows */}
                <Col xl={12} className="my-4">
                  <HoverTable />
                </Col>

                {/* bordered table */}
                <Col xl={12}>
                  <BorderedTable />
                </Col>

                {/* small table */}
                <Col xl={12} className="my-4">
                  <SmallTable />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GeneralTable;
