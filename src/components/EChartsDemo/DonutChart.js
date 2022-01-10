import React from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
import SearchEngine from "../WebsiteTraffic/SearchEngine";

const DonutChart = () => {
  return (
    <>
      <Card className="shadow-sm px-2 tabs_border">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Donut Chart"} />
          </Card.Title>
          {/* donut chart */}
          <SearchEngine />
        </Card.Body>
      </Card>
    </>
  );
};

export default DonutChart;
