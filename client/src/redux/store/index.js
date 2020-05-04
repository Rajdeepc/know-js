import { createStore, applyMiddleware } from "redux"; // for creating store and applying middlerware like thunk
import thunk from "redux-thunk"; // for async actions
import rootReducer from "../rootReducer";
import { loadState, saveState } from "./sessionStorage";
import throttle from 'lodash/throttle';



const persistedState = loadState();

const store = createStore(
  rootReducer, 
  persistedState, 
  applyMiddleware(thunk));

store.subscribe(throttle(() => {
  saveState({
    LoginReducer: store.getState().LoginReducer
  });
},1000 ));


export default store;
