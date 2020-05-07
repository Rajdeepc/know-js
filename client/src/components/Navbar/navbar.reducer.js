import { GET_GITHUB_DATA_SUCCESS,
    GET_GITHUB_DATA_FAILURE, 
    GET_YOUTUBE_DATA_SUCCESS, 
    GET_YOUTUBE_DATA_FAILURE } 
from './navbar.action.types'; 

const INITIAL_STATE = {
    isGithubApiSuccess: false,
    isYoutubeApiSuccess: false,
    githubAPiData:[],
    youtubeApiData:[]
}


const NavbarReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_GITHUB_DATA_SUCCESS:
            return {
                ...state,
                isGithubApiSuccess: true,
                githubAPiData: action.payload.items
            }
            case GET_GITHUB_DATA_FAILURE:
            return {
                ...state,
                isGithubApiSuccess: false
            }
            case GET_YOUTUBE_DATA_SUCCESS:
            return {
                ...state,
                isYoutubeApiSuccess: true,
                youtubeApiData: action.payload.items
            }
            case GET_YOUTUBE_DATA_FAILURE:
            return {
                ...state,
                isYoutubeApiSuccess: false
            }
            default:
                return state
    }
}

export default NavbarReducer