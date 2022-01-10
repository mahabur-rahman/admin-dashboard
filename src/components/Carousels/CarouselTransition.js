import React, { useState } from "react";
// react bootstrap
import { Card, Carousel, Image } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
// img
import slideImg1 from "../../images/slides-1.jpg";
import slideImg2 from "../../images/slides-2.jpg";
import slideImg3 from "../../images/slides-3.jpg";

const CarouselTransition = ({ cardText1, cardTextColor, cardTextOther }) => {
  const [data, setData] = useState([
    { id: 1, imgSrc: slideImg1 },
    { id: 2, imgSrc: slideImg2 },
    { id: 3, imgSrc: slideImg3 },
  ]);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Carousel with fade transition"} />
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>
            {cardText1} <span className="text-danger">{cardTextColor}</span>
            {cardTextOther}
          </Card.Text>

          {/* carousel */}

          <Carousel fade className="controls_only">
            {data.map((item) => {
              const { id, imgSrc } = item;
              return (
                <Carousel.Item key={id}>
                  <Image
                    className="d-block w-100"
                    src={imgSrc}
                    alt="Slide Item"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Card.Body>
      </Card>
    </>
  );
};

export default CarouselTransition;
