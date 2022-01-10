import React from "react";
// scss
import "./faq.scss";
// react bootstrap
import { Card, Accordion } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const DemoFour = () => {
  const accordionData = [
    {
      id: "1",
      label: "Assumenda doloribus est fugiat sint incidunt animi totam nisi?",
      text: " Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut maiores. Corrupti sed aut expedita fugit vero dolorem. Nemo rerum sapiente. A quaerat dignissimos.",
    },

    {
      id: "2",
      label: "Consequatur saepe explicabo odio atque nisi?",
      text: "Voluptates magni amet enim perspiciatis atque excepturi itaque est. Sit beatae animi incidunt eum repellat sequi ea saepe inventore. Id et vel et et. Nesciunt itaque corrupti quia ducimus. Consequatur maiores voluptatum fuga quod ut non fuga. ",
    },
    {
      id: "3",
      label: "Voluptates vel est fugiat molestiae rem sit eos sint?",
      text: "Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non. Doloremque sed voluptatem at in voluptas aliquid dolorum.",
    },
    {
      id: "4",
      label: "Ab ipsa cum autem voluptas doloremque velit?",
      text: "Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat corrupti non quo accusamus. Nemo qui quis harum enim sed. Aliquam molestias pariatur delectus voluptas quidem qui rerum id quisquam. Perspiciatis voluptatem voluptatem eos. Vel aut minus labore at rerum eos. ",
    },
    {
      id: "4",
      label:
        "Aliquam magni ducimus facilis numquam dolorum harum eveniet iusto?",
      text: "Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat corrupti non quo accusamus. Nemo qui quis harum enim sed. Aliquam molestias pariatur delectus voluptas quidem qui rerum id quisquam. Perspiciatis voluptatem voluptatem eos. Vel aut minus labore at rerum eos. ",
    },
  ];
  return (
    <>
      <section className="faq">
        <Card className="shadow-sm px-2 tabs_border pb-4">
          <Card.Body>
            <Card.Title>
              <AlertHeading title={"Dolore occaecati ducimus quam"} />
            </Card.Title>

            {/* accordion */}

            <Accordion>
              {accordionData.map((elem) => {
                const { id, label, text } = elem;
                return (
                  <Accordion.Item eventKey={id} key={id}>
                    <Accordion.Header>{label}</Accordion.Header>
                    <Accordion.Body>{text}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default DemoFour;
