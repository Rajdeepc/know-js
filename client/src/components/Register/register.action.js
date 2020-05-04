import Service from '../../utils/api';
import { USER_REGISTERED_SUCCESS , USER_REGISTERED_FAILURE } from './register.action.types';


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
            payload: err
        })
    })
}



export { registerUserAction }