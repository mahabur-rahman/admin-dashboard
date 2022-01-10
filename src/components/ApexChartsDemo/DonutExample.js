import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutExample = () => {
  const state = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <>
      {/* bar chart */}

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </>
  );
};

export default DonutExample;
