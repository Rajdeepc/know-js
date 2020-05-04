import React from "react";
import PropTypes from "prop-types";
import { Tabs,Tab,Col,Row,Image } from "react-bootstrap";
import RegisterComponent from '../../components/Register/RegisterComponent';
import LoginComponent from '../../components/Login/LoginComponent'
import './login.scss'
import { background } from '../../assets/images/images'
Login.propTypes = {};

PropTypes.defaultProps = {};

export default function Login() {
  return (
    <div className="login-wrapper">
    
    <div className="login-tabs">
      <Row noGutters>
        <Col sm={6}>
          <div>

          </div>
            <Image src={background} alt="" fluid/>
        </Col>
        <Col sm={6}>
        <Tabs defaultActiveKey="register" id="uncontrolled-tab-example">
        <Tab eventKey="register" title="Register">
            <RegisterComponent/>
        </Tab>
        <Tab eventKey="login" title="Login">
            <LoginComponent/>
        </Tab>
      </Tabs>
        </Col>
      </Row>
      
    </div>
    </div>
  );
}
