import React, { useState } from "react";
// react bootstrap
import { Card } from "react-bootstrap";
// link
import { Link } from "react-router-dom";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const AdvanceContent = () => {
  const data = [
    {
      id: 1,
      title: "List group item heading",
      text: "Some placeholder content in a paragraph",
      otherText: "And some small print",
      url: "/",
      times: "3 days ago",
      active: "active",
      color: "white",
    },
    {
      id: 2,
      title: "List group item heading",
      text: "Some placeholder content in a paragraph",
      otherText: "And some small print",
      url: "/",
      times: "3 days ago",
      muted: "text-muted",
    },
    {
      id: 3,
      title: "List group item heading",
      text: "Some placeholder content in a paragraph",
      otherText: "And some small print",
      url: "/",
      times: "3 days ago",
      muted: "text-muted",
    },
  ];
  const [lists, setLists] = useState(data);

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <AlertHeading title={"Advanced Content"} />
          </Card.Title>

          <div class="list-group" style={{ fontSize: "1rem" }}>
            {lists.map((list) => {
              const {
                id,
                title,
                text,
                otherText,
                url,
                times,
                active,
                muted,
                color,
              } = list;
              return (
                <Link
                  key={id}
                  to={url}
                  class={`list-group-item list-group-item-action ${active}`}
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class={`mb-1 text-${color}`}>{title}</h5>
                    <small>{times}</small>
                  </div>
                  <p class="mb-1">{text}</p>
                  <small className={`${muted}`}>{otherText}</small>
                </Link>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default AdvanceContent;
