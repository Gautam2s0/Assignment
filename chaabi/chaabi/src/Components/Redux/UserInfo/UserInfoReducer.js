import{
    GETING_USER_INFO_LOADING,
    GETING_USER_INFO_SUCCESS,
    GETING_USER_INFO_FAILED,
}
from "./actionTypes"


const initialState={
    isLoading:false,
    isError:false,
    user:{}
}

export const UserInfoReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case GETING_USER_INFO_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case GETING_USER_INFO_SUCCESS:
            return{
                ...state,
                user:payload
            }
        case GETING_USER_INFO_FAILED:
            return{
                ...state,
                isError:true
            }
        default:
            return state
    }
  
}
