import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";

export function Login() { 
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("tying to login");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/login", params).then(response =>{
      console.log(response.data);
      event.target.reset();
      console.log("logged in");
    });
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit ={handleLogin}>
        Email<input type="email" name="email"></input><br/>
        Password<input type="password" name="password"></input><br/>
        <button type="submit">Login</button>
        <a href ="">Forgot Password?</a>
      </form>
    </div>
  );
}
