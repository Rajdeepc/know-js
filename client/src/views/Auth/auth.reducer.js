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

const INITIAL_STATE = {
  isLoggedIn: undefined,
  isRegistrationSuccess: false,
  loginResponse: {},
  loginError: {},
  passwordUpdateError: {},
  isPasswordUpdated: false,
  isUserExists: undefined,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loginResponse: action.payload,
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loginError: action.payload,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case USER_REGISTERED_SUCCESS:
      return {
        ...state,
        isRegistrationSuccess: action.payload,
      };
    case USER_REGISTERED_FAILURE:
      return {
        ...state,
        isRegistrationSuccess: action.payload,
      };

    case GET_USER_EXISTS_SUCCESS:
      return {
        ...state,
        isUserExists: true
      };

    case GET_USER_EXISTS_FAILURE:
      return {
        ...state,
        isUserExists: false,
        passwordUpdateError: action.payload,
      };

    case UPDATE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        isUserExists: undefined,
        isPasswordUpdated: true,
      };

    case UPDATE_USER_PASSWORD_FAILURE:
      return {
        ...state,
        isPasswordUpdated: false,
        passwordUpdateError: action.payload,
      };

    case CLEAR_USER_STATUS:
      return {
        ...state,
        isUserExists: undefined
      }

    case CLEAR_ALL_ERRORS:
      return {
        ...state,
        loginError: {},
      };

    default:
      return state;
  }
};

export default AuthReducer;
