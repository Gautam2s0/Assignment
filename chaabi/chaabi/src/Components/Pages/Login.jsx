
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, json, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "./Spinner";
import styles from "../Styles/Login.css"


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    let data = {
      email,
      password,
    };
    // if (email && password) {
    //   dispatch(LoginLoading());
    //   axios
    //     .post(`${process.env.REACT_APP_PORT}/login`, data) 
    //     .then((res) => {
    //       dispatch(LoginSuccess(res.data));
    //       console.log(res);
    //       if (res.data.msg == "Login Successfull") {
    //         localStorage.setItem("token",JSON.stringify(res.data.token))
    //         toast.success(res.data.msg, {
    //           position: "top-center",
    //           theme: "colored",
    //         });
    //         navigate('/blog')
    //       } else {
    //         toast.error(res.data.msg, {
    //           position: "top-center",
    //           theme: "colored",
    //         });
    //       }
    //     })
    //     .catch((err) => {
    //       dispatch(LoginFailed(err));
    //     });
    // } else {
    //   toast.error("Please fill all credentials", {
    //     position: "top-center",
    //     theme: "colored",
    //   });
    // }



    // axios
    //   .post(`http://localhost:8080/login`, { email, password })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // setEmail("");
    // setPassword("");
    // console.log(data)
  };
  useEffect(() => {
    console.log(email, password);
  }, []);

  return (
    <div id='mainLogin' >
      <h1>Login Your Account </h1>
      <div id="inputDiv" >
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={email===""}
          onClick={handleClick}
        >
          {loading ? (
            <Spinner/>
          ) : (
            "Signin"
          )}
        </button>
        <div
        id="foot"
      >
        <p>Don't have account</p>
        <Link to="/signup" style={{ color: "blue", fontWeight: "600" }}>
          Signup
        </Link>
      </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};
