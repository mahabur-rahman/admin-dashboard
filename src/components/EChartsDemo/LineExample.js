import React from "react";
// Echarts
import ReactEcharts from "echarts-for-react";

const LineExample = () => {
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
      boundaryGap: true,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} style={style} />
    </>
  );
};

export default LineExample;
