import { combineReducers } from "redux";
import { addUserReducer } from "./addUser/addUserReducer";
import { addNewsReducer } from "./addNews/addNewsReducer";

export const rootReducer = combineReducers({ addUserReducer, addNewsReducer })