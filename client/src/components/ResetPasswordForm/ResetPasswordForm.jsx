import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { validateUserEmailAction ,updatePasswordAction} from "../../views/Auth/auth.action";
import { connect } from "react-redux";
import {RiLockPasswordLine} from "react-icons/ri";
import './resetpassword.scss';

const ResetPasswordForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateUser = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
      props.validateUserEmailAction(email);
    }
    setValidated(true);
  };


  const updatePassword = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
      let formObj = {
        email,
        newPassword
      };
      props.updatePasswordAction(email,newPassword);
    }
    setValidated(true);
  };





  const onEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordInputChange = (event) => {
    setNewPassword(event.target.value)
  }


  const onPasswordConfirmInputChange = (event) => {
    setConfirmPassword(event.target.value)
  }


  return (
    <>
    {!props.isPasswordUpdated.isUserExists ? 
      <Form noValidate validated={validated} onSubmit={validateUser}>
        <Form.Group controlId="formValidateUserEmail">
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
        <Button variant="primary" type="submit" size="lg" block>
          RESET
        </Button>
      </Form>

      :

      <Form noValidate validated={validated} onSubmit={updatePassword}>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={onPasswordInputChange}
          />
          <RiLockPasswordLine />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
            onChange={onPasswordConfirmInputChange}
          />
          <RiLockPasswordLine />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Change Password
        </Button>
      </Form>
}
    </>
  );
};

const mapStateToProps = (state) => ({
  isPasswordUpdated: state.AuthReducer
});

const ResetPasswordFormComponent = connect(mapStateToProps, {
  validateUserEmailAction,
  updatePasswordAction
})(ResetPasswordForm);

export default ResetPasswordFormComponent;
