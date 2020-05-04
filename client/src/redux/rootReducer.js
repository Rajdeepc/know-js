import { combineReducers } from "redux";
import RegisterReducer from "../components/Register/register.reducer";
import LoginReducer from "../components/Login/login.reducer";

const rootReducer =  combineReducers({
    RegisterReducer,
    LoginReducer
})

export default rootReducer