import Service from '../../utils/api';
import { USER_LOGIN_SUCCESS , USER_LOGGED_OUT,USER_LOGIN_FAILURE } from './login.action.types';



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
            payload: err
        })
    })
}

const logoutAction = () => dispatch => {
    sessionStorage.removeItem('state');
    dispatch({
        type: USER_LOGGED_OUT
    })
    
}

export { loginAction,logoutAction }