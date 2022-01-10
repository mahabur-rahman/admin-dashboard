import React from "react";
// scss
import "./faq.scss";
// react bootstrap
import { Card, Accordion } from "react-bootstrap";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const DemoThree = () => {
  const accordionData = [
    {
      id: "1",
      label: "Debitis adipisci eius?",
      text: " Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut maiores. Corrupti sed aut expedita fugit vero dolorem. Nemo rerum sapiente. A quaerat dignissimos.",
    },
    {
      id: "2",
      label: "Omnis fugiat quis repellendus?",
      text: "In minus quia impedit est quas deserunt deserunt et. Nulla non quo dolores minima fugiat aut saepe aut inventore. Qui nesciunt odio officia beatae iusto sed voluptatem possimus quas. Officia vitae sit voluptatem nostrum a.",
    },
    {
      id: "3",
      label: "Et occaecati praesentium aliquam modi incidunt?",
      text: "Voluptates magni amet enim perspiciatis atque excepturi itaque est. Sit beatae animi incidunt eum repellat sequi ea saepe inventore. Id et vel et et. Nesciunt itaque corrupti quia ducimus. Consequatur maiores voluptatum fuga quod ut non fuga. ",
    },
    {
      id: "4",
      label: "Quo unde eaque vero dolor quis ipsam?",
      text: "Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non. Doloremque sed voluptatem at in voluptas aliquid dolorum.",
    },
    {
      id: "5",
      label: "Natus sunt quo atque mollitia accusamus?",
      text: "Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat corrupti non quo accusamus. Nemo qui quis harum enim sed. Aliquam molestias pariatur delectus voluptas quidem qui rerum id quisquam. Perspiciatis voluptatem voluptatem eos. Vel aut minus labore at rerum eos. ",
    },
  ];
  return (
    <>
      <section className="faq">
        <Card className="shadow-sm px-2 tabs_border pb-4">
          <Card.Body>
            <Card.Title>
              <AlertHeading title={"Laborum dolorem quam porro"} />
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

export default DemoThree;
