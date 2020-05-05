import React from "react";
import {
  NavDropdown,
  FormControl,
  Form,
  Nav,
  Button,
  Navbar,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logoutAction} from './Login/login.action'


const NavbarComponent = (props) => {



  const logout = () => {
    props.logoutAction()
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">JSLearn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
        <Nav className="ml-auto">
          {!props.loginResponse ? <Link to='/login'>Login</Link> :
          <>
          <NavDropdown title='My Courses' id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to='/profile'>Profile</Link>
          </NavDropdown.Item>
          <NavDropdown.Item onClick={logout}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
          <NavDropdown title={`Hi ${props.loginResponse.email}`} id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to='/profile'>Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Item onClick={logout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown> 
          </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};



const mapStateToProps = (state) => ({
  loginResponse: state.LoginReducer.isLoggedIn
})


const NavbarConnectedComponent = connect(mapStateToProps,{
  logoutAction
})(NavbarComponent)

export default NavbarConnectedComponent;
