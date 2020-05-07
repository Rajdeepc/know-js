import React from "react";
import PropTypes from "prop-types";
import RegisterComponent from '../../components/Register/RegisterComponent';
import LoginComponent from '../../components/Login/LoginComponent'
import './auth.scss'
import { background } from '../../assets/images/images';
import { connect } from 'react-redux'


const AuthComponent = (props) => {
  return (
    <div className="auth-wrapper">
        {props.isLoggedIn ? <RegisterComponent />
        : <LoginComponent/> }
    </div>
  );
}
AuthComponent.propTypes = {};

PropTypes.defaultProps = {};

const mapStateToProps = (state) => ({
  isLoggedIn : state.AuthReducer.isLoggedIn
})

const AuthConnectedComponent = connect(mapStateToProps, {

})(AuthComponent)

export default AuthConnectedComponent
