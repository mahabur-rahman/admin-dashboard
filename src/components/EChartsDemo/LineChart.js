import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import LineDemo from "./LineDemo";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import VerticalBar from "./VerticalBar";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";
import RadarChartDemo from "./RaderChartDemo";
import PolarAreaChart from "./PolarAreaChart";
import CandleStick from "./CandleStick";
import BubbleChart from "./BubbleChart";

const LineChartMain = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          <h3 className="mb-0 alert_title px-1">ECharts</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Charts</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              ECharts
            </Breadcrumb.Item>
          </Breadcrumb>

          {/* line para */}

          <p>
            ECharts Examples. You can check the
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

            {/* Area chart */}
            <Col xl={6} className="my-3">
              <AreaChart />
            </Col>

            {/* bar chart */}
            <Col xl={6} className="my-3">
              <BarChart />
            </Col>

            {/* vertical bar chart */}
            <Col xl={6} className="my-3">
              <VerticalBar />
            </Col>

            {/* Pie chart */}
            <Col xl={6} className="my-3">
              <PieChart />
            </Col>

            {/* donut chart */}
            <Col xl={6} className="my-3">
              <DonutChart />
            </Col>

            {/* Radar chart */}
            <Col xl={6} className="my-3">
              <RadarChartDemo />
            </Col>

            {/* polar area chart */}
            <Col xl={6} className="my-3">
              <PolarAreaChart />
            </Col>

            {/* Candle stick chart */}
            <Col xl={6} className="my-3">
              <CandleStick />
            </Col>

            {/* Bubble chart */}
            <Col xl={6} className="my-3">
              <BubbleChart />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LineChartMain;
