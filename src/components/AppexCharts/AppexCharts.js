import React from "react";
import ReactApexChart from "react-apexcharts";
// react bootstrap
import { Card, Dropdown } from "react-bootstrap";
// icons
import {
  BsThreeDots,
  BsCart,
  BsCurrencyDollar,
  BsPeople,
} from "react-icons/bs";

const ApxCharts = () => {
  const state = {
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 82, 56],
      },
      {
        name: "Revenue",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "Customers",
        data: [15, 11, 32, 18, 9, 24, 11],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <>
      <div className="filter_card mb-4">
        <Card className="shadow-sm mt-4">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between up_part pt-3">
              <Card.Title>
                Reports <span>/ Today</span>
              </Card.Title>
              <Dropdown>
                <Dropdown.Toggle id="dropdown">
                  <div className="three_dots">
                    <span>
                      <BsThreeDots />
                    </span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>Filter</Dropdown.Header>
                  <Dropdown.Item eventKey="2">Today</Dropdown.Item>
                  <Dropdown.Item eventKey="3">This Month</Dropdown.Item>
                  <Dropdown.Item eventKey="3">This Year</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Body>
          {/* line chart */}
          <div id="chart" style={{ height: "60vh" }}>
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="area"
              height={350}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default ApxCharts;
