import React, { useState } from "react";
// scss
import "./alert.scss";
// react bootstrap
import { Alert } from "react-bootstrap";

const Separator = () => {
  const [data, setData] = useState([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]);

  // delete individually

  const handleDelete = (idx) => {
    setData(data.filter((item, id) => id !== idx));
  };

  return (
    <>
      {data.map((variant, idx) => (
        <Alert
          key={idx}
          variant={variant}
          onClose={() => handleDelete(idx)}
          dismissible
        >
          <h4 className={`fw-bold text-${variant}`}>
            <span className="text-capitalize">{variant}</span> Heading
          </h4>
          <p>
            Et suscipit deserunt earum itaque dignissimos recusandae dolorem
            qui. Molestiae rerum perferendis laborum. Occaecati illo at
            laboriosam rem molestiae sint.
          </p>
          <hr />
          <p>
            Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.
          </p>
        </Alert>
      ))}
    </>
  );
};

export default Separator;
