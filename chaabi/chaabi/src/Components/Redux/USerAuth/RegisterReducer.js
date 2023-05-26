import {
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILED,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
};

export const RegisterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTRATION_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading:false
      };
    case USER_REGISTRATION_FAILED:
      return {
        ...state,
        isError: true,
      };
    
    default:
        return state
  }
};
