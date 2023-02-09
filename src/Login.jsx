import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() { 
  const [errors, setErrors] = useState([]);

  const handleLogin = (event) => {
    event.preventDefault();
    setErrors([]);
    console.log("tying to login");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/login", params).then(response =>{
      console.log(response.data);
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
      localStorage.setItem("jwt", response.data.jwt);
      event.target.reset();
      window.location.href = "/home";
      console.log("logged in");
    })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };
  
  return (
    <div class="container">
      <div class="card">
        <div class ="div-login">
          <h2>Login</h2>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form onSubmit ={handleLogin}>
        Email<input type="email" name="email"></input><br/>
        Password<input type="password" name="password"></input><br/>
            <button type="submit" class="btn btn-primary">Login</button>
            <a href ="">Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
  );
}
