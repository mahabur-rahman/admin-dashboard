import React, { useState } from "react";
// react bootstrap
import { Table } from "react-bootstrap";

const NonBorder = () => {
  // table  data
  const titleData = [
    {
      id: 1,
      label: "#",
      no: "1",
      name: "Brandon Jacob",
      pos: "Designer",
      age: "28",
      date: "2016-05-25",
    },
    {
      id: 2,
      label: "Name",
      no: "2",
      name: "Bridie Kessler",
      pos: "Developer",
      age: "35",
      date: "2014-12-05",
    },
    {
      id: 3,
      label: "Position",
      no: "3",
      name: "Ashleigh Langosh",
      pos: "Finance",
      age: "45",
      date: "2011-08-12",
    },
    {
      id: 4,
      label: "Age",
      no: "4",
      name: "Angus Grady",
      pos: "HR",
      age: "34",
      date: "2012-06-11",
    },
    {
      id: 5,
      label: "Start Date",
      no: "5",
      name: "Raheem Lehner",
      pos: "Dynamic Division Officer",
      age: "47",
      date: "2011-04-19",
    },
  ];
  const [headData, setHeadData] = useState(titleData);

  return (
    <>
      <Table className="table-borderless">
        <thead>
          <tr>
            {headData.map((e) => {
              return <th key={`${e.id}`}>{`${e.label}`}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {headData.map((e) => {
            const { id, name, no, pos, age, date } = e;
            return (
              <tr key={id}>
                <td>
                  <strong>{no}</strong>
                </td>
                <td>{name}</td>
                <td>{pos}</td>
                <td>{age}</td>
                <td>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default NonBorder;
