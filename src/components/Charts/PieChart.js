import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  type: "pie",
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const PieCharts = () => {
  return (
    <>
      <Pie data={data} width={"100%"} />
    </>
  );
};

export default PieCharts;
