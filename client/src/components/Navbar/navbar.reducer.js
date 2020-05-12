import { GET_GITHUB_DATA_SUCCESS,
  GET_GITHUB_DATA_FAILURE, 
  GET_YOUTUBE_DATA_SUCCESS, 
  GET_YOUTUBE_DATA_FAILURE,
  PROFILE_DATA_RECEIVED,
  PROFILE_DATA_FAILED
} 
from './navbar.action.types'; 

const INITIAL_STATE = {
  isGithubApiSuccess: false,
  isYoutubeApiSuccess: false,
  githubAPiData: [],
  youtubeApiData: [],
  isProfileApiSuccess: false,
  profileData:[],
  error:{}
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
    case PROFILE_DATA_RECEIVED:
      return {
        ...state,
        isProfileApiSuccess: true,
        profileData: action.payload.profile
      };
    case PROFILE_DATA_FAILED:
      return {
        ...state,
        isProfileApiSuccess: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default NavbarReducer;
