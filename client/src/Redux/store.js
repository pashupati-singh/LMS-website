import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {reducer as authReducer} from "./Auth/reducer";
import {reducer as signUpReducer} from "./signup/reducer";
import { reducer as coursesReducer } from "./Courses/reducer";
import {reducer as adminReducer} from './Admin/reducer'
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({authReducer,signUpReducer,coursesReducer,adminReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

