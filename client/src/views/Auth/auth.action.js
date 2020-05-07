import Service from '../../utils/api';
import { USER_LOGIN_SUCCESS , CLEAR_ALL_ERRORS,USER_LOGGED_OUT,USER_LOGIN_FAILURE ,USER_REGISTERED_SUCCESS , USER_REGISTERED_FAILURE} from './auth.action.types';



const loginAction = (loginObj) => dispatch => {
    Service.loginUser(loginObj)
    .then(response => {
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: response
        })
    }).catch(err => {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: err.response && err.response.data ? err.response.data : err
        })
    })
}

const logoutAction = () => dispatch => {
    sessionStorage.removeItem('state');
    dispatch({
        type: USER_LOGGED_OUT
    })
    
}



const registerUserAction = (formObj) => dispatch => {
    Service.registerUser(formObj)
    .then(response => {
        dispatch({
            type: USER_REGISTERED_SUCCESS,
            payload: response
        })
    })
    .catch(err => {
        dispatch({
            type: USER_REGISTERED_FAILURE,
            payload: err.response && err.response.data ? err.response.data : err
        })
    })
}


const clearAllErrors = () => dispatch => {
    dispatch({ type: CLEAR_ALL_ERRORS })
}

export { loginAction,logoutAction,registerUserAction,clearAllErrors }