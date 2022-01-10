import React from "react";
// scss
import "./faq.scss";
// react bootstrap
import { Card, Accordion } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const DemoTwo = () => {
  const accordionData = [
    {
      id: "1",
      label: "Cumque voluptatem recusandae blanditiis?",
      text: " Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut maiores. Corrupti sed aut expedita fugit vero dolorem. Nemo rerum sapiente. A quaerat dignissimos.",
    },
    {
      id: "2",
      label: "Provident beatae eveniet placeat est aperiam repellat adipisci?",
      text: "In minus quia impedit est quas deserunt deserunt et. Nulla non quo dolores minima fugiat aut saepe aut inventore. Qui nesciunt odio officia beatae iusto sed voluptatem possimus quas. Officia vitae sit voluptatem nostrum a.",
    },
    {
      id: "3",
      label: "Minus aliquam modi id reprehenderit nihil?",
      text: "Voluptates magni amet enim perspiciatis atque excepturi itaque est. Sit beatae animi incidunt eum repellat sequi ea saepe inventore. Id et vel et et. Nesciunt itaque corrupti quia ducimus. Consequatur maiores voluptatum fuga quod ut non fuga. ",
    },
    {
      id: "4",
      label: "Quaerat qui est iusto asperiores qui est reiciendis eos et?",
      text: "Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non. Doloremque sed voluptatem at in voluptas aliquid dolorum.",
    },
    {
      id: "5",
      label: "Laboriosam asperiores eum?",
      text: "Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat corrupti non quo accusamus. Nemo qui quis harum enim sed. Aliquam molestias pariatur delectus voluptas quidem qui rerum id quisquam. Perspiciatis voluptatem voluptatem eos. Vel aut minus labore at rerum eos. ",
    },
  ];
  return (
    <>
      <section className="faq">
        <Card className="shadow-sm px-2 tabs_border pb-4">
          <Card.Body>
            <Card.Title>
              <AlertHeading title={"Deserunt ut unde corporis"} />
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

export default DemoTwo;
