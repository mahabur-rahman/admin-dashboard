import React, { useState } from "react";
import { Link } from "react-router-dom";
// icon
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const WithIcon = () => {
  const paginateData = [
    { id: 1, icon: <FaAngleDoubleLeft />, url: "/" },
    { id: 2, label: "1", url: "/" },
    { id: 3, label: "2", url: "/" },
    { id: 4, label: "3", url: "/" },
    { id: 5, icon: <FaAngleDoubleRight />, url: "/" },
  ];

  const [data, setData] = useState(paginateData);

  return (
    <>
      <nav className="mb-4 mx-3">
        <ul class="pagination">
          {data.map((elem) => {
            const { id, label, url, icon } = elem;
            return (
              <li class="page-item" key={id} style={{ fontSize: "1rem" }}>
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

export default WithIcon;
