import { combineReducers } from "redux";
import AuthReducer from "../views/Auth/auth.reducer";
import CategoryDataReducer from '../views/Categories/category.reducer'
import VideoPageReducer from '../views/VideoPage/video.reducer'
import HomePageReducer from '../views/Home/home.reducer'

const rootReducer =  combineReducers({
    AuthReducer,
    CategoryDataReducer,
    VideoPageReducer,
    HomePageReducer,
})

export default rootReducer