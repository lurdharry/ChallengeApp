import { combineReducers } from "redux";
import ActitvityReducer from "./ActitvityReducer";

export default combineReducers({
  activity: ActitvityReducer,
});
