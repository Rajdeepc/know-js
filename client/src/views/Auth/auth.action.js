import Service from "../../utils/api";
import {
  USER_LOGIN_SUCCESS,
  CLEAR_ALL_ERRORS,
  USER_LOGGED_OUT,
  USER_LOGIN_FAILURE,
  USER_REGISTERED_SUCCESS,
  USER_REGISTERED_FAILURE,
  GET_USER_EXISTS_SUCCESS,
  GET_USER_EXISTS_FAILURE,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILURE,
  CLEAR_USER_STATUS
} from "./auth.action.types";

/**
 * @method loginAction
 * @param {*} loginObj
 */
const loginAction = (loginObj) => (dispatch) => {
  Service.loginUser(loginObj)
    .then((response) => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: err.response && err.response.data ? err.response.data : err,
      });
    });
};

/**
 * @method logoutAction
 */
const logoutAction = () => (dispatch) => {
  sessionStorage.removeItem("state");
  dispatch({
    type: USER_LOGGED_OUT,
  });
};

/**
 * @method registerUserAction
 * @param {*} formObj
 */

const registerUserAction = (formObj) => (dispatch) => {
  Service.registerUser(formObj)
    .then((response) => {
      dispatch({
        type: USER_REGISTERED_SUCCESS,
        payload: response,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_REGISTERED_FAILURE,
        payload: err.response && err.response.data ? err.response.data : err,
      });
    });
};

/**
 * @method clearAllErrors
 */
const clearAllErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ALL_ERRORS });
};

/**
 * @method validateUserEmailAction
 * @param {*} email
 */
const validateUserEmailAction = (email) => (dispatch) => {
  Service.validateUserEmail(email)
    .then((response) => {
      dispatch({
        type: GET_USER_EXISTS_SUCCESS,
        payload: response,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_EXISTS_FAILURE,
        payload: err.response && err.response.data ? err.response.data : err,
      });
    });
};

/**
 * @method updateUserPasswordAction
 * @param {*} email
 * @param {*} newPassword
 */
const updatePasswordAction = (email, newPassword) => (dispatch) => {
  Service.updateUserPassword(email, newPassword)
    .then((response) => {
      dispatch({
        type: UPDATE_USER_PASSWORD_SUCCESS,
        payload: response,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_PASSWORD_FAILURE,
        payload: err.response && err.response.data ? err.response.data : err,
      });
    });
};

const clearUserStatus = () => dispatch => {
  dispatch({ type: CLEAR_USER_STATUS})
}

export {
  loginAction,
  logoutAction,
  registerUserAction,
  clearAllErrors,
  validateUserEmailAction,
  updatePasswordAction,
  clearUserStatus
};
