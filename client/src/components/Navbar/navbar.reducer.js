import {
  GET_GITHUB_DATA_SUCCESS,
  GET_GITHUB_DATA_FAILURE,
  GET_YOUTUBE_DATA_SUCCESS,
  GET_YOUTUBE_DATA_FAILURE,
  GET_NPM_DATA_FAILURE,
  GET_NPM_DATA_SUCCESS,
} from "./navbar.action.types";

const INITIAL_STATE = {
  isGithubApiSuccess: false,
  isYoutubeApiSuccess: false,
  githubAPiData: [],
  youtubeApiData: [],
  isNpmDataSuccess: false,
  npmData: [],
  npmDataError: {},
};

const NavbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GITHUB_DATA_SUCCESS:
      return {
        ...state,
        isGithubApiSuccess: true,
        githubAPiData: action.payload.items,
      };
    case GET_GITHUB_DATA_FAILURE:
      return {
        ...state,
        isGithubApiSuccess: false,
      };
    case GET_YOUTUBE_DATA_SUCCESS:
      return {
        ...state,
        isYoutubeApiSuccess: true,
        youtubeApiData: action.payload.items,
      };
    case GET_YOUTUBE_DATA_FAILURE:
      return {
        ...state,
        isYoutubeApiSuccess: false,
      };
    case GET_NPM_DATA_SUCCESS:
      return {
        ...state,
        isNpmDataSuccess: true,
        npmData: action.payload.results
      };
    case GET_NPM_DATA_FAILURE:
      return {
        ...state,
        isNpmDataSuccess: false,
        npmDataError: action.payload,
      };
    default:
      return state;
  }
};

export default NavbarReducer;
