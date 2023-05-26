

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "./Spinner";
import styles from "../Styles/Login.css"
import {UserRegitrationLoading,UserRegitrationSuccess,UserRegitrationFailed} from "../Redux/UserAuth/action"

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("")
  const loading = useSelector((store) => store.RegisterReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [img, setImg] = useState("");
  const url=`http://localhost:8080`

  const handleClick = () => {
    let data = {
      name,
      email,
      password,
      avtar: img,
    };
    if (name && email && password && img) {
      dispatch(UserRegitrationLoading())
      axios.post(`${url}/register`, data).then((res)=>{
        dispatch(UserRegitrationSuccess(res.data))
        if(res.data.msg=="Registration successfull"){
          toast.success(res.data.msg, {
            position: "top-center", theme: "colored",
          }
          );
          setTimeout(()=>{
            navigate("/login")
          },1500)

        }
        else{
          toast.error(res.data.msg, {
            position: "top-center", theme: "colored",
          }
          );
        }
      })
      .catch((err)=>{
        dispatch(UserRegitrationFailed())
      })
      
    }
    else {

      toast.error('Please fill all credentials', {
        position: "top-center", theme: "colored",
      }
      );
    } 
    // setEmail('');
    // setName("")
    // setPassword("")
    // setImg("")
    };
    



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
    console.log(process.env.REACT_APP_PORT)

  return (
    <div id='mainLogin' >
      <h1>Open Your Account </h1>
      <div id="inputDiv" >
      <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
            type="url"
            placeholder="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        <button
          disabled={email===""}
          onClick={handleClick}
        >
          {loading ? (
            <Spinner/>
          ) : (
            "Signup"
          )}
        </button>
        <div
        id="foot"
      >
        <p>Already have an account</p>
        <Link to="/login" style={{ color: "tomato", fontWeight: "600" }}>
          login
        </Link>
      </div>
      </div>
      
      <ToastContainer /> 
    </div>
  );
};
