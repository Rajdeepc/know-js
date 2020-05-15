import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUserAction } from "../../views/Auth/auth.action";
import toast from "../Toast/Toast";
import { AiOutlineMail } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import "./register.scss";
import { Link } from "react-router-dom";
const RegisterComponent = (props) => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  /** Check for valid scenario */
  useEffect(() => {
    if (props.registerResponse && props.registerResponse.success) {
      //TODO show toast and redirect user to login
      clearInputFields();
    }
  }, [props.registerResponse]);

  /** check for different error messages */

  useEffect(() => {
    if (props.registerResponse && props.registerResponse.error) {
      clearInputFields();
    }
  }, [props.registerResponse]);

  const clearInputFields = () => {
    setEmail("");
    setUserName("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      toast("Please check the errors");
    } else {
      let formObj = {
        email,
        username,
        password,
      };
      props.registerUserAction(formObj);
    }
    setValidated(true);
  };

  const onEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
  const onNameInputChange = (event) => {
    setUserName(event.target.value);
  };
  const onPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          onChange={onEmailInputChange}
        />
        <AiOutlineMail />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please provide a valid email address.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicUserName">
        <Form.Control
          type="text"
          placeholder="Enter UserName"
          required
          onChange={onNameInputChange}
        />
        <FiUser />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please provide a valid username.
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
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Register
      </Button>
      <Button variant="outline-danger" type="reset">
        Reset
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  registerResponse: state.AuthReducer.isRegistrationSuccess,
});

const RegisterConnectedComponent = connect(mapStateToProps, {
  registerUserAction,
})(RegisterComponent);

export default RegisterConnectedComponent;
