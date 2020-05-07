import React, { useState, useEffect } from "react";
import {
  NavDropdown,
  FormControl,
  Form,
  Nav,
  Button,
  Navbar,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction ,clearAllErrors} from "../../views/Auth/auth.action";
import "./navbar.scss";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLogin, AiOutlineBell } from "react-icons/ai";
import AuthConnectedComponent from "../../views/Auth/Auth.component";
import toast from '../Toast/Toast';



const NavbarComponent = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    props.clearAllErrors()
    setShow(true);
  }

  const logout = () => {
    props.logoutAction();
  };

  useEffect(() => {
    if (props.authResponseObj && props.authResponseObj.isLoggedIn) {
      setShow(false);
    }
  }, [props.authResponseObj]);

  return (
    <>
      <Navbar expand="lg" className="navbar-js">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav class="search-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search courses.."
              className="mr-sm-2"
            />
            <BsSearch />
          </Form>
        </Nav>
        <Nav className="ml-auto">
          {!props.authResponseObj.isLoggedIn ? (
            <Button>
              <AiOutlineLogin size={20} onClick={handleShow} />
            </Button>
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
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Body>
          <AuthConnectedComponent />
          <div>
            <strong>{props.authResponseObj.loginError && props.authResponseObj.loginError.error}</strong>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  authResponseObj: state.AuthReducer,
});

const NavbarConnectedComponent = connect(mapStateToProps, {
  logoutAction,
  clearAllErrors
})(NavbarComponent);

export default NavbarConnectedComponent;
