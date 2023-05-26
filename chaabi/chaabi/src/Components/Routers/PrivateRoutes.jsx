import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoutes = ({ Children }) => {
  const isAuth = useSelector((store) => store.LoginReducer.isAuth);
  const token=JSON.parse(localStorage.getItem('token'))
  console.log(isAuth );
    if(isAuth!==true||!token){
        return(
            <Navigate to="/login"/>
        )
    }
    return Children
};
