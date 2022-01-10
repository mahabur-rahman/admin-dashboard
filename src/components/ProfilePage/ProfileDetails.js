import React from "react";
// scss
import "./profile.scss";
// react bootstrap
import { Card, Tabs, Tab } from "react-bootstrap";
// comp
import Overview from "./Overview";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import ChangePassword from "./ChagePassword";

// profile img
import editImg from "../../images/profile-img.jpg";

const ProfileDetails = () => {
  const aboutText =
    "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.";

  return (
    <>
      <section className="profile_details">
        <Card className="shadow-sm pt-4">
          <Card.Body>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Overview">
                <Overview
                  title={"About"}
                  text={aboutText}
                  titleTwo={"Profile Details"}
                />
              </Tab>
              <Tab eventKey="profile" title="Edit Profile">
                <EditProfile imgSrc={editImg} />
              </Tab>
              <Tab eventKey="settings" title="Settings">
                <Settings />
              </Tab>
              <Tab eventKey="password" title="Change Password">
                <ChangePassword />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default ProfileDetails;
