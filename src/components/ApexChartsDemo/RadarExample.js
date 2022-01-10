import React from "react";
import ReactApexChart from "react-apexcharts";

const RadarExample = () => {
  const state = {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },
     
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
    },
  };

  return (
    <>
      {/* bar chart */}

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radar"
        height={350}
      />
    </>
  );
};

export default RadarExample;
