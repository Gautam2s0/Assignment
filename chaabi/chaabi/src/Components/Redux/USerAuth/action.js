import {
    USER_REGISTRATION_LOADING,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FAILED,
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOG_OUT
}from "./actionTypes"

// ************************Registraiton ***********************************************

//  loading
export const UserRegitrationLoading=()=>{
    return {
        type:USER_REGISTRATION_LOADING
    }
}

// success
export const UserRegitrationSuccess=(payload)=>{
    return {
        type:USER_REGISTRATION_SUCCESS,
        payload
    }
}

// failed
export const UserRegitrationFailed=()=>{
    return {
        type:USER_REGISTRATION_FAILED
    }
}

//  *********************login action*************************************

// loading
export const UserLoginLoading=()=>{
    return {
        type:USER_LOGIN_LOADING
    }
}

// success
export const UserLoginSuccess=(payload)=>{
    return {
        type:USER_LOGIN_SUCCESS,
        payload
    }
}

// failed
export const UserLoginFailed=()=>{
    return {
        type:USER_LOGIN_FAILED
    }
}

// logout
export const UseLogOut=()=>{
    return {
        type:USER_LOG_OUT
    }
}