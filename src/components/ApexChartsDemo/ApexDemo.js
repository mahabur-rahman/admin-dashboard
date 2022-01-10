import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// comp
import ApexLine from "./ApexLine";
import AreaChart from "./AreaChart";
import ColumnChart from "./ColumnChart";
import BarChartDemo from "./BarChartDemo";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";
import RadarChart from "./RadarChart";
import PolarAreaDemo from "./PolarAreaDemo";
import RadialBarChart from "./RadialBarChart";
import BubbleChart from "./BubbleChart";

const ApexDemo = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Form validation */}
          <h3 className="mb-0 alert_title px-1">ApexCharts</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Charts</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              ApexCharts
            </Breadcrumb.Item>
          </Breadcrumb>

          {/* line para */}

          <p>
            ApexCharts Examples. You can check the
            <Link to="/" className="text-primary mx-1">
              official website
            </Link>
            for more examples.
          </p>

          <Row>
            <Col xl={6}>
              <Row>
                {/* line chart */}
                <Col xl={12}>
                  <ApexLine />
                </Col>

                {/* column chart */}
                <Col xl={12} className="my-4">
                  <ColumnChart />
                </Col>

                {/* Pie chart */}
                <Col xl={12}>
                  <PieChart />
                </Col>

                {/* Radar chart */}
                <Col xl={12} className="my-4">
                  <RadarChart />
                </Col>

                {/* Radial bar chart */}
                <Col xl={12}>
                  <RadialBarChart />
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Row>
                {/* Area chart */}
                <Col xl={12}>
                  <AreaChart />
                </Col>

                {/* bar chart */}
                <Col xl={12} className="my-4">
                  <BarChartDemo />
                </Col>

                {/* donut chart */}
                <Col xl={12}>
                  <DonutChart />
                </Col>

                {/* polar area chart */}
                <Col xl={12} className="my-4">
                  <PolarAreaDemo />
                </Col>

                {/* Bubble chart */}
                <Col xl={12}>
                  <BubbleChart />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ApexDemo;
