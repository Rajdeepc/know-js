import Service from '../../utils/api';
import { GET_GITHUB_DATA_SUCCESS,
    GET_GITHUB_DATA_FAILURE, 
    GET_YOUTUBE_DATA_SUCCESS, 
    GET_YOUTUBE_DATA_FAILURE,
    PROFILE_DATA_RECEIVED,
    PROFILE_DATA_FAILED,
    SEARCH_TEXT
} 
from './category.action.types'; 

const getSelectionData = (selectedItem) => async dispatch => {

    try {
        const getGithubData = await Service.getGithubRepositories(selectedItem)
        if (getGithubData){
            dispatch({
                type: GET_GITHUB_DATA_SUCCESS,
                payload: getGithubData
            })
        }
    } catch (e) {
        dispatch({
            type: GET_GITHUB_DATA_FAILURE,
            payload: e
        })
    }
   
    try {
        const getYoutubeDataResponse = await Service.getYoutubeData(selectedItem)
        if (getYoutubeDataResponse){
            dispatch({
                type: GET_YOUTUBE_DATA_SUCCESS,
                payload: getYoutubeDataResponse
            })
        }
    } catch (e) {
        dispatch({
            type: GET_YOUTUBE_DATA_FAILURE,
            payload: e
        })
    }
}


const getProfileData = (email) => async dispatch => {
    try {
        const getProfileResponse = await Service.getMyProfileData(email)
        if (getProfileResponse){
            dispatch({
                type: PROFILE_DATA_RECEIVED,
                payload: getProfileResponse
            })
        }
    } catch (e) {
        dispatch({
            type: PROFILE_DATA_FAILED,
            payload: e
        })
    }
}

const searchAction = (value) => dispatch => {
    dispatch({
        type: SEARCH_TEXT,
        text: value
    })
}

export { getSelectionData,getProfileData,searchAction }