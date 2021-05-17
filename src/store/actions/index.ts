import { combineReducers } from "redux";
import headerReducers from "./header";


export default combineReducers({
  header: headerReducers
})