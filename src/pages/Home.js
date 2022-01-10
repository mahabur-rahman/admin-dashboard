import React from "react";
// scss
import "../scss/home.scss";

// react bootstrap
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
// icons
import {
  BsThreeDots,
  BsCart,
  BsCurrencyDollar,
  BsPeople,
} from "react-icons/bs";

// comp
import BoxCard from "../components/BoxCard/BoxCard";
import ApxCharts from "../components/AppexCharts/AppexCharts";
import SalesDataTable from "../components/SalesDataTable/SalesDataTable";
import TopSelling from "../components/TopSelling/TopSelling";
import RecentActivity from "../components/RecentActivity/RecentActivity";
import BudgetReport from "../components/BudgetReport/BudgetReport";
import WebsiteTraffic from "../components/WebsiteTraffic/WebsiteTraffic";
import UpdateNews from "../components/NewsUpdate/NewsUpdate";

const Home = () => {
  return (
    <>
      <div id="homePage" className="pt-5 mt-3">
        <Container fluid>
          <div className="home_title">
            <h4>Dashboard</h4>
            <Breadcrumb>
              <Breadcrumb.Item href="#" className="fst_link">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row>
            <Col xl={8} lg={8} md={12}>
              <Row>
                {/* sales */}
                <Col xl={6} lg={6} md={6}>
                  <BoxCard
                    labelOne={"Sales"}
                    labelTwo={" | Today"}
                    icon1={<BsThreeDots />}
                    icon2={<BsCart />}
                    title={"145"}
                    percent={"12%"}
                    title2={"increase"}
                    currencyColor={"first_icon"}
                  />
                </Col>
                {/* Revenue */}
                <Col xl={6} lg={6} md={6}>
                  <BoxCard
                    labelOne={"Revenue"}
                    labelTwo={" | This Month"}
                    icon1={<BsThreeDots />}
                    icon2={<BsCurrencyDollar />}
                    title={"$3,264"}
                    percent={"8%"}
                    title2={"increase"}
                    currencyColor={"currency_icon"}
                  />
                </Col>
                {/* Customers */}
                <Col xl={12} lg={12} md={12}>
                  <BoxCard
                    labelOne={"Customers"}
                    labelTwo={" | This Year"}
                    icon1={<BsThreeDots />}
                    icon2={<BsPeople />}
                    title={"1244"}
                    percent={"12%"}
                    title2={"decrease"}
                    currencyColor={"person_icon"}
                    textColor={true}
                  />
                </Col>
                {/* Reports */}
                <Col xl={12}>
                  <ApxCharts />
                </Col>
                {/* sales data table */}
                <Col xl={12}>
                  <SalesDataTable />
                </Col>
                {/* Top Selling Product */}
                <Col xl={12}>
                  <TopSelling />
                </Col>
              </Row>
            </Col>
            {/* ----------right sidebar---------- */}
            <Col xl={4} lg={4} md={12}>
              {/* recent activity */}
              <RecentActivity />

              {/* Budget Report */}
              <BudgetReport />

              {/* website traffic */}
              <WebsiteTraffic />

              {/* update news */}
              <UpdateNews />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
