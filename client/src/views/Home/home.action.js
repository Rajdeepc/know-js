import Service from "../../utils/api";
import {
    USER_VIDEOS_RECEIVED,
    USER_VIDEOS_FAILED
} from "./home.action.types";


const getUserVideosAction = (email) => dispatch => {
    Service.getUserVideoItems(email)
    .then(resp => {
        dispatch({
            type: USER_VIDEOS_RECEIVED,
            payload: resp
        })
    }).catch(err => {
        dispatch({
            type: USER_VIDEOS_FAILED,
            payload: err
        })
    })
}

export { getUserVideosAction }