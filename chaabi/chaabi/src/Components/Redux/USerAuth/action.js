import {
    USER_REGISTRATION_LOADING,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FAILED,
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED
}from "./actionTypes"

export const UserRegitrationLoading=()=>{
    return {
        type:USER_REGISTRATION_LOADING
    }
}
export const UserRegitrationSuccess=(payload)=>{
    return {
        type:USER_REGISTRATION_SUCCESS,
        payload
    }
}
export const UserRegitrationFailed=()=>{
    return {
        type:USER_REGISTRATION_FAILED
    }
}

//  login action

export const UserLoginLoading=()=>{
    return {
        type:USER_REGISTRATION_LOADING
    }
}
export const UserLoginSuccess=(payload)=>{
    return {
        type:USER_REGISTRATION_SUCCESS,
        payload
    }
}
export const UserLoginFailed=()=>{
    return {
        type:USER_REGISTRATION_FAILED
    }
}
