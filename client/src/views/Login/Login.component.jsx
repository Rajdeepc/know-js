import React from "react";
import PropTypes from "prop-types";
import { Tabs,Tab } from "react-bootstrap";
import RegisterComponent from '../../components/RegisterComponent';
import LoginComponent from '../../components/LoginComponent'


Login.propTypes = {};

PropTypes.defaultProps = {};

export default function Login() {
  return (
    <div>
      <Tabs defaultActiveKey="register" id="uncontrolled-tab-example">
        <Tab eventKey="register" title="Register">
            <RegisterComponent/>
        </Tab>
        <Tab eventKey="login" title="Login">
            <LoginComponent/>
        </Tab>
      </Tabs>
    </div>
  );
}
