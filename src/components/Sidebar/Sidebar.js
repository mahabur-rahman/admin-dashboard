import React from "react";
import Dashboard from "../Dashboard/Dashboard";
// scss
import "./sidebar.scss";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <>
      <section
        id="sidebar"
        className={`${isSidebarOpen ? "mySidenav openSideNav" : "mySidenav"}`}
      >
        <Dashboard />
      </section>
    </>
  );
};

export default Sidebar;
