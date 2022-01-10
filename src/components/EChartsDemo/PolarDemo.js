import React from "react";
// Echarts
import ReactEcharts from "echarts-for-react";

const PolarDemo = () => {
  //Chart style
  const style = {
    height: "60vh",
    width: "100%",
  };

  //Chart options
  const option = {
       color: ["#5470C6", "#91CC75", "#FAC858", "#EE6666", "#73C0DE"],
    angleAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    radiusAxis: {},
    polar: {},
    series: [
      {
        type: "bar",
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: "polar",
        name: "A",
        stack: "a",
        emphasis: {
          focus: "series",
        },
      },
      {
        type: "bar",
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: "polar",
        name: "B",
        stack: "a",
        emphasis: {
          focus: "series",
        },
      },
      {
        type: "bar",
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: "polar",
        name: "C",
        stack: "a",
        emphasis: {
          focus: "series",
        },
      },
    ],
    legend: {
      show: true,
      data: ["A", "B", "C"],
    },
  };

  return (
    <>
      <ReactEcharts option={option} style={style} />
    </>
  );
};

export default PolarDemo;
