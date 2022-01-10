import React from "react";
// scss
import "./navbar.scss";
// react router dom
import { Link } from "react-router-dom";

import { BsSearch, BsList } from "react-icons/bs";
// react bootstrap
import { Container, Row, Col, Image, Form } from "react-bootstrap";
// logo
import logo from "../../images/logo.png";

// components
import Notifications from "./Notification";
import Messages from "./Messages";
import Profiles from "./Profiles";

const Header = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <>
      <header id="header" className="fixed-top">
        <Container fluid>
          <Row>
            <Col xl={3} lg={3} md={3} sm={3} xs={3}>
              <Link to="/" className="brand_logo d-flex align-items-center">
                <Image src={logo} fluid alt="logo" />
                <h3 className="mb-0"> NiceAdmin</h3>
              </Link>
            </Col>
            <Col xl={9} lg={9} md={9} sm={9} xs={9}>
              <div className="right_part d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center form_div">
                  <span
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="bars"
                  >
                    <BsList />
                  </span>
                  <Form className="mt-1 mx-4">
                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />
                  </Form>
                  <span className="search_icon">
                    <BsSearch />
                  </span>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <Notifications />
                  <Messages />
                  <Profiles />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
