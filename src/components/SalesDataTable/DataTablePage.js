import React, { useState } from "react";
import "./salesTable.scss";
// icons
import { BsChevronDown } from "react-icons/bs";
import SortingIcon from "./SortingIcon";
// react bootstrap
import { Dropdown } from "react-bootstrap";

const DataTablePage = () => {
  const tableData = [
    {
      id: "3435",
      customer: "Angus Grady",
      products: "Ut voluptatem id earum et",
      price: 165,
      status: "approved",
    },
    {
      id: "2643",
      customer: "	Raheem Lehner",
      products: "Sunt similique distinctio",
      price: 47,
      status: "approved",
    },
    {
      id: "2643",
      customer: "Brandon Jacob",
      products: "At praesentium minu",
      price: 64,
      status: "approved",
    },
    {
      id: "2443",
      customer: "Bridie Kessler",
      products: "Blanditiis dolor omnis similique",
      price: 147,
      status: "pending",
    },
    {
      id: "2436",
      customer: "Bridie Kessler",
      products: "Blanditiis dolor omnis similique",
      price: 67,
      status: "rejected",
    },
  ];

  const [rowDto, setRowDto] = useState([...tableData]);
  const [allData, setAllData] = useState([...tableData]);
  const [loading, setLoading] = useState(false);

  const [srcTxt, setSrcTxt] = useState("");

  // sortable states
  // filter
  const [idOrder, setIdOrder] = useState("desc");
  const [customerOrder, setCustomerOrder] = useState("desc");
  const [productOrder, setProductOrder] = useState("desc");
  const [priceOrder, setPriceOrder] = useState("desc");

  const [status, setStatus] = useState("");
  //  search

  const searchData = (keywords) => {
    try {
      if (!keywords) {
        setRowDto(allData);
        return;
      }
      setLoading(true);
      const regex = new RegExp(keywords?.toLowerCase());
      let newData = allData?.filter(
        (item) =>
          regex.test(item?.customer?.toLowerCase()) ||
          regex.test(item?.price) ||
          regex.test(item?.products?.toLowerCase()) ||
          regex.test(item?.id?.toLowerCase()) ||
          regex.test(item?.status?.toLowerCase())
      );
      setRowDto(newData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setRowDto([]);
    }
  };

  // ascending & descending
  const commonSortByFilter = (filterType, property) => {
    const newRowData = [...allData];
    let modifyRowData = [];

    if (filterType === "asc") {
      modifyRowData = newRowData?.sort((a, b) => {
        if (a[property] > b[property]) return -1;
        return 1;
      });
    } else {
      modifyRowData = newRowData?.sort((a, b) => {
        if (b[property] > a[property]) return -1;
        return 1;
      });
    }
    setRowDto(modifyRowData);
  };

  return (
    <div id="tablesMain">
      <div className="d-flex align-items-center">
        <Dropdown className="sort_drop">
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <span>
              10
              <span className="mx-1 chevron_arrow fw-bold">
                <BsChevronDown />
              </span>
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/">5</Dropdown.Item>
            <Dropdown.Item href="/">10</Dropdown.Item>
            <Dropdown.Item href="/">15</Dropdown.Item>
            <Dropdown.Item href="/">20</Dropdown.Item>
            <Dropdown.Item href="/">25</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <span className="ms-xl-1 span_text"> entries per page</span>
      </div>

      {/*  table */}
      <div className="d-flex align-items-center justify-content-end">
        <div className="-mt-4">
          <input
            value={srcTxt}
            type="text"
            onChange={(e) => {
              // filterData(e.target.value, allData, setRowDto);
              searchData(e.target.value);
              setSrcTxt(e.target.value);
            }}
            placeholder="Search..."
            className="search_field"
          />
        </div>
      </div>

      <table className="table table-borderless datatable mt-3">
        <thead>
          <tr>
            <th scope="col">
              <div
                className="sortable d-flex align-items-center"
                onClick={() => {
                  setIdOrder(idOrder === "asc" ? "desc" : "asc");
                  commonSortByFilter(idOrder, "customer");
                }}
              >
                <span>#</span>
                <SortingIcon viewOrder={idOrder} />
              </div>
            </th>
            <th scope="col">
              <div
                className="sortable d-flex align-items-center"
                onClick={() => {
                  setCustomerOrder(customerOrder === "asc" ? "desc" : "asc");
                  commonSortByFilter(customerOrder, "customer");
                }}
              >
                <span>Customer</span>
                <SortingIcon viewOrder={customerOrder} />
              </div>
            </th>
            <th scope="col">
              <div
                className="sortable d-flex align-items-center"
                onClick={() => {
                  setProductOrder(productOrder === "asc" ? "desc" : "asc");
                  commonSortByFilter(productOrder, "customer");
                }}
              >
                <span>Product</span>
                <SortingIcon viewOrder={productOrder} />
              </div>
            </th>
            <th scope="col">
              <div
                className="sortable d-flex align-items-center"
                onClick={() => {
                  setPriceOrder(priceOrder === "asc" ? "desc" : "asc");
                  commonSortByFilter(priceOrder, "customer");
                }}
              >
                <span>Price</span>
                <SortingIcon viewOrder={priceOrder} />
              </div>
            </th>
            <th scope="col">
              <div
                className="sortable d-flex align-items-center"
                onClick={() => {
                  setStatus(status === "asc" ? "desc" : "asc");
                  commonSortByFilter(status, "customer");
                }}
              >
                <span>Status</span>
                <SortingIcon viewOrder={status} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowDto.map((item) => {
            return (
              <tr key={Math.random()}>
                <th scope="row"># {item.id}</th>
                <td>{item?.customer}</td>
                <td>
                  <span className="text-primary"> {item.products}</span>
                </td>
                <td>${item?.price}</td>
                <td>
                  {item.status === "pending" && (
                    <span className="badge bg-warning">{item.status}</span>
                  )}
                  {item.status === "approved" && (
                    <span className="badge bg-success">{item.status}</span>
                  )}
                  {item.status === "rejected" && (
                    <span className="badge bg-danger">{item.status}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DataTablePage;
