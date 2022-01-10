import React from "react";
// Echarts
import ReactEcharts from "echarts-for-react";

const BarDemo = () => {
  //Chart style
  const style = {
    height: "60vh",
    width: "100%",
  };

  //Chart options
  const option = {
    color: ["#5470C6", "#91CC75"],
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} style={style} />
    </>
  );
};

export default BarDemo;
