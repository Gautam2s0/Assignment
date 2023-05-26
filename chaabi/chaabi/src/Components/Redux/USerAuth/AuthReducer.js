import {
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILED,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  user: {},
  isError: false,
  isAuth:false
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTRATION_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_REGISTRATION_SUCCESS:
      return {
        ...state,
      };
    case USER_REGISTRATION_FAILED:
      return {
        ...state,
        isError: true,
      };
    case USER_LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user:payload,
        isAuth:true
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isError: true,
      };
    default:
        return state
  }
};
