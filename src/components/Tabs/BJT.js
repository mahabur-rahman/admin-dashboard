import React, { useState } from "react";
// react bootstrap
import { Tabs, Tab } from "react-bootstrap";

const BJT = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Home",
      text: "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
      keys: "home",
    },
    {
      id: 2,
      title: "Profile",
      text: "Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.",
      keys: "profile",
    },
    {
      id: 3,
      title: "Contact",
      text: "Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis  magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.",
      keys: "contact",
    },
  ]);

  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-evenly"
        style={{ fontSize: "1rem" }}
      >
        {data.map((elem) => {
          const { id, title, text, keys } = elem;
          return (
            <Tab eventKey={keys} title={title} key={id}>
              <p style={{ fontSize: "1rem" }}>{text}</p>
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
};

export default BJT;
