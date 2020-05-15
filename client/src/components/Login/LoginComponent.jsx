import React, { useState, useEffect } from "react";
import { Form, Modal, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginAction, clearUserStatus } from "../../views/Auth/auth.action";
import { Link } from "react-router-dom";
import "./login.scss";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdArrowBack } from "react-icons/md";
import { emailRegEx } from "../../utils/commonUtil";
import "../../views/Auth/auth.scss";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";



const LoginComponent = (props) => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetPasswordPanel, setShowResetPasswordPanel] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    props.clearUserStatus();
    setShow(true);
  };

  // useEffect(() => {
  //   if (!props.loginResponse.isUserExists) {
  //     setShow(true);
  //   }
  // }, [props.loginResponse.isUserExists]);

  /** check for different error messages */

  useEffect(() => {
    if (props.loginResponse && props.loginResponse.error) {
      clearInputFields();
      alert(props.loginResponse.error); //TODO
    }
  }, [props.loginResponse]);

  const clearInputFields = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
      let formObj = {
        email,
        password,
      };
      props.loginAction(formObj);
    }
    setValidated(true);
  };

  const onEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const goBackToLogin = () => {};

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={onEmailInputChange}
          />
          <FiUser />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={onPasswordInputChange}
          />
          <RiLockPasswordLine />
          <Row>
            <Col>
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Col>
            <Col className="text-right">
              <Link onClick={handleShow}>Forgot Password?</Link>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Login
        </Button>
        <Button variant="outline-danger" type="reset">
          Reset
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose} size="md" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm justify-content-center">
            <Link onClick={handleClose}><MdArrowBack size={20}/></Link>
            Forgot Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="auth-modal">
          <div class="forgot-component">
            <h4>
            Just enter the email you signed up with and we'll let you reset it.
            </h4>
            <ResetPasswordForm />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  loginResponse: state.AuthReducer.isLoggedIn,
});

const LoginConnectedComponent = connect(mapStateToProps, {
  loginAction,
  clearUserStatus,
})(LoginComponent);

export default LoginConnectedComponent;
