import {
  USER_REGISTERED_SUCCESS,
  USER_REGISTERED_FAILURE,
} from "./register.action.types";

const INITIAL_STATE = {
  isRegistrationSuccess: false,
};

const RegisterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTERED_SUCCESS:
      return {
        ...state,
        isRegistrationSuccess: action.payload
      }
    case USER_REGISTERED_FAILURE:
      return {
        ...state,
        isRegistrationSuccess: action.payload
      }
    default:
        return state
  }
};


export default RegisterReducer
