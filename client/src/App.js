import React, { Suspense } from "react";
import Routes from "./routes.js";
import { Row, Col, Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar/Navbar";
import { withRouter } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

const App = ({ location }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
        <Row noGutters>
          <Col sm="2">
            <SideBar />
          </Col>
          <Col sm="10" className="scroll-container">
            <Suspense fallback={<div>Loading....</div>}>
              <Routes />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(App);
