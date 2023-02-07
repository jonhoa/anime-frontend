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
  });
  };

  return (
    <div>
      <h1> Sign Up</h1>
      <form onSubmit ={handleSignup}>
        Name:<input type ="text" name ="name"></input><br/>
        Email:<input type ="email" name ="email"></input><br/>
        Password:<input type ="password" name ="password"></input><br/>
        Password Confirmation:<input type ="password" name ="password_confirmation"></input><br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
