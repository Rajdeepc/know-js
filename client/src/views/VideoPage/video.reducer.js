import {
  VIDEO_ITEMS_SAVE_SUCCESS,
  VIDEO_ITEMS_SAVE_FAILED,
  VIDEO_ITEMS_UNSAVE_SUCCESS,
  VIDEO_ITEMS_UNSAVE_FAILED,
} from "./video.action.types";

const INITIAL_STATE = {
  isVideoSaved: false,
  isVideoUnSaved: false,
  erroMsg: {},
  savedVideoItems:[]
};

const VideoPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIDEO_ITEMS_SAVE_SUCCESS:
      return {
        ...state,
        isVideoSaved: true,
        savedVideoItems: action.payload.data
      };
    case VIDEO_ITEMS_SAVE_FAILED:
      return {
        ...state,
        isVideoSaved: false,
      };
    case VIDEO_ITEMS_UNSAVE_SUCCESS:
      return {
        ...state,
        isVideoUnSaved: true,
      };
    case VIDEO_ITEMS_UNSAVE_FAILED:
      return {
        ...state,
        isVideoUnSaved: false,
      };

    default:
      return state;
  }
};

export default VideoPageReducer;
