import { combineReducers } from "redux";
import { visibilityFilter } from "./VisibilityFilter";
import todos from "./Todos";

export default combineReducers({ todos, visibilityFilter });
