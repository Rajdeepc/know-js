import Service from "../../utils/api";
import {
  VIDEO_ITEMS_SAVE_SUCCESS,
  VIDEO_ITEMS_SAVE_FAILED,
  VIDEO_ITEMS_UNSAVE_SUCCESS,
  VIDEO_ITEMS_UNSAVE_FAILED
} from "./video.action.types";


const saveVideoItemAction = (videoId,email) => dispatch => {
    Service.saveVideoItems(videoId,email)
    .then(response => {
        dispatch({
            type: VIDEO_ITEMS_SAVE_SUCCESS,
            payload: response
        })
    }).catch((error) => {
        dispatch({
            type: VIDEO_ITEMS_SAVE_FAILED,
            payload:error
        })
    })
}

const unsaveVideoItemAction = (videoId) => dispatch => {
    Service.unsaveVideoItems(videoId)
    .then(response => {
        dispatch({
            type: VIDEO_ITEMS_UNSAVE_SUCCESS,
            payload: response
        })
    }).catch((error) => {
        dispatch({
            type: VIDEO_ITEMS_UNSAVE_FAILED,
            payload:error
        })
    })
}



export { saveVideoItemAction, unsaveVideoItemAction }