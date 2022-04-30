import { combineReducers } from "redux";
import CounterReducer from "./reducer";

export default combineReducers({
  counter: CounterReducer,
});
