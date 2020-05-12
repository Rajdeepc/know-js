import { USER_VIDEOS_RECEIVED, USER_VIDEOS_FAILED } from "./home.action.types";

const INITIAL_STATE = {
  isUserVideosSuccess: false,
  userVideosData: [],
  errorMsg: {},
};

const HomePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_VIDEOS_RECEIVED:
      return {
        ...state,
        isUserVideosSuccess: true,
        userVideosData: action.payload,
      };
    case USER_VIDEOS_FAILED:
      return {
        ...state,
        isUserVideosSuccess: false,
        errorMsg: action.payload,
      };
      default:
          return state;
  }
};

export default HomePageReducer
