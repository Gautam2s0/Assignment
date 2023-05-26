import {
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOG_OUT
  } from "./actionTypes";
  
  const initialState = {
    isLoading: false,
    user: {},
    isError: false,
    isAuth:false
  };
  
  export const LoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case USER_LOGIN_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          user:payload,
          isAuth:true,
          isLoading:false
          
        };
      case USER_LOGIN_FAILED:
        return {
          ...state,
          isError: true,
        };
        case USER_LOG_OUT:
          return{
            ...state,
            isLoading:false,
            isError:false,
            user:{}
          }
      default:
          return state
    }
  };
  