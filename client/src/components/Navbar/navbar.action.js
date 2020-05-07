import Service from '../../utils/api';
import { GET_GITHUB_DATA_SUCCESS , GET_GITHUB_DATA_FAILURE, GET_YOUTUBE_DATA_SUCCESS, GET_YOUTUBE_DATA_FAILURE } from './navbar.action.types'; 


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

export { getSelectionData }