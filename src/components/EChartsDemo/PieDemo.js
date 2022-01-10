import React from "react";
// Echarts
import ReactEcharts from "echarts-for-react";

const PieDemo = () => {
  //Chart style
  const style = {
    height: "60vh",
    width: "100%",
  };

  //Chart options
  const option = {
    color: ["#5470C6", "#91CC75", "#FAC858", "#EE6666", "#73C0DE"],
    title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} style={style} />
    </>
  );
};

export default PieDemo;
