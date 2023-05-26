import {combineReducers, legacy_createStore} from "redux"
import { AuthReducer } from './UserAuth/AuthReducer';
import { UserInfoReducer } from './UserInfo/UserInfoReducer';

const reducer=combineReducers({
    AuthReducer,
    UserInfoReducer
})

export const store=legacy_createStore(reducer)