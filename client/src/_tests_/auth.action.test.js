import { USER_LOGIN_SUCCESS,USER_LOGGED_OUT,USER_REGISTERED_SUCCESS,USER_REGISTERED_FAILURE } from "../views/Auth/auth.action.types";

import { loginAction,logoutAction,registerUserAction } from "../views/Auth/auth.action";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({});

const userObj = {
    name: 'John',
    password:'john'
}
describe("Testing loginAction()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get USER_LOGIN_SUCCESS", () => {
    mock.onPost("/auth").reply(200, {
      data: {
        name: "John",
      },
    });

    store.dispatch(loginAction(userObj))
    .then(() => {
      let expectedAction = [
        {
          type: USER_LOGIN_SUCCESS,
          payload: {
            data: {
              name: "John",
            },
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedAction);
    })
  })
});


describe('testing logoutAction()', () => {
  beforeEach(() => {
    store.clearActions()
  });
  it('should clear sessionStorage', () => {
    sessionStorage.removeItem("state");
    let expectedAction = [
      {
        type: USER_LOGGED_OUT
      }
    ];
    store.dispatch(logoutAction());
    expect(store.getActions()).toEqual(expectedAction)
  })
});

const formObj = {
  email:'abc@gmail.com',
  name:'rajdeep',
  password:'rajdeep'
}
describe("Testing registerUserAction()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get USER_REGISTERED_SUCCESS", () => {
    mock.onPost("/users").reply(200, {
      data: formObj
    });

    store.dispatch(registerUserAction(formObj))
    .then(() => {
      let expectedAction = [
        {
          type: USER_REGISTERED_SUCCESS,
          payload: {
            data: formObj
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedAction);
    })
    .catch(() => {
      let expectedAction = [
        {
          type: USER_REGISTERED_FAILURE,
          payload: {
            data: {}
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedAction);
    })
  })
});
