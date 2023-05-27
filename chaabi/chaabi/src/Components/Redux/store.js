import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { UserInfoReducer } from './UserInfo/UserInfoReducer';
import { RegisterReducer } from './UserAuth/RegisterReducer';
import { LoginReducer } from './UserAuth/LoginReducer';
import createSagaMiddleware from 'redux-saga'



const sagaMiddleware = createSagaMiddleware()

const reducer=combineReducers({
    RegisterReducer,
    LoginReducer,
    UserInfoReducer
})

export const store=legacy_createStore(reducer,applyMiddleware(sagaMiddleware)) 