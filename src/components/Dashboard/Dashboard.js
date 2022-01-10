import React from "react";
// scss
import "./dashboard.scss";
// react bootstrap
import { Container, Accordion } from "react-bootstrap";
// link
import { NavLink } from "react-router-dom";
// icon
import {
  BsGrid,
  BsMenuButtonWide,
  BsJournalText,
  BsLayoutTextWindowReverse,
  BsBarChartLine,
  BsGem,
} from "react-icons/bs";
// data
import {
  pageListData,
  componentsData,
  formsData,
  tablesData,
  chartsData,
  iconsData,
} from "../../Data/Data";

const Dashboard = () => {
  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <>
      <section id="sidebarContent">
        <Container>
          <ul>
            <li className="nav-link list_ml active_title">
              <NavLink to="/">
                <span className="same_icon">
                  <BsGrid />
                </span>
                <span
                  className="title_heading
                sub_menu"
                >
                  Dashboard
                </span>
              </NavLink>
            </li>

            <li className="nav-link">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="same_icon">
                      <BsMenuButtonWide />
                    </span>
                    <span
                      className="title_heading
                    sub_menu"
                    >
                      Components
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {componentsData.map((elem) => {
                        const { id, icon, title, url } = elem;
                        return (
                          <li key={id} className="nav-link">
                            <NavLink
                              to={url}
                              // onMouseEnter={onHover}
                              // onMouseLeave={onHover}
                            >
                              <span className="same_icon">
                                <span className="circle_icon">
                                  {icon}
                                  {/* {hover ? icon2 : icon} */}
                                </span>
                              </span>
                              <span
                                className="title_heading
                              sub_menu"
                              >
                                {title}
                              </span>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>

            <li className="nav-link">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="same_icon">
                      <BsJournalText />
                    </span>
                    <span
                      className="title_heading
                    sub_menu"
                    >
                      Forms
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {formsData.map((data) => {
                        const { id, icon, url, title } = data;
                        return (
                          <li key={id} className="nav-link">
                            <NavLink to={url}>
                              <span className="same_icon">
                                <span className="circle_icon">{icon}</span>
                              </span>
                              <span
                                className="title_heading
                              sub_menu"
                              >
                                {title}
                              </span>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li className="nav-link">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="same_icon">
                      <BsLayoutTextWindowReverse />
                    </span>
                    <span
                      className="title_heading
                    sub_menu"
                    >
                      Tables
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {tablesData.map((data) => {
                        const { id, icon, title, url } = data;
                        return (
                          <li key={id} className="nav-link">
                            <NavLink to={url}>
                              <span className="same_icon">
                                <span className="circle_icon">{icon}</span>
                              </span>
                              <span
                                className="title_heading
                              sub_menu"
                              >
                                {title}
                              </span>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li className="nav-link">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="same_icon">
                      <BsBarChartLine />
                    </span>
                    <span
                      className="title_heading
                    sub_menu"
                    >
                      Charts
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {chartsData.map((data) => {
                        const { id, icon, title, url } = data;
                        return (
                          <li key={id} className="nav-link">
                            <NavLink to={url}>
                              <span className="same_icon">
                                <span className="circle_icon">{icon}</span>
                              </span>
                              <span
                                className="title_heading
                              sub_menu"
                              >
                                {title}
                              </span>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li className="nav-link">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="same_icon">
                      <BsGem />
                    </span>
                    <span
                      className="title_heading
                    sub_menu"
                    >
                      Icons
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {iconsData.map((data) => {
                        const { id, icon, title, url } = data;
                        return (
                          <li key={id} className="nav-link">
                            <NavLink to={url}>
                              <span className="same_icon">
                                <span className="circle_icon">{icon}</span>
                              </span>
                              <span
                                className="title_heading
                              sub_menu"
                              >
                                {title}
                              </span>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            {/* pages list */}
            <div className="page_list">
              <span className="text">PAGES</span>
              <ul>
                {pageListData.map((list) => {
                  const { id, icon, title, url } = list;
                  return (
                    <li key={id} className="nav-link mx-3">
                      <NavLink to={url}>
                        <span className="same_icon">
                          <span>{icon}</span>
                        </span>
                        <span
                          className="title_heading
                        sub_menu"
                        >
                          {title}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
