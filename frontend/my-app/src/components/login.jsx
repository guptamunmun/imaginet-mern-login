import React, { useEffect, useState }from "react";
import {useNavigate} from "react-router-dom"

const Login =()=>{
    const [Name,setName] =useState("");
    const [mobilenumber,setMobilenumber] =useState("");
    const [Email,setEmail] =useState("");
    const navigate =useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate("/")
        }
    },[])

    const handleLogin = async () => {
        let result = await fetch("http://localhost:3000/login", {
          method: "post",
          body: JSON.stringify({ Name,Email,mobilenumber }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        if (result.name) {
          localStorage.setItem("user", JSON.stringify(result));
          navigate("/");
        } else {
          alert("provide right cridential");
        }
      };
    
return (
    <div className="login">
        <h1>Login</h1>
        <input
        className="inputBox"
        type="text"
        placeholder="enter your name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
            />
            <input
        className="inputBox"
        type="text"
        placeholder="enter your mobilenumber"
        value={mobilenumber}
        onChange={(e) => setMobilenumber(e.target.value)}
            />
            <input
        className="inputBox"
        type="text"
        placeholder="enter your email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin} className="submit" type="button">
                Login
            </button>
    </div>
)
}
export default Login;
