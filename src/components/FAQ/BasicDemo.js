import React from "react";
// scss
import "./faq.scss";
// react bootstrap
import { Card } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const BasicDemo = () => {
  const demoData = [
    {
      id: 1,
      label: " 1. Nisi ut ut exercitationem voluptatem esse sunt rerum? ",
      text: " Saepe perspiciatis ea. Incidunt blanditiis enim mollitia qu voluptates. Id rem nulla tenetur nihil in unde rerum. Quae consequatur placeat qui cumque earum eius omnis quos. ",
    },
    {
      id: 2,
      label: " 2. Reiciendis dolores repudiandae?  ",
      text: " Id ipsam non ut. Placeat doloremque deserunt quia tenetur inventore laboriosam dolores totam odio. Aperiam incidunt et. Totam ut quos sunt atque modi molestiae dolorem. ",
    },
    {
      id: 3,
      label: " 3. Qui qui reprehenderit ut est illo numquam voluptatem? ",
      text: " Enim inventore in consequuntur ipsam voluptatem consequatur beatae. Nostrum consequuntur voluptates et blanditiis. ",
    },
  ];
  return (
    <>
      <section className="faq">
        <Card className="shadow-sm px-2 tabs_border pb-4">
          <Card.Body>
            <Card.Title>
              <AlertHeading title={"Basic Questions"} />
            </Card.Title>
            {demoData.map((e) => {
              return (
                <>
                  <Card.Title className="mb-0 faq_title">{e.label}</Card.Title>
                  <Card.Text className="faq_text">{e.text}</Card.Text>
                </>
              );
            })}
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default BasicDemo;
