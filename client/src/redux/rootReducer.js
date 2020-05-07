import { combineReducers } from "redux";
import AuthReducer from "../views/Auth/auth.reducer";
import CategorySelectorReducer from '../components/CategoryBar/category.reducer'

const rootReducer =  combineReducers({
    AuthReducer,
    CategorySelectorReducer
})

export default rootReducer