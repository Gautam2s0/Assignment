import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoutes = ({ Children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  console.log({ isAuth });
  const token = JSON.parse(localStorage.getItem("token"));
  if(isAuth!==true){
    return(
        <Navigate to="/Login"/>
    )
}
return Children
};
