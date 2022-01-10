import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import LineDemo from "./LineChart";
import BarDemo from "./BarChart";
import PieExample from "./PieExample";
import DoughNutChart from "./DoughNutChart";
import RadarChart from "./RadarChart";
import PolarAreaChart from "./PolarAreaChart";
import StackedBarChart from "./StackedBarChart";
import BubbleChart from "./BubbleChart";

const DemoCharts = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          {/* Form validation */}
          <h3 className="mb-0 alert_title px-1">Chart.js</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Charts</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Chart.js
            </Breadcrumb.Item>
          </Breadcrumb>

          {/* line para */}

          <p>
            Chart.JS Examples. You can check the
            <Link to="/" className="text-primary mx-1">
              official website
            </Link>
            for more examples.
          </p>

          <Row>
            {/* line chart */}
            <Col xl={6} className="my-3">
              <LineDemo />
            </Col>

            {/* bar chart */}
            <Col xl={6} className="my-3">
              <BarDemo />
            </Col>

            {/* Pie chart */}
            <Col xl={6} className="my-3">
              <PieExample />
            </Col>

            {/* Doughnut Chart */}
            <Col xl={6} className="my-3">
              <DoughNutChart />
            </Col>

            {/* Radar Chart */}
            <Col xl={6} className="my-3">
              <RadarChart />
            </Col>

            {/* polar area Chart */}
            <Col xl={6} className="my-3">
              <PolarAreaChart />
            </Col>

            {/* Stacked Bar Chart */}
            <Col xl={6} className="my-3">
              <StackedBarChart />
            </Col>

            {/* Bubble Chart */}
            <Col xl={6} className="my-3">
              <BubbleChart />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DemoCharts;
