import { USER_LOGIN_SUCCESS, USER_LOGGED_OUT, USER_LOGIN_FAILURE } from "./login.action.types";

const INITIAL_STATE = {
  isLoggedIn: false,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false
      }

    default:
      return state;
  }
};


export default LoginReducer