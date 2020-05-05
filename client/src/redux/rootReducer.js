import { combineReducers } from "redux";
import RegisterReducer from "../components/Register/register.reducer";
import LoginReducer from "../components/Login/login.reducer";
import CategorySelectorReducer from '../components/CategoryBar/category.reducer'

const rootReducer =  combineReducers({
    RegisterReducer,
    LoginReducer,
    CategorySelectorReducer
})

export default rootReducer