import React from "react";
// Echarts
import ReactEcharts from "echarts-for-react";

const AreaDemo = () => {
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
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        areaStyle: {},
      },
    ],
  };

  return (
    <>
      <ReactEcharts type="area" option={option} style={style} />
    </>
  );
};

export default AreaDemo;
