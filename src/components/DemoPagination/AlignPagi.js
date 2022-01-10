import React from "react";
// react bootstrap
import { Pagination } from "react-bootstrap";

const AlignPagi = () => {
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
      <div className="mb-4 mx-3 align_pag" style={{ fontSize: "1rem" }}>
        <Pagination size="sm">{items}</Pagination>
        <br />
        <Pagination className="justify-content-center">{items}</Pagination>
        <br />
        <Pagination size="lg" className="justify-content-end">
          {items}
        </Pagination>
      </div>
    </>
  );
};

export default AlignPagi;
