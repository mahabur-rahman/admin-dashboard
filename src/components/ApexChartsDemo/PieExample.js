import React from "react";
import ReactApexChart from "react-apexcharts";

const PieExample = () => {
  const state = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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
        type="pie"
        width={"100%"}
      />
    </>
  );
};

export default PieExample;
