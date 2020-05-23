import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGGED_OUT,
  CLEAR_ALL_ERRORS,
  GET_USER_EXISTS_SUCCESS,
  USER_REGISTERED_SUCCESS,
  USER_REGISTERED_FAILURE,
  GET_USER_EXISTS_FAILURE,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILURE,
  CLEAR_USER_STATUS
} from "../views/Auth/auth.action.types";
import AuthReducer from "../views/Auth/auth.reducer";

const initialState = {
  isLoggedIn: undefined,
  isRegistrationSuccess: false,
  loginResponse: {},
  loginError: {},
  passwordUpdateError: {},
  isPasswordUpdated: false,
  isUserExists: undefined,
};
describe("testing auth reducer", () => {
  it("should return the initial state", () => {
    expect(AuthReducer(undefined, {})).toEqual(initialState);
  });

  it("handles USER_LOGIN_SUCCESS", () => {
    expect(
      AuthReducer(initialState, {
        type: USER_LOGIN_SUCCESS,
        payload: {
          username: "john",
          password: "abc",
        },
      })
    ).toEqual({
      ...initialState,
      isLoggedIn: true,
      loginResponse: {
        username: "john",
        password: "abc",
      },
    });
  });

  it("handles USER_LOGIN_FAILURE", () => {
    expect(
      AuthReducer(initialState, {
        type: USER_LOGIN_FAILURE,
        payload: {
          error: "error",
        },
      })
    ).toEqual({
      ...initialState,
      isLoggedIn: false,
      loginError: {
        error: "error",
      },
    });
  });

  it("handles USER_LOGGED_OUT", () => {
    expect(
      AuthReducer(initialState, {
        type: USER_LOGGED_OUT,
      })
    ).toEqual({
      ...initialState,
      isLoggedIn: false,
    });
  });

  it("handles USER_REGISTERED_SUCCESS", () => {
    expect(
      AuthReducer(initialState, {
        type: USER_REGISTERED_SUCCESS,
        payload: {
          success: true,
        },
      })
    ).toEqual({
      ...initialState,
      isRegistrationSuccess: {
        success: true,
      },
    });
  });

  it("handles USER_REGISTERED_FAILURE", () => {
    expect(
      AuthReducer(initialState, {
        type: USER_REGISTERED_FAILURE,
        payload: {
          error: "registration failed",
        },
      })
    ).toEqual({
      ...initialState,
      isRegistrationSuccess: {
        error: "registration failed",
      },
    });
  });

  it("handles GET_USER_EXISTS_SUCCESS", () => {
    expect(
      AuthReducer(initialState, {
        type: GET_USER_EXISTS_SUCCESS,
        payload: {
          isExists: true,
        },
      })
    ).toEqual({
      ...initialState,
      isUserExists:true
    });
  });


  it("handles GET_USER_EXISTS_SUCCESS", () => {
    expect(
      AuthReducer(initialState, {
        type: GET_USER_EXISTS_FAILURE,
        payload: {
          error: 'user does not exists',
        },
      })
    ).toEqual({
      ...initialState,
      isUserExists:false,
      passwordUpdateError:{
        error: 'user does not exists',
      }
    });
  });

  it("handles UPDATE_USER_PASSWORD_SUCCESS", () => {
    expect(
      AuthReducer(initialState, {
        type: UPDATE_USER_PASSWORD_SUCCESS,
        payload: true
      })
    ).toEqual({
      ...initialState,
      isUserExists:undefined,
      isPasswordUpdated:true
    });
  });

  it("handles UPDATE_USER_PASSWORD_FAILURE", () => {
    expect(
      AuthReducer(initialState, {
        type: UPDATE_USER_PASSWORD_FAILURE,
        payload: {
            error: 'password update failed'
        }
      })
    ).toEqual({
      ...initialState,
      isPasswordUpdated:false,
      passwordUpdateError:{
        error: 'password update failed'
      }
    });
  });

  it("handles CLEAR_USER_STATUS", () => {
    expect(
      AuthReducer(initialState, {
        type: CLEAR_USER_STATUS
      })
    ).toEqual({
      ...initialState,
      isUserExists:undefined
    });
  });


  it("handles CLEAR_ALL_ERRORS", () => {
    expect(
      AuthReducer(initialState, {
        type: CLEAR_ALL_ERRORS
      })
    ).toEqual({
      ...initialState,
      loginError:{}
    });
  });


});
