import React, { useState } from "react";
import { Link } from "react-router-dom";
// react bootstrap
import { Pagination } from "react-bootstrap";

const Sizing = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="mb-4 mx-3 sizing_pag" style={{ fontSize: "1rem" }}>
        <Pagination size="sm">{items}</Pagination>
        <br />
        <Pagination>{items}</Pagination>
        <br />
        <Pagination size="lg">{items}</Pagination>
      </div>
    </>
  );
};

export default Sizing;
