import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const state = {
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
  };

  return (
    <>
      {/* Radial Bar Chart */}

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={350}
      />
    </>
  );
};

export default RadialChart;
