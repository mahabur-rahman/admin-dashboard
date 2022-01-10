import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import DemoTable from "./DemoTable";

const FilteringTable = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4 general_table">
        <Container fluid>
          {/* Form validation */}
          <h3 className="mb-0 alert_title px-1">Data Tables</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Tables</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Data
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col xl={12}>
              {/* filtering table */}
              <DemoTable />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FilteringTable;
