import React, { useState } from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global scss
import "./global.scss";
// react router dom
import { Switch, Route, withRouter } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Header from "./components/Navbar/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// footer
import Footer from "./components/Footer/Footer";
// comp
import Alert from "./components/Alerts/Alerts";
import AccordionPage from "./components/Accordions/Accordions";
import BadgePage from "./components/Badges/Badges";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import Buttons from "./components/Buttons/Buttons";
import Cards from "./components/Cards/Cards";
import MainCarousel from "./components/Carousels/MainCarousel";
import DemoLists from "./components/DemoLists/MainLists";
import DemoModals from "./components/DemoModals/MainModal";
import MainTabs from "./components/Tabs/MainTabs";
import MainPagination from "./components/DemoPagination/MainPagi";
import DemoProgress from "./components/ProgressDemo/DemoProgress";
import MainSpin from "./components/Spinners/MainSpin";
import DemoTooltip from "./components/Tooltips/Demo";
import FormElements from "./components/FormElements/FormElements";
import MainLayout from "./components/FormElements/FormLayouts/MainLayouts";
import MainEditor from "./components/FormElements/FormEditors/MainEditor";
import ValidateForm from "./components/FormValidation/ValidateForm";
import GeneralTable from "./components/GeneralTables/GeneralTable";
import DemoCharts from "./components/Charts/DemoCharts";
import ApexDemo from "./components/ApexChartsDemo/ApexDemo";
import LineChartMain from "./components/EChartsDemo/LineChart";
import AllIcons from "./components/BootstrapIcons/AllIcons";
import RemixIcons from "./components/RemixIcons/RemixIcons";
import BoxIcons from "./components/BoxIcons/BoxIcons";
import ProfilePage from "./components/ProfilePage/Profile";
import BasicFQ from "./components/FAQ/BasicFq";
import ContactInfo from "./components/ContactUs/ContactInfo";
import CreatAccount from "./components/CreactAccount/CreatAccount";
import Login from "./components/Login/Login";
import NotFound from "./components/ErrorPage/NotFound";
import BlankPage from "./components/BlackPage/BlankPage";
import FilteringTable from "./components/DataTable/FilteringTable";

const App = (props) => {
  // console.log(props.location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (props.location.pathname === "/register") {
    return (
      <>
        <Route exact path="/register" component={CreatAccount} />
      </>
    );
  } else if (props.location.pathname === "/login") {
    return (
      <>
        <Route exact path="/login" component={Login} />;
      </>
    );
  } else if (props.location.pathname === "/error-page") {
    return (
      <>
        <Route exact path="/error-page" component={NotFound} />;
      </>
    );
  }

  return (
    <>
      {/* header */}
      <Header
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      {/* sidebar */}
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <section
        id="main"
        className={`${isSidebarOpen ? "main openMain" : "main"}`}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/alerts" component={Alert} />
          <Route exact path="/accordions" component={AccordionPage} />
          <Route exact path="/badges" component={BadgePage} />
          <Route exact path="/breadcrumbs" component={BreadCrumbs} />
          <Route exact path="/buttons" component={Buttons} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/carousel-example" component={MainCarousel} />
          <Route exact path="/demo-lists" component={DemoLists} />
          <Route exact path="/demo-modals" component={DemoModals} />
          <Route exact path="/tabs" component={MainTabs} />
          <Route exact path="/pagination" component={MainPagination} />
          <Route exact path="/progress-example" component={DemoProgress} />
          <Route exact path="/spinners" component={MainSpin} />
          <Route exact path="/tooltips" component={DemoTooltip} />
          <Route exact path="/form-elements" component={FormElements} />
          <Route exact path="/form-layouts" component={MainLayout} />
          <Route exact path="/demo-editors" component={MainEditor} />
          <Route exact path="/validation" component={ValidateForm} />
          <Route exact path="/general-tables" component={GeneralTable} />
          <Route exact path="/data-table" component={FilteringTable} />
          <Route exact path="/chart-example" component={DemoCharts} />
          <Route exact path="/apex-charts" component={ApexDemo} />
          <Route exact path="/demo-echarts" component={LineChartMain} />
          <Route exact path="/bootstrap-icons" component={AllIcons} />
          <Route exact path="/remix-icons" component={RemixIcons} />
          <Route exact path="/box-icons" component={BoxIcons} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/faq" component={BasicFQ} />
          <Route exact path="/contact-us" component={ContactInfo} />
          <Route exact path="/blank-page" component={BlankPage} />
        </Switch>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};

export default withRouter(App);
