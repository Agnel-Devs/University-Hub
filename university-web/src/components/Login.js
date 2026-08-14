import React, { useState, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
function Login(){
    const {login}=useContext(AuthContext);
    const [creds,setCreds]=useState({
        username:"",
        password:""
    });
    const[message,setMessage]=useState("");
    const handlechange=(e) => {
        setCreds(
            {...creds,
            [e.target.name]: e.target.value
    });
    };
    const handleLogin=async ()=> {
        try{
            const res=await axios.post(
                "http://127.0.0.1:8000/api-token-auth/",
                creds
            );
            const token = res.data.token;
            localStorage.setItem("userToken", token);
            axios.defaults.headers.common["Authorization"] = `Token ${token}`;
            // update app auth state
            login({ token });
            alert("Login Successful");
        }catch(err){
            alert("Invalid Credentials");
            console.log(err.response?.data || err.message);
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <input name="username" placeholder="Username" value={creds.username} onChange={handlechange}/>
            <br/>
            <input type="password" name="password" placeholder="password" value={creds.password} onChange={handlechange}/><br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;