import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Container, Col, Row, Breadcrumb } from "react-bootstrap";
// comp
import Info from "./Info";
// img
import profileImg from "../../images/profile-img.jpg";
// comp
import ProfileDetails from "./ProfileDetails";

const ProfilePage = () => {
  return (
    <>
      <section id="declareAlert" className="py-5 mt-4">
        <Container fluid>
          <h3 className="mb-0 alert_title px-1">Profile</h3>
          <Breadcrumb className="px-1">
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread_item">
              <Link to="/">Users</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="bread_item active_color">
              Profile
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row className="gy-3 mt-3">
            <Col xl={4} lg={4}>
              <Info
                imgSrc={profileImg}
                name={"Kevin Anderson"}
                designation={"Web Designer"}
              />
            </Col>
            {/* tabs */}
            <Col xl={8} lg={8}>
              <ProfileDetails />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProfilePage;
