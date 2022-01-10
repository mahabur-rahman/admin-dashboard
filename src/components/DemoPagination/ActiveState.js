import React, { useState } from "react";
import { Link } from "react-router-dom";

const ActiveState = () => {
  const paginateData = [
    { id: 1, label: "Previous", url: "/", disabled: "disabled" },
    { id: 2, label: "1", url: "/" },
    { id: 3, label: "2", url: "/", active: "active" },
    { id: 4, label: "3", url: "/" },
    { id: 5, label: "Next", url: "/" },
  ];

  const [data, setData] = useState(paginateData);

  return (
    <>
      <nav className="mb-4 mx-3 active_pagination">
        <ul class="pagination">
          {data.map((elem) => {
            const { id, label, url, icon, disabled, active } = elem;
            return (
              <li
                class={`page-item ${disabled} ${active}`}
                key={id}
                style={{ fontSize: "1rem" }}
              >
                <Link to={url} class="page-link">
                  <span>{icon}</span>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default ActiveState;
