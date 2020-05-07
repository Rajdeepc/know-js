import { USER_LOGIN_SUCCESS , CLEAR_ALL_ERRORS,USER_LOGGED_OUT,USER_LOGIN_FAILURE ,USER_REGISTERED_SUCCESS , USER_REGISTERED_FAILURE} from './auth.action.types';


const INITIAL_STATE = {
  isLoggedIn: undefined,
  isRegistrationSuccess: false,
  loginResponse:{},
  loginError:{}
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn:true,
        loginResponse: action.payload
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn:false,
        loginError: action.payload
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case USER_REGISTERED_SUCCESS:
      return {
        ...state,
        isRegistrationSuccess: action.payload
      };
    case USER_REGISTERED_FAILURE:
      return {
        ...state,
        isRegistrationSuccess: action.payload
      };
      case CLEAR_ALL_ERRORS: 
      return {
        ...state,
        loginError:{}
      }

    default:
      return state;
  }
};

export default AuthReducer;
