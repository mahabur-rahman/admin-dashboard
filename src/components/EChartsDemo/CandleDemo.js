import React from "react";
// Echarts
import ReactEcharts from "echarts-for-react";

const CandleDemo = () => {
  //Chart style
  const style = {
    height: "60vh",
    width: "100%",
  };

  //Chart options
  const option = {
    xAxis: {
      data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
    },
    yAxis: {},
    series: [
      {
        type: "candlestick",
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
        ],
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} style={style} type="candlestick" />
    </>
  );
};

export default CandleDemo;
