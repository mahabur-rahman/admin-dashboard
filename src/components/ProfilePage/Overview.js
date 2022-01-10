import React, { useState } from "react";
// react bootstrap
import { Row, Col } from "react-bootstrap";

const Overview = ({ title, text, titleTwo }) => {
  const profileData = [
    { label: "Full Name", info: "Kevin Anderson" },
    { label: "Company", info: "Lueilwitz, Wisoky and Leuschke", mt: "my-3" },
    { label: "Job", info: "Web Designer", mt: "my-3" },
    { label: "Country", info: "USA", mt: "my-3" },
    {
      label: "Address",
      info: "A108 Adam Street, New York, NY 535022",
      mt: "my-3",
    },
    { label: "Phone", info: "(436) 486-3538 x29071", mt: "my-3" },
    { label: "Email", info: "k.anderson@example.com", mt: "my-3" },
  ];

  const [info, setInfo] = useState(profileData);
  // console.log(info);

  return (
    <>
      <div>
        <h5 className="overview_title">{title}</h5>
        <p className="overview_text" style={{ fontSize: "14px" }}>
          {text}
        </p>
        <div className="profile_content">
          <h3 className="pro_heading">{titleTwo}</h3>
          <div className="main_part">
            <Row>
              <Col xl={3}>
                <div className="dynamic_profile_left">
                  <ul>
                    {info.map((d) => {
                      return (
                        <li
                          className={`dynamic_title ${d.mt}`}
                          key={Math.random()}
                        >{`${d.label}`}</li>
                      );
                    })}
                  </ul>
                </div>
              </Col>
              <Col xl={9}>
                <div className="dynamic_profile_right">
                  <ul>
                    {info.map((d) => {
                      return (
                        <li
                          className={`dynamic_ans ${d.mt}`}
                          key={Math.random()}
                        >{`${d.info}`}</li>
                      );
                    })}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
