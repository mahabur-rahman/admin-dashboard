import React, { useState } from "react";
// react bootstrap
import { Card, Col } from "react-bootstrap";
// icon
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
// comp
import AlertHeading from "../AlertHeading/AlertHeading";

const AddressCard = () => {
  const infoData = [
    {
      id: 1,
      title: "Address",
      icon: <BsGeoAlt />,
      label: "A108 Adam Street,",
      text: "New York, NY 535022",
    },
    {
      id: 2,
      title: "Call Us",
      icon: <BsTelephone />,
      label: "+1 5589 55488 55",
      text: "+1 6678 254445 41",
    },
    {
      id: 3,
      title: "Email Us",
      icon: <BsEnvelope />,
      label: "info@example.com,",
      text: "contact@example.com",
    },
    {
      id: 4,
      title: "Open Hours",
      icon: <BsClock />,
      label: "Monday - Friday",
      text: "9:00AM - 05:00PM",
    },
  ];

  const [data, setData] = useState(infoData);

  return (
    <>
      {data.map((card) => {
        const { id, icon, title, label, text } = card;
        return (
          <Col xl={6} lg={6} md={6} sm={6} key={id} className="my-3 box_card">
            <Card className="shadow px-2 pb-4 border-0">
              <Card.Body>
                <span style={{ fontSize: "38px", color: "#4154f1" }}>
                  {icon}
                </span>
                <Card.Title className="mb-0" style={{ fontSize: "20px" }}>
                  <AlertHeading title={title} />
                </Card.Title>
                <Card.Text style={{ fontSize: "14px" }} className="mb-0">
                  {label}
                </Card.Text>
                <Card.Text style={{ fontSize: "14px" }}>{text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default AddressCard;
