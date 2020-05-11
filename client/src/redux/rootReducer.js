import { combineReducers } from "redux";
import AuthReducer from "../views/Auth/auth.reducer";
import NavbarReducer from '../components/Navbar/navbar.reducer'
import VideoPageReducer from '../views/VideoPage/video.reducer'

const rootReducer =  combineReducers({
    AuthReducer,
    NavbarReducer,
    VideoPageReducer
})

export default rootReducer