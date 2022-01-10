import React from "react";
// scss
import "./topselling.scss";
// react bootstrap
import { Image } from "react-bootstrap";
// icons
import { Link } from "react-router-dom";
// data
import { productTableHeading, tableRow } from "../../Data/Data";

const ProductList = () => {
  return (
    <>
      <table id="productTable" class="table table-borderless">
        <thead>
          <tr>
            {productTableHeading.map((heading) => {
              const {  label } = heading;
              return (
                <th key={Math.random()} className="main_title title_sm">
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableRow.map((data) => {
            const {  imgSrc, title, price, item, revenue, url } = data;
            return (
              <>
                <tr key={Math.random()}>
                  <th>
                    <Link to={url}>
                      <Image
                        src={imgSrc}
                        alt={title}
                        fluid
                        className="prod_img"
                      />
                    </Link>
                  </th>
                  <td className="pt-4">
                    <Link
                      to={url}
                      class="text-primary fw-bold title_text fnt_size"
                    >
                      {title}
                    </Link>
                  </td>
                  <td className="pt-4">{price}</td>
                  <td className="fw-bold pt-4">{item}</td>
                  <td className="pt-4">{revenue}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
