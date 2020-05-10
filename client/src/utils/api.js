import axios from 'axios';
import { BASE_URL,API_ENDPOINTS } from './environment';
import { paramSerializer } from './commonUtil';
import searchYoutube from 'youtube-api-v3-search';
import { GOOGLE_API_KEY } from '../config/config';


/**
 * @method registerUser
 * @param {*} obj 
 */
const registerUser = (obj) => {
    const body = {
        email: obj.email,
        username: obj.username,
        password: obj.password
    }
    const url = BASE_URL + API_ENDPOINTS.signup;
    return axios.post(url,body)
    .then(response => {
        return response.data
    })
}

/**
 * @method loginUser
 * @param {*} obj 
 */
const loginUser = (obj) => {
    const body = {
        email: obj.email,
        password: obj.password
    }
    const url = BASE_URL + API_ENDPOINTS.signin;
    return axios.post(url,body)
    .then(response => {
        return response.data
    })
}


const getMyProfileData = (email) => {
    const url = BASE_URL + API_ENDPOINTS.getProfile + "/" + email;
    return axios.get(url)
    .then(response => {
        return response.data
    })
}

/** get youtube data videos */



const getGithubRepositories = (searchKey) => {
    const url = 'https://api.github.com/search/repositories'
    const paramObj = {
        q:searchKey,
        sort:'stars',
        order:'desc'
    }
    const baseUrl = paramSerializer(url,paramObj);
    return axios.get(baseUrl)
    .then(response => {
        return response.data
    })
}


const getYoutubeData = (searchQuery) => {
    const options = {
        q:searchQuery,
        part:'snippet',
        type:'video',
        maxResults: 50,
        order:'rating'
      }
    return searchYoutube(GOOGLE_API_KEY,options);
}

const getnpmPackages = (searchQuery) => {
    const url = 'https://api.npms.io/v2/search'
    const paramObj = {
        q:searchQuery,
        size:50
    }
    const baseUrl = paramSerializer(url,paramObj);
    return axios.get(baseUrl)
    .then(response => {
        return response.data
    })
}


const bookMarkItemsToProfile = (itemObj,email) => {
    const url = BASE_URL + API_ENDPOINTS.profile;
    const body = {
        email:email,
        lovedItems: itemObj.lovedItems
    }
    return axios.post(url,body)
    .then(response => {
        return response.data
    })
}

const validateUserEmail = (email) => {
    const url = BASE_URL + API_ENDPOINTS.validateUser;
    const body = {
        email:email
    }
    return axios.post(url,body)
    .then(response => {
        return response.data
    })
}


const updateUserPassword = (email,newPassword) => {
    const url = BASE_URL + API_ENDPOINTS.updatePassword;
    const body = {
        email:email,
        password: newPassword
    }
    return axios.post(url,body)
    .then(response => {
        return response.data
    })
}



export default {
    bookMarkItemsToProfile,
    registerUser,
    loginUser,
    getMyProfileData,
    getGithubRepositories,
    getYoutubeData,
    getnpmPackages,
    validateUserEmail,
    updateUserPassword
    
}