import React, { useState } from "react";
import { Link } from "react-router-dom";

const BasicDemo = () => {
  const paginateData = [
    { id: 1, label: "Previous", url: "/" },
    { id: 2, label: "1", url: "/" },
    { id: 3, label: "2", url: "/" },
    { id: 4, label: "3", url: "/" },
    { id: 5, label: "Next", url: "/" },
  ];

  const [data, setData] = useState(paginateData);

  return (
    <>
      <nav className="mb-4 mx-3 basic_pagination">
        <ul class="pagination">
          {data.map((elem) => {
            const { id, label, url } = elem;
            return (
              <li class="page-item" key={id} style={{ fontSize: "1rem" }}>
                <Link to={url} class="page-link">
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

export default BasicDemo;
