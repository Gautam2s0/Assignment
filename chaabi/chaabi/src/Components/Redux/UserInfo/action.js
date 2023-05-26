import{
    GETING_USER_INFO_LOADING,
    GETING_USER_INFO_SUCCESS,
    GETING_USER_INFO_FAILED,
}
from "./actionTypes"

//  loading
export const GettingUserInfoLoading=()=>{
    return{
        type:GETING_USER_INFO_LOADING
    }
}

//  successs
export const GettingUserInfoSuccess=(payload)=>{
    return{
        type:GETING_USER_INFO_SUCCESS,
        payload
    }
}

// failed
export const GettingUserInfoFailed=()=>{
    return{
        type:GETING_USER_INFO_FAILED
    }
}