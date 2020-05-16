import React, { useState, useEffect } from "react";
import {
  NavDropdown,
  FormControl,
  Form,
  Nav,
  InputGroup,
  Button,
  Navbar,
  Modal,
  DropdownButton,
  Dropdown,
  Image
} from "react-bootstrap";
import {JSLinks} from "../../utils/constants";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction, clearAllErrors } from "../../views/Auth/auth.action";
import "./navbar.scss";
import { FaRegUserCircle, FaAlignLeft } from "react-icons/fa";
import { FiLogIn, FiUser } from "react-icons/fi";
import { AiOutlineLogin, AiOutlineBell } from "react-icons/ai";
import { DiJavascript } from "react-icons/di";
import AuthConnectedComponent from "../../views/Auth/Auth.component";
import { jslogo } from '../../assets/images/images';
import { getProfileData } from "../../components/Sidebar/sidebar.action";
import SearchBar from '../SearchBar/SearchBar';

const NavbarComponent = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    props.clearAllErrors();
    setShow(true);
  };

  const logout = () => {
    props.logoutAction();
  };


  useEffect(() => {
    if (props.authResponseObj && props.authResponseObj.isLoggedIn) {
      setShow(false);
      props.getProfileData(props.authResponseObj.loginResponse.email)
    }
  }, [ props.authResponseObj.isLoggedIn]);
  


  return (
    <>
      <Navbar expand="lg" className="navbar-js">
        <Navbar.Brand href="#home">
          <span>
            <span className="navbar-logo"><img src={jslogo} alt=""/></span><span>For Everyone</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="search-nav ml-auto">
          <SearchBar />
        </Nav>
        <Nav className="ml-auto sign-in">
          {!props.authResponseObj.isLoggedIn ? (
            <Button variant="outline-primary" onClick={handleShow} ><FiUser size={20} />SIGN IN </Button> 
          ) : (
            <>
              <Nav.Item>
                <AiOutlineBell size={20} />
              </Nav.Item>
              <Nav.Item>
                <FaRegUserCircle size={20} />
              </Nav.Item>

              <NavDropdown
                title={`${props.authResponseObj.loginResponse.email}`}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Nav>
      </Navbar>
      {/* // login modal */}
      <Modal show={show} onHide={handleClose} size="md" backdrop="static">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <AuthConnectedComponent/>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <strong>
              {props.authResponseObj.loginError &&
                props.authResponseObj.loginError.error}
            </strong>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  authResponseObj: state.AuthReducer,
});

const NavbarConnectedComponent = connect(mapStateToProps, {
  logoutAction,
  clearAllErrors,
  getProfileData
})(NavbarComponent);

export default NavbarConnectedComponent;
