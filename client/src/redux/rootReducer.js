import { combineReducers } from "redux";
import AuthReducer from "../views/Auth/auth.reducer";
import NavbarReducer from '../components/Navbar/navbar.reducer'
import VideoPageReducer from '../views/VideoPage/video.reducer'
import HomePageReducer from '../views/Home/home.reducer'

const rootReducer =  combineReducers({
    AuthReducer,
    NavbarReducer,
    VideoPageReducer,
    HomePageReducer
})

export default rootReducer