import {
  GET_GITHUB_DATA_SUCCESS,
  GET_YOUTUBE_DATA_SUCCESS,
  SEARCH_TEXT,
} from "../views/Categories/category.action.types";

import {
  getSelectionData,
  getProfileData,
  searchAction,
} from "../views/Categories/category.action";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({});

/**
 * Testing getSelectionData
 */
describe("Testing getSelectionData()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get GET_GITHUB_DATA_SUCCESS , GET_YOUTUBE_DATA_SUCCESS", () => {
    mock.onPost("/auth").reply(200, {
      data: {
        selected: "John",
      },
    });

    store.dispatch(getSelectionData("John")).then(() => {
      let expectedAction = [
        {
          type: GET_GITHUB_DATA_SUCCESS,
          payload: {
            data: {
              selected: "John",
            },
          },
        },
        {
          type: GET_YOUTUBE_DATA_SUCCESS,
          payload: {
            data: {
              selected: "John",
            },
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

/**
 * Testing getProfileData
 */
describe("Testing getProfileData()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get PROFILE_DATA_RECEIVED", () => {
    mock.onPost("/auth").reply(200, {
      data: {
        emailId: "fdriya@gmail.com",
      },
    });

    store.dispatch(getProfileData("fdriya@gmail.com")).then(() => {
      let expectedAction = [
        {
          type: PROFILE_DATA_RECEIVED,
          payload: {
            data: {
              emailId: "fdriya@gmail.com",
            },
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

/**
 * Testing getProfileData
 */
describe("Testing searchAction()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get SEARCH_TEXT", () => {
    const value = "datastructure";
    const expectedActions = [
      {
        text: value,
        type: "SEARCH_TEXT",
      },
    ];
    store.dispatch(searchAction(value));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
