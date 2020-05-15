import React ,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import RegisterComponent from "../../components/Register/RegisterComponent";
import LoginComponent from "../../components/Login/LoginComponent";
import "./auth.scss";
import { background } from "../../assets/images/images";
import { connect } from "react-redux";

const AuthComponent = (props) => {

  const [loginState, setLoginState] = useState(false)

  const switchToLogin = () => {
    setLoginState(true)
  }


  const switchToRegister = () => {
    setLoginState(false)
  }




  return (
    <div className="auth-wrapper">
      {!loginState ? (
        <div className="register-component">
          <h4>Register</h4>
          <p>
            Already Registered? <a href="#" onClick={switchToLogin}>Sign In</a>
          </p>
          <RegisterComponent/>
        </div>
      ) : (
        <div class="login-component"> 
          <h4>Login</h4>
          <p>
            Don't have an account? <a href="#" onClick={switchToRegister}>Create Account</a>
          </p>
          <LoginComponent/>
        </div>
      )}
    </div>
  );
};
AuthComponent.propTypes = {};

PropTypes.defaultProps = {};

const mapStateToProps = (state) => ({
  isLoggedIn: state.AuthReducer.isLoggedIn,
});

const AuthConnectedComponent = connect(mapStateToProps, {})(AuthComponent);

export default AuthConnectedComponent;
