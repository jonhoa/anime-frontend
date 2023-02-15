import axios from "axios";
import { useState } from "react";

export function Signup() { 
  const handleSignup = (event) => {
    event.preventDefault();
    console.log("Submitting request");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/users",params).then(response => {
      console.log(response.data);
      console.log("user created");
      event.target.reset();
      window.location.href = "/home";
    });
  };
 
  return (
    <div class="container">
      {/* <h1> Sign Up</h1>
      <form onSubmit ={handleSignup}>
        Name:<input type ="text" name ="name"></input><br/>
        Email:<input type ="email" name ="email"></input><br/>
        Password:<input type ="password" name ="password"></input><br/>
        Password Confirmation:<input type ="password" name ="password_confirmation"></input><br/>
        <button type="submit">Sign Up</button>
      </form> */}
       <div class="login-form">
        <form onSubmit ={handleSignup} autocomplete="off">
          <h2 class="text-center">Sign Up</h2>       
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name"  name="name" required="required" autocomplete="off"/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" name="email" required="required" autocomplete="off"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" name="password" required="required" autocomplete="off"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password Confirmation" name="password_confirmation" required="required" autocomplete="off"/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Profile Image Url" name="image_url"/>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Create</button>
          </div>
          <div class="clearfix">
            <label class="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <a href="#" class="float-right">Forgot Password?</a>
          </div>        
        </form>
        <p class="text-center"><a href="http://localhost:5173/login">Already Have an Account</a></p>
      </div>
    </div>
  );
}
