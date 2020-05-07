import { combineReducers } from "redux";
import AuthReducer from "../views/Auth/auth.reducer";
import NavbarReducer from '../components/Navbar/navbar.reducer'

const rootReducer =  combineReducers({
    AuthReducer,
    NavbarReducer
})

export default rootReducer