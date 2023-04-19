import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { useEffect } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() { 
  const [errors, setErrors] = useState([]);
  // const [spic, setSpic] = useState([]);

  const handleLogin = (event) => {
    event.preventDefault();
    setErrors([]);
    console.log("tying to login");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/login", params).then(response =>{
      console.log(response.data);
      console.log(response.data.image_url);
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
      localStorage.setItem("jwt", response.data.jwt);
      // setSpic(response.data.image_url);
      event.target.reset();
      window.location.href = "/home";
      console.log("logged in");
    })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
    };
    // console.log(spic);
    // useEffect(handleLogin, []);
  
  return (
    <div class="container">
      {/* <div class="card">
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
      </div> */}

      <div class="login-form">
        <form onSubmit ={handleLogin} method="post">
          <h2 class="text-center">Log in</h2>       
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email"  name="email" required="required"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" name="password" required="required"/>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
          </div>
          <div class="clearfix">
            <label class="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <a href="#" class="float-right">Forgot Password?</a>
          </div>        
        </form>
        <p class="text-center"><a href="http://localhost:5173/signup">Create an Account</a></p>
      </div>
    </div>
  );
}
