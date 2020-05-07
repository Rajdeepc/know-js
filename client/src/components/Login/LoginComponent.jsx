import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginAction } from "../../views/Auth/auth.action";
import { Link} from "react-router-dom";
import './login.scss';
import { FiUser } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { emailRegEx } from '../../utils/commonUtil'

const LoginComponent = (props) => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


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

  return (
    <div className="login-component">
      <h4>Login</h4>
      <p>Don't have an account? <Link to="">Create Your Account</Link></p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={onEmailInputChange}
          />
          <FiUser/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
           <RiLockPasswordLine/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="danger" type="reset">
          Reset
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginResponse: state.AuthReducer.isLoggedIn,
});

const LoginConnectedComponent = connect(mapStateToProps, {
  loginAction,
})(LoginComponent);

export default LoginConnectedComponent;
