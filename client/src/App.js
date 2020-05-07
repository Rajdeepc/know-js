import React from "react";
import Routes from "./routes.js";
import { Row,Col,Container } from 'react-bootstrap'
import NavbarComponent from "./components/Navbar/Navbar";
import { withRouter } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar"
const App = ({ location }) => {
  return (
    <>
      
      <div>
      <Row>
        <Col>
          <SideBar />
        </Col>
        <Col sm="9" className="scroll-container">
          {location.pathname !== "/login" && <NavbarComponent />}
          <Routes />
        </Col>
        <Col sm="2">
          {/* <SideBar /> */}
        </Col>
      </Row>
      </div>
    </>
  );
};

export default withRouter(App);
