import React, { Suspense,useState } from "react";
import Routes from "./routes.js";
import { Row, Col, Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar/Navbar";
import { withRouter } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

const App = (props) => {

  return (
    <>
      <div>
        <Container fluid>
        <Row>
          <Col sm="12">
            <NavbarComponent />
          </Col>
        </Row>
        </Container>
        <Row noGutters>
          <Col sm="2">
            <SideBar />
          </Col>
          <Col sm="10" className="scroll-container">
            <Suspense fallback={<div>Loading....</div>}>
            <div className="scroll-wrapper-padding">
              <Routes />
              </div>
            </Suspense>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default withRouter(App);
