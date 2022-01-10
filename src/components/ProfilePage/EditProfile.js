import React, { useState } from "react";
// react bootstrap
import { Col, Row, Image, Form, Button } from "react-bootstrap";
// icon
import { BsUpload, BsTrash } from "react-icons/bs";
import SubmitBtn from "./SubmitBtn";

const EditProfile = ({ imgSrc }) => {
  const editInfo = [
    {
      label: "Full Name",
      type: "text",
      value: "Kevin Anderson",
    },
    {
      label: "About",
      textarea: true,
      value:
        "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi ",
      gap: "gap",
    },
    { label: "Company", type: "text", value: "Lueilwitz, Wisoky and Leuschke" },
    { label: "Job", type: "text", value: "Web Designer" },
    { label: "Country", type: "text", value: "USA" },
    {
      label: "Address",
      type: "text",
      value: "dam Street, New York, NY 535022",
    },
    { label: "Phone", type: "text", value: "(436) 486-3538 x29071" },
    { label: "Email", type: "email", value: "k.anderson@example.com" },
    { label: "Twitter Profile", type: "text", value: "https://twitter.com/#" },
    {
      label: "Facebook Profile",
      type: "text",
      value: "https://facebook.com/#",
    },
    {
      label: "Instagram Profile",
      type: "text",
      value: "https://instagram.com/#",
    },
    {
      label: "Linkedin Profile",
      type: "text",
      value: "https://linkedin.com/#",
    },
  ];

  const [data, setData] = useState(editInfo);

  return (
    <>
      <div className="edit_profile_part">
        <Row>
          <Col xl={3} lg={3}>
            <div className="edit_profile_left">
              <div className="left_part">
                <h5 className="edit_label mb">Profile Image</h5>
                <ul>
                  {data.map((e) => (
                    <li
                      key={`${e.label}`}
                      className={`edit_label ${e.gap}`}
                    >{`${e.label}`}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={9} lg={9}>
            <div className="right_part">
              <Image src={imgSrc} alt={"Profile Picture"} fluid />
              <div className="editing_icon mt-2 mb-3">
                <span className="btn btn-primary btn-sm">
                  <BsUpload />
                </span>
                <span className="btn btn-danger btn-sm mx-1">
                  <BsTrash />
                </span>
              </div>
              <Form>
                {data.map((elem, i) => {
                  const { type, value, textarea } = elem;
                  return (
                    <>
                      {textarea ? (
                        <Form.Control
                          key={Math.random()}
                          as="textarea"
                          value={value}
                        />
                      ) : (
                        <Form.Control
                          className="my-3"
                          key={Math.random()}
                          type={type}
                          value={value}
                        />
                      )}
                    </>
                  );
                })}
              </Form>
            </div>
          </Col>
        </Row>
        {/* btn */}
        <SubmitBtn btnTitle={"Save Changes"} />
      </div>
    </>
  );
};

export default EditProfile;
