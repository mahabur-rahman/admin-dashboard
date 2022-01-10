import React from "react";
import ReactApexChart from "react-apexcharts";

const LineExample = () => {
  const state = {
    series: [
      {
        name: "Sales",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
      //   {
      //     name: "Revenue",
      //     data: [11, 32, 45, 32, 34, 52, 41],
      //   },
      //   {
      //     name: "Customers",
      //     data: [15, 11, 32, 18, 9, 24, 11],
      //   },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        // text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  return (
    <>
      {/* line chart */}

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </>
  );
};

export default LineExample;
