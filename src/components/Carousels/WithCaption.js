import React, { useState } from "react";
// react bootstrap
import { Card, Carousel, Image } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";
// img
import slideImg1 from "../../images/slides-1.jpg";
import slideImg2 from "../../images/slides-2.jpg";
import slideImg3 from "../../images/slides-3.jpg";

const WithCaption = () => {
  const [data, setData] = useState([
    {
      id: 1,
      imgSrc: slideImg1,
      title: "First Slide",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 2,
      imgSrc: slideImg2,
      title: "Second Slide",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 3,
      imgSrc: slideImg3,
      title: "Third Slide",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ]);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"With captions"} />
          </Card.Title>

          {/* carousel */}

          <Carousel>
            {data.map((item) => {
              const { id, imgSrc, title, text } = item;
              return (
                <Carousel.Item key={id}>
                  <Image className="d-block w-100" src={imgSrc} alt={title} />
                  <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Card.Body>
      </Card>
    </>
  );
};

export default WithCaption;
