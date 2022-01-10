import React from "react";
// Echarts
import ReactEcharts from "echarts-for-react";

const SearchEngine = () => {
  //Chart style
  const style = {
    height: "60vh",
    width: "100%",
  };
  //Chart options
  const option = {
    color: ["#5470C6", "#91CC75", "#FAC858", "#EE6666", "#73C0DE"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "18",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 1048,
            name: "Search Engine",
          },
          {
            value: 735,
            name: "Direct",
          },
          {
            value: 580,
            name: "Email",
          },
          {
            value: 484,
            name: "Union Ads",
          },
          {
            value: 300,
            name: "Video Ads",
          },
        ],
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} style={style} />
    </>
  );
};

export default SearchEngine;
